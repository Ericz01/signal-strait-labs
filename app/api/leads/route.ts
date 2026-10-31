import { NextRequest, NextResponse } from 'next/server';
import validator from 'validator';
import { Redis } from '@upstash/redis/cloudflare';
import { Ratelimit } from '@upstash/ratelimit';
import { getServerEnv } from '@/lib/server-env';
import { sendEmail, LEADS_INBOX } from '@/lib/email';
import { leadConfirmationEmail, leadNotificationEmail, VISITOR_REPLY_TO } from '@/lib/email-templates';

// ---------------------------------------------------------------------------
// Rate limiter setup
// ---------------------------------------------------------------------------
// IMPORTANT: Do NOT read the Upstash credentials or create the client at
// module scope. On Cloudflare Workers, secrets are delivered per request
// through the runtime `env` binding, so they are read inside the POST handler
// via `getServerEnv()` (`getCloudflareContext().env`, with a `process.env`
// fallback for `next dev`). The client is built per request; the REST client
// is just a fetch wrapper, so this is cheap, and nothing is cached across
// requests.
function createRatelimit(): Ratelimit | null {
  // Secrets are read here, per request, via the Cloudflare context.
  const url = getServerEnv('UPSTASH_REDIS_REST_URL');
  const token = getServerEnv('UPSTASH_REDIS_REST_TOKEN');

  // Only initialize if credentials are present and the URL looks valid.
  if (!url?.startsWith('https://') || !token) {
    console.warn('Rate limiting disabled: Upstash credentials not configured.');
    return null;
  }

  try {
    const redis = new Redis({ url, token });
    return new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(5, '10 m'), // 5 requests per 10 minutes
      // The in-memory cache only helps when one instance is reused across
      // requests. This instance lives for a single request, so turn it off.
      ephemeralCache: false,
    });
  } catch (err) {
    console.error('Rate limiting failed to initialize:', err);
    return null;
  }
}

function getClientIp(req: NextRequest): string {
  const cfIp = req.headers.get('CF-Connecting-IP');
  if (cfIp) return cfIp.trim();
  // x-forwarded-for can be a list ("client, proxy1, proxy2"). Key on the first
  // entry only, so one client always maps to one rate limit bucket.
  const forwarded = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim();
  return forwarded || '127.0.0.1';
}

export async function POST(req: NextRequest) {
  try {
    // 0. Rate Limiting Check
    // The limiter is created here, inside the request, so the env binding is
    // available and no client is shared across requests or isolates.
    const ip = getClientIp(req);

    const ratelimit = createRatelimit();
    if (ratelimit) {
      const { success, reason } = await ratelimit.limit(ip);

      if (reason === 'timeout') {
        // Upstash did not answer within the timeout (default 5s) and the
        // library let the request through. Warn so this is visible in logs.
        console.warn('Rate limit check timed out; request allowed.');
      }

      if (!success) {
        return NextResponse.json(
          { success: false, message: 'Too many requests, please try again later.' },
          { status: 429 }
        );
      }
    }

    let body;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json(
        { success: false, message: 'Invalid JSON request' },
        { status: 400 }
      );
    }
    const { name: rawName, email: rawEmail, company: rawCompany, serviceInterest: rawService, budgetRange: rawBudget, message: rawMessage, website } = body;

    // 1. Basic Honeypot Check
    if (website) {
      // Silently ignore bots
      return NextResponse.json({ success: true }, { status: 200 });
    }

    // 2. Sanitization
    const sanitize = (val: string): string => {
      // Trim whitespace and remove HTML tags
      return val.trim().replace(/<[^>]*>?/gm, '');
    };

    const name = sanitize(rawName || '');
    const email = typeof rawEmail === 'string' ? rawEmail.trim().toLowerCase() : '';
    const company = sanitize(rawCompany || '');
    const serviceInterest = sanitize(rawService || '');
    const budgetRange = sanitize(rawBudget || '');

    // Collapse excessive newlines in message
    const message = sanitize(rawMessage || '').replace(/(\r\n|\r|\n){3,}/g, '\n\n');

    // 3. Server-side Validation
    const errors: Record<string, string> = {};

    if (!name || name.length === 0 || name.length > 100) {
      errors.name = 'Name is required and must be under 100 characters.';
    }

    if (!email || !validator.isEmail(email)) {
      errors.email = 'Valid email is required.';
    }

    if (!message || message.length === 0 || message.length > 2000) {
      errors.message = 'Message is required and must be under 2000 characters.';
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ success: false, errors }, { status: 400 });
    }

    // 4. Deliver the lead by email (Resend)
    const notification = leadNotificationEmail({ name, email, company, serviceInterest, budgetRange, message });
    const result = await sendEmail({
      to: LEADS_INBOX,
      replyTo: email,
      subject: notification.subject,
      text: notification.text,
      html: notification.html,
    });

    if (result.status === 'not-configured') {
      // Local dev without RESEND_API_KEY: nothing is sent. Log a short
      // summary so the submission is still visible, without the message body.
      console.warn('Email not sent: RESEND_API_KEY not configured.', { name, email, company });
    } else if (result.status === 'failed') {
      // Do not log the lead's details here; the error is enough to debug.
      console.error('Lead email failed:', result.error);
      return NextResponse.json(
        {
          success: false,
          message: `We could not send your message. Please try again or email us at ${LEADS_INBOX}.`,
        },
        { status: 502 }
      );
    }

    // 5. Confirmation email to the visitor. Only sent once the lead has
    // reached the team inbox. A failure here does not fail the request,
    // because the lead itself was delivered.
    if (result.status === 'sent') {
      const confirmation = leadConfirmationEmail({ name });
      const confirmationResult = await sendEmail({
        to: email,
        replyTo: VISITOR_REPLY_TO,
        subject: confirmation.subject,
        text: confirmation.text,
        html: confirmation.html,
      });
      if (confirmationResult.status === 'failed') {
        console.error('Confirmation email failed:', confirmationResult.error);
      }
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Lead Submission Error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error. Please try again later.' },
      { status: 500 }
    );
  }
}

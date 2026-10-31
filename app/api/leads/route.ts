import { NextRequest, NextResponse } from 'next/server';
import validator from 'validator';
import { Redis } from '@upstash/redis/cloudflare';
import { Ratelimit } from '@upstash/ratelimit';
import { getCloudflareContext } from '@opennextjs/cloudflare';

// ---------------------------------------------------------------------------
// Rate limiter setup
// ---------------------------------------------------------------------------
// IMPORTANT: Do NOT read the Upstash credentials or create the client at
// module scope. On Cloudflare Workers, secrets are delivered per request
// through the runtime `env` binding, so they are read inside the POST handler
// via `getCloudflareContext().env`, with a `process.env` fallback for
// `next dev`. The client is built per request; the REST client is just a
// fetch wrapper, so this is cheap, and nothing is cached across requests.
type UpstashCredentials = {
  url?: string;
  token?: string;
};

function readCloudflareEnvCredentials(): UpstashCredentials {
  try {
    // `getCloudflareContext()` is only available inside a Worker request context.
    // Outside of one (e.g. `next dev`) it throws.
    const env = getCloudflareContext().env as unknown as Record<string, unknown>;
    return {
      url: typeof env.UPSTASH_REDIS_REST_URL === 'string' ? env.UPSTASH_REDIS_REST_URL : undefined,
      token: typeof env.UPSTASH_REDIS_REST_TOKEN === 'string' ? env.UPSTASH_REDIS_REST_TOKEN : undefined,
    };
  } catch {
    // Not running inside a Cloudflare Workers request context.
    return {};
  }
}

function getUpstashCredentials(): UpstashCredentials {
  const fromContext = readCloudflareEnvCredentials();
  return {
    url: fromContext.url ?? process.env.UPSTASH_REDIS_REST_URL,
    token: fromContext.token ?? process.env.UPSTASH_REDIS_REST_TOKEN,
  };
}

function createRatelimit(): Ratelimit | null {
  const { url, token } = getUpstashCredentials();

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

    // 4. Log sanitized/validated data
    console.log('Received Lead Submission:', {
      name,
      email,
      company,
      serviceInterest,
      budgetRange,
      message: message.substring(0, 50) + '...',
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Lead Submission Error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error. Please try again later.' },
      { status: 500 }
    );
  }
}

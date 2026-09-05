import { NextRequest, NextResponse } from 'next/server';
import validator from 'validator';
import { Redis } from '@upstash/redis';
import { Ratelimit } from '@upstash/ratelimit';

// Initialize Rate Limiter with graceful fallback
let ratelimit: Ratelimit | null = null;
const upstashUrl = process.env.UPSTASH_REDIS_REST_URL;
const upstashToken = process.env.UPSTASH_REDIS_REST_TOKEN;

// Only initialize if environment variables are set and appear valid (starting with https://)
if (upstashUrl?.startsWith('https://') && upstashToken) {
  try {
    const redis = new Redis({
      url: upstashUrl,
      token: upstashToken,
    });
    ratelimit = new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(5, '10 m'), // 5 requests per 10 minutes
    });
  } catch (err) {
    console.error('Rate limiting failed to initialize:', err);
  }
} else {
  console.warn('Rate limiting disabled: Upstash credentials not configured.');
}

export async function POST(req: NextRequest) {
  try {
    // 0. Rate Limiting Check
    if (ratelimit) {
      const ip = req.headers.get('CF-Connecting-IP') || req.headers.get('x-forwarded-for') || '127.0.0.1';
      const { success } = await ratelimit.limit(ip);

      if (!success) {
        return NextResponse.json(
          { success: false, message: 'Too many requests, please try again later.' },
          { status: 429 }
        );
      }
    }

    const body = await req.json();
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

import { NextRequest, NextResponse } from 'next/server';
import validator from 'validator';
import { Redis } from '@upstash/redis';
import { Ratelimit } from '@upstash/ratelimit';
import { getCloudflareContext } from '@opennextjs/cloudflare';

// ---------------------------------------------------------------------------
// Rate limiter setup
// ---------------------------------------------------------------------------
// IMPORTANT: Do NOT read the Upstash credentials or instantiate the client at
// module scope. In the Cloudflare Workers runtime secrets are delivered
// per-request through the runtime's `env` binding (OpenNext copies them onto
// `process.env` while handling a request). At module-evaluation time (isolate
// cold start) `process.env` may not yet be populated, which caused the
// intermittent "Rate limiting disabled: Upstash credentials not configured"
// warning and a silently disabled limiter on some isolates.
//
// Instead we resolve the client lazily, on first use *inside the request*, via
// `getCloudflareContext().env` (the officially supported way to read bindings
// and secrets in an OpenNext/Workers route handler), with a fallback to
// `process.env` for `next dev` / non-Workers contexts.
let cachedRatelimit: Ratelimit | null = null;

type UpstashCredentials = {
  url?: string;
  token?: string;
};

function readCloudflareEnvCredentials(): UpstashCredentials {
  try {
    // `getCloudflareContext()` is only available inside a Worker request context.
    // Outside of one (e.g. `next dev` before a request, or SSG) it throws.
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
    });
  } catch (err) {
    console.error('Rate limiting failed to initialize:', err);
    return null;
  }
}

function getRatelimit(): Ratelimit | null {
  // Cache only successful initializations. Constructing the lightweight REST
  // client is cheap, so retrying on a later request is preferable to caching a
  // failed init for the lifetime of the isolate.
  if (!cachedRatelimit) {
    cachedRatelimit = createRatelimit();
  }
  return cachedRatelimit;
}

export async function POST(req: NextRequest) {
  try {
    // 0. Rate Limiting Check
    // Resolve the limiter lazily *inside* the request so the env binding is
    // available.
    const ip = req.headers.get('CF-Connecting-IP') || req.headers.get('x-forwarded-for') || '127.0.0.1';

    const ratelimit = getRatelimit();
    if (ratelimit) {
      const { success } = await ratelimit.limit(ip);

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
    } catch (_e) {
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

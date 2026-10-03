# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Additions for Claude Code

### Commands not covered in AGENTS.md

- `npm run build:worker` — `opennextjs-cloudflare build`; produces `.open-next/worker.js` + `.open-next/assets` for Cloudflare. Run this (not just `npm run build`) to verify changes that touch the API route or anything runtime-specific.
- There is no test framework or test script. Verification = `npm run lint` + `npm run build`.

### Deployment architecture

- The site is deployed as a **Cloudflare Worker via OpenNext** (`@opennextjs/cloudflare`), not as a pure static export. Config: `wrangler.toml` (entry `.open-next/worker.js`, `nodejs_compat`, `NEXT_CACHE` KV binding) and `open-next.config.ts` (all caches/queues set to `dummy`).
- `next.config.ts` sets `images.unoptimized: true` — there is no image optimization server, so size images appropriately before adding them to `public/`.
- `.open-next/`, `.wrangler/`, `out/` are build outputs. Don't hand-edit them.

### Content model

- Page content lives in typed arrays in `lib/*-data.ts` (services, process, differentiators, testimonials). Edit content there, not in components. `app/services/[slug]/page.tsx` uses `generateStaticParams` over `services`, so adding a service entry creates its detail page automatically.
- Route `params` are a `Promise` in this Next version (`const { slug } = await params`).
- UI primitives in `components/ui/` follow the shadcn pattern: `cva` variants + `cn()` from `@/lib/utils` + Radix `Slot` for `asChild`.

### Lead capture (`app/api/leads/route.ts`)

- The only server endpoint. `components/ContactSection.tsx` (client component) POSTs JSON to `/api/leads`.
- Pipeline: Upstash sliding-window rate limit (5 req / 10 min per `CF-Connecting-IP`) → JSON parse → `website` honeypot (silently returns success) → HTML-strip sanitization → `validator` checks → currently **only logs** the lead (no email delivery yet, despite `RESEND_API_KEY` in README).
- Secrets on Workers must be read **per request** via `getCloudflareContext().env`, falling back to `process.env` for `next dev`. Never read them or construct clients at module scope — that caused the limiter to be silently disabled on cold isolates. If credentials are missing the limiter is skipped with a warning, not an error.
- Env vars: `UPSTASH_REDIS_REST_URL`, `UPSTASH_REDIS_REST_TOKEN`, `NEXT_PUBLIC_APP_URL`, `RESEND_API_KEY` (unused so far).
- The handler still contains `TEMP DIAGNOSTIC` debug logging of env keys, which is meant to be removed once the fix is verified.

### Conflicting guidance

`.cursorrules` describes an "ultra-premium dark" theme with `#01081b` as the page background, and README mentions Geist fonts. Both are outdated. The dual-tone light-canvas system and Sora/Plus Jakarta Sans in AGENTS.md are what the code actually uses.

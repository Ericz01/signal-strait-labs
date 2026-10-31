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
- Routes beyond AGENTS.md's tree: `about/`, `contact/`, `services/` (index page), `privacy-policy/`, `terms-of-service/`, plus `loading.tsx` and `not-found.tsx`.
- Route `params` are a `Promise` in this Next version (`const { slug } = await params`).
- UI primitives in `components/ui/` follow the shadcn pattern: `cva` variants + `cn()` from `@/lib/utils` + Radix `Slot` for `asChild`.

### Lead capture (`app/api/leads/route.ts`)

- The only server endpoint. `components/ContactSection.tsx` (client component) POSTs JSON to `/api/leads`.
- Pipeline: Upstash sliding-window rate limit (5 req / 10 min per `CF-Connecting-IP`) → JSON parse → `website` honeypot (silently returns success) → HTML-strip sanitization → `validator` checks → emails the lead to `connect@signalstraitlabs.com` via Resend (`lib/email.ts`, plain `fetch` to the Resend API, no SDK). If sending fails the route returns 502; if `RESEND_API_KEY` is missing it logs a warning and still returns success.
- Secrets on Workers must be read **per request** via `getServerEnv()` in `lib/server-env.ts` (`getCloudflareContext().env`, falling back to `process.env` for `next dev`). Never read them or construct clients at module scope — that caused the limiter to be silently disabled on cold isolates. If credentials are missing the limiter is skipped with a warning, not an error.
- Env vars: `UPSTASH_REDIS_REST_URL`, `UPSTASH_REDIS_REST_TOKEN`, `NEXT_PUBLIC_APP_URL`, `RESEND_API_KEY`.
- The limiter (and its Redis client, imported from `@upstash/redis/cloudflare`) is created inside the POST handler on every request; nothing is cached at module scope. If Upstash times out (default 5s) the library lets the request through, and the route logs a warning.
- `ContactSection` is rendered on both `/` and `/contact`, so changes to the form or payload shape affect both pages.

### Conflicting guidance

`.cursorrules` describes an "ultra-premium dark" theme with `#01081b` as the page background, and README mentions Geist fonts. Both are outdated. `PROJECT_CONTEXT.md` (last verified 2026-07-07) describes deployment as Cloudflare Pages, but it is now a Worker (see above); its brand/contact details are still useful. `hero-diagnostic.md` is an old one-off report, not a spec. The dual-tone light-canvas system and Sora/Plus Jakarta Sans in AGENTS.md are what the code actually uses.

### Task workflow (TASKS.md)

- Work through `TASKS.md` from the top, one task at a time, on a new branch named `task/<id>`.
- Run `npx tsc --noEmit`, `npm run lint` and `npm run build:worker`, and fix any failures.
- Commit with a short message, tick the box, then stop and wait for Eric.
- Never push, never deploy, never read `.env` files or touch secrets.
- If something fails twice, stop and write what happened under the task.
- Keep any site copy plain and simple. No em dashes.

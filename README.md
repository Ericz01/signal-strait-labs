# Signal Strait Labs

Marketing site for **Signal Strait Labs (SSL)**, an enterprise digital transformation and growth-engineering agency (custom web infrastructure, technical SEO, AEO/GEO, data systems, RevOps). HQ: Thome, Nairobi, Kenya.

**Production:** https://signal-strait-labs.pages.dev

> AI agents and contributors: see `AGENTS.md` for the full design-system and coding rules (`CLAUDE.md` and `.cursorrules` summarize it).

## Tech Stack

| Layer | Version / Tool |
| --- | --- |
| Framework | Next.js 16.3.x, App Router |
| UI | React 19.2 |
| Language | TypeScript 5, `strict: true` |
| Styling | Tailwind CSS v4, CSS-first config in `app/globals.css` (no `tailwind.config.js`) |
| UI primitives | `class-variance-authority`, `clsx` + `tailwind-merge`, `@radix-ui/react-slot`, `lucide-react` icons |
| Fonts | Sora (display) + Plus Jakarta Sans (body) via `next/font/google` |
| Hosting | Cloudflare Workers via OpenNext (`@opennextjs/cloudflare`, `wrangler`) |
| Lead form | `validator` for input checks, Upstash Redis + `@upstash/ratelimit` for rate limiting |

## Getting Started

```bash
npm install
npm run dev        # http://localhost:3000
```

## Scripts

| Command | Action |
| --- | --- |
| `npm run dev` | Next.js dev server |
| `npm run build` | Production Next.js build (must pass with zero errors) |
| `npm run build:worker` | `opennextjs-cloudflare build`: outputs `.open-next/worker.js` and `.open-next/assets` for Cloudflare |
| `npm run start` | Serve the Next.js production build locally |
| `npm run lint` | ESLint 9 (`eslint-config-next`) |
| `npx tsc --noEmit` | Type-check only |

There is no automated test suite.

## Project Structure

```
app/
  layout.tsx              Root layout: fonts, site metadata, Header/Footer, dark root wrapper
  page.tsx                Home page (sections + JSON-LD structured data)
  globals.css             Tailwind v4 theme tokens, base styles, brand utilities
  about/ contact/ services/ privacy-policy/ terms-of-service/
  services/[slug]/        Service detail pages, statically generated from lib/services-data.ts
  api/leads/route.ts      Contact-form endpoint (rate limit, honeypot, sanitize, validate)
  not-found.tsx           Custom 404
  loading.tsx             Skeleton loading state
components/
  Hero, Services, WhySSL, Process, Testimonials, CTABanner, ContactSection, FAQAccordion
  layout/                 Header, Footer, BrandLogo
  ui/                     Button, Card, Badge, SectionHeading, IconBox, Divider, CustomSelect, AnimateOnScroll
lib/
  services-data.ts        Service catalogue (slugs, copy, FAQs, icons): drives /services and /services/[slug]
  process-data.ts, differentiators-data.ts, testimonials-data.ts
  utils.ts                cn() helper
public/
  logo.png                Logotype
  ssl-tracker.html, railsite-tracker.html   Standalone project-tracker pages
```

## Design System

The design is **dual-tone**: a light editorial canvas with dark "Abyss Blue" anchor blocks. All tokens live in `app/globals.css`.

**Color tokens** (`@theme`):

| Token | Hex | Role |
| --- | --- | --- |
| `--color-ssl-light-bg` | `#fbfbfd` | Light canvas: body and content-section background |
| `--color-ssl-bg` | `#01081b` | Abyss Blue: ink on light surfaces, base of dark blocks |
| `--color-ssl-blue` | `#1a59cc` | Accent blue |
| `--color-ssl-gold` | `#C5A059` | Luxury gold accent, borders, primary CTA |
| `--color-ssl-white` | `#ffffff` | White |

**Typography:** Sora for headings (`--font-display`), Plus Jakarta Sans for body (`--font-body`), plus fluid sizes `--text-fluid-h1`, `--text-fluid-h2` and `--text-fluid-body` using `clamp()`.

**Key utilities:** `.glass-card-light`, `.glass-card-dark` (+ `.glass-card-dark-static`), `.glass-nav-dark`, `.footer-dark`, `.glass-input-dark`, `.text-gold-gradient` (dark surfaces), `.text-gold-contrast` (light surfaces), `.text-brand-gradient`, `luxurious-gold-gradient`, `grid-pattern-dark`, `animate-on-scroll`.

Note: `.luxury-bg-gradient` is a **dark** gradient applied to the root wrapper in `app/layout.tsx`. Content sections paint `bg-ssl-light-bg` over it.

## Environment Configuration

Local secrets go in `.env.local`, which is git-ignored via `.env*` and must never be committed. In production, set them as Cloudflare Worker secrets/vars.

| Variable | Used by | Status |
| --- | --- | --- |
| `UPSTASH_REDIS_REST_URL` | `app/api/leads/route.ts` rate limiter | Optional locally. If missing or not `https://`, rate limiting is disabled with a warning. |
| `UPSTASH_REDIS_REST_TOKEN` | `app/api/leads/route.ts` rate limiter | Optional locally (see above) |
| `RESEND_API_KEY` | — | Reserved for email delivery of leads; not yet referenced in code |
| `NEXT_PUBLIC_APP_URL` | — | Not currently referenced; the canonical URL is hard-coded in `app/layout.tsx` |

```bash
UPSTASH_REDIS_REST_URL=https://<your-db>.upstash.io
UPSTASH_REDIS_REST_TOKEN=<token>
```

On Cloudflare, the leads route reads secrets **per request** via `getCloudflareContext().env` and falls back to `process.env` under `next dev`.

## Lead Capture Flow

`components/ContactSection.tsx` (a client component) POSTs JSON to `/api/leads`. The route:

1. Rate-limits by `CF-Connecting-IP` (5 requests / 10 minutes, sliding window)
2. Rejects invalid JSON
3. Silently accepts and discards submissions that fill the `website` honeypot field
4. Strips HTML and trims all fields
5. Validates name (≤100 chars), email, and message (≤2000 chars)
6. Logs the sanitized lead. Email delivery is not implemented yet.

## Deployment

```bash
npm run build:worker       # build the OpenNext Cloudflare bundle
npx wrangler deploy        # deploy using wrangler.toml
```

`wrangler.toml` points at `.open-next/worker.js`, serves `.open-next/assets`, enables `nodejs_compat`, and binds the `NEXT_CACHE` KV namespace.

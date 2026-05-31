# Signal Strait Labs — Agent System Prompt & Project Memory

> Master reference for all AI-assisted sessions on this repository. Read this file before writing or modifying code.

---

## 1. Core Mission

**Signal Strait Labs (SSL)** is a premium digital marketing and software development agency platform built for **high performance** and **clean aesthetics**.

The site represents an enterprise growth-engineering lab focused on digital transformation, AEO/GEO, RevOps, and custom infrastructure — with a **dual-tone editorial aesthetic**: an airy light canvas (Apple / Stripe inspired) punctuated by rich **Abyss Blue** anchor blocks, strong typography, and static-first Next.js architecture. Every change should preserve brand polish, accessibility, and production build stability.

**HQ:** Thome, Nairobi, Kenya  
**Production URL:** `https://signal-strait-labs.pages.dev`

---

## 2. Technology Alignment

<!-- BEGIN:nextjs-agent-rules -->
### This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

| Layer | Version / Pattern |
| --- | --- |
| **Framework** | Next.js **16.2.6** — **App Router** (`app/` directory) |
| **UI** | React **19.2.x** |
| **Language** | TypeScript **5.x** (`strict: true`) |
| **Styling** | Tailwind CSS **v4** via `@import "tailwindcss"` in `app/globals.css` |
| **PostCSS** | `@tailwindcss/postcss` ^4 |
| **Linting** | ESLint 9 + `eslint-config-next` |

### CSS-first Tailwind (no legacy config)

- **There is no `tailwind.config.js` (or `.ts`) file.** Do not create one unless explicitly requested.
- All design tokens, theme extensions, and custom utilities live in **`app/globals.css`** inside `@theme`, `@layer base`, and `@utility` blocks.
- PostCSS handles Tailwind v4 compilation; configuration is centralized in CSS, not JavaScript.

### App structure

```
app/
  layout.tsx    # Root layout, fonts, metadata export
  page.tsx      # Home page (Server Component)
  globals.css   # Tailwind v4 theme + brand utilities
public/
  logo.png      # Full logotype asset
```

---

## 3. Typography System

Fonts are loaded in **`app/layout.tsx`** via `next/font/google` and exposed as CSS variables on `<body>`.

| Role | Google Font | CSS Variable | Tailwind Token | Usage |
| --- | --- | --- | --- | --- |
| **Display / Headings** | `Sora` | `--font-sora` | `--font-display` | `h1`–`h6`, hero titles, section headers |
| **Body / UI / Prose** | `Plus_Jakarta_Sans` | `--font-plus-jakarta` | `--font-body` | Body copy, nav, forms, buttons |

### Loader configuration (`app/layout.tsx`)

```tsx
const sora = Sora({ variable: "--font-sora", subsets: ["latin"] });
const plusJakartaSans = Plus_Jakarta_Sans({ variable: "--font-plus-jakarta", subsets: ["latin"] });

<body className={`${sora.variable} ${plusJakartaSans.variable} antialiased`}>
```

### Theme mapping (`app/globals.css`)

```css
--font-display: var(--font-sora), sans-serif;
--font-body: var(--font-plus-jakarta), sans-serif;
```

- **Do not** use generic stacks (Inter, Roboto, Arial, system-ui) as primary brand fonts.
- Headings inherit `--font-display` via `@layer base`; body uses `--font-body`.
- Optional utilities: `font-display`, `font-body` (Tailwind v4 theme tokens).

---

## 4. Design Tokens & Utility Classes

All tokens are registered in the `@theme` block of **`app/globals.css`**.

### Dual-tone canvas architecture

The design system pairs a **luminous light canvas** with **premium dark anchor blocks** — not a full dark theme.

| Layer | Token / Class | Role |
| --- | --- | --- |
| **Page canvas** | `--color-ssl-light-bg` (`#fbfbfd`) | Default `body` background — Apple-style clean light gray |
| **Primary ink (light zones)** | `--color-ssl-bg` (`#01081b`) | Headings and prose on light surfaces — deep **Abyss Blue** |
| **Ambient wash** | `.luxury-bg-gradient` | Radial blue/gold tint over `#fbfbfd` for hero and full-page sections |
| **Light elevation** | `.glass-card-light` | Frosted white panels for optional light-surface cards |
| **Dark anchor blocks** | `.glass-card-dark` | Premium Abyss Blue glass — capabilities cards, Truth Metrics banner, contact form |
| **Sticky header** | `.glass-nav-dark` | Translucent dark glass nav with gold bottom border |
| **Footer anchor** | `.footer-dark` | Deep Abyss Blue gradient block (`#01081b` → `#06153b`) |
| **Dark-surface inputs** | `.glass-input-dark` | Glassy fields with gold focus glow inside dark containers |

**Typography by surface:**

| Surface | Headings | Body / labels | Accents |
| --- | --- | --- | --- |
| **Light canvas** | `text-ssl-bg` | `text-slate-600` / `text-slate-700` | `.text-gold-gradient` |
| **Dark anchors** | `text-white` | `text-slate-300` / `text-slate-400` | `text-ssl-gold`, `.text-brand-gradient` |

Apply `.glass-card-dark` to focal cards, banners, and forms. Use `.glass-nav-dark` + `border-ssl-gold/20` on header; `.footer-dark` on footer. Hover lift on `.glass-card-dark` is intentional — do not apply to full-width nav bars.

### Brand colors

| Token | Hex | Tailwind usage |
| --- | --- | --- |
| `--color-ssl-light-bg` | `#fbfbfd` | `bg-ssl-light-bg` — primary light canvas background |
| `--color-ssl-bg` | `#01081b` | `text-ssl-bg`, `bg-ssl-bg` — Abyss Blue ink / deep accent surfaces |
| `--color-ssl-blue` | `#1a59cc` | `bg-ssl-blue`, `text-ssl-blue` — primary CTA / accent |
| `--color-ssl-gold` | `#C5A059` | `bg-ssl-gold`, `text-ssl-gold` — luxury accent |
| `--color-ssl-white` | `#ffffff` | `text-ssl-white`, card fills inside glass layers |

### Custom gradients & text effects

| Class / Utility | Type | Purpose |
| --- | --- | --- |
| `luxurious-gold-gradient` | `@utility` | Metallic gold background gradient for badges/cards |
| `.luxury-bg-gradient` | CSS class | Light-canvas ambient radial gradient (blue → gold → transparent over `#fbfbfd`) |
| `.glass-card-light` | CSS class | Light glassmorphism — frosted white panel with blur and soft shadow |
| `.glass-card-dark` | CSS class | Dark Abyss Blue glass — gold border, depth shadow, hover lift |
| `.glass-nav-dark` | CSS class | Sticky header dark glass — no hover transform |
| `.footer-dark` | CSS class | Deep Abyss Blue footer gradient block |
| `.glass-input-dark` | CSS class | Dark form fields with gold focus glow |
| `.glass-nav-light` | CSS class | Translucent light nav bar (legacy / optional) |
| `.text-gold-gradient` | CSS class | Gold clipped text — light surfaces |
| `.text-brand-gradient` | CSS class | White → gold → blue clipped text — dark surfaces |

### Fluid typography scales

| Token | Definition |
| --- | --- |
| `--text-fluid-h1` | `clamp(2.5rem, 6vw, 4.5rem)` |
| `--text-fluid-h2` | `clamp(1.75rem, 4vw, 3rem)` |
| `--text-fluid-body` | `clamp(1rem, 1.5vw, 1.125rem)` |

Use via Tailwind v4 text utilities derived from theme tokens (e.g. `text-fluid-h1`) where applicable.

### Extended layout tokens

- `--breakpoint-3xl: 120rem`
- `--spacing-100: 25rem`, `--spacing-128: 32rem`

---

## 5. Development Commands

Standard npm scripts from **`package.json`**:

| Command | Action |
| --- | --- |
| `npm run dev` | Start local dev server (`next dev`) |
| `npm run build` | Production build — must pass with zero errors |
| `npm run start` | Serve production build locally |
| `npm run lint` | Run ESLint (`eslint`) |

Always run **`npm run build`** after non-trivial changes to confirm static optimization and TypeScript validity.

### Environment variables

Local secrets live in **`.env.local`** (git-ignored via `.env*` in `.gitignore`). See `README.md` → **Environment Configuration** for key reference (`RESEND_API_KEY`, `NEXT_PUBLIC_APP_URL`).

---

## 6. Code & Architecture Rules

### TypeScript & components

- **Strict TypeScript** — no `any` unless unavoidable; type props and metadata exports explicitly.
- **Functional components only** — no class components.
- **Server Components by default** — avoid `"use client"` unless interactivity truly requires it (forms, hooks, browser APIs).
- Do not add client event handlers to pages that must remain statically prerendered unless explicitly requested.

### Imports & pathing

- Use **absolute imports** via the `@/*` alias (maps to project root per `tsconfig.json`):

  ```tsx
  import { Something } from "@/app/...";
  import logo from "@/public/logo.png"; // when needed
  ```

- Prefer `next/image` for optimized images; `next/font/google` for fonts.

### Layout & UX conventions

- **Scannable layouts** — clear section hierarchy (`header`, `section`, `footer`), semantic HTML, generous whitespace.
- **Dual-tone editorial aesthetic** — airy `#fbfbfd` canvas (`.luxury-bg-gradient`) with **Abyss Blue anchor blocks** (`.glass-card-dark`, `.glass-nav-dark`, `.footer-dark`). Light zones: `text-ssl-bg` headings, `text-slate-600` body. Dark zones: `text-white` headings, `text-slate-300` body, `text-ssl-gold` accents, `.glass-input-dark` for forms.
- **Do not** flatten the brand into all-light or all-dark — preserve contrast between canvas and anchor components.
- **Responsive by default** — mobile-first Tailwind breakpoints; logo heights `h-8` / `md:h-10`.
- **SEO/AEO/GEO** — preserve `metadata` export in `layout.tsx` and JSON-LD in `page.tsx` when editing marketing pages.

### Styling rules

- Extend the design system in **`app/globals.css`** — not ad-hoc inline styles or new config files.
- Reuse existing tokens (`ssl-light-bg`, `ssl-bg`, `ssl-blue`, `ssl-gold`) and utilities (`.luxury-bg-gradient`, `.glass-card-light`, `.glass-card-dark`, `.glass-nav-dark`, `.footer-dark`, `.glass-input-dark`) before introducing one-off hex values.
- Match existing naming: `@utility` for reusable backgrounds, `.text-*` for text effects.

### What to avoid

- Creating `tailwind.config.js` or duplicating theme in JS.
- Generic font stacks as brand typography.
- Breaking static generation with unnecessary client boundaries.
- Committing `.env.local` or API keys to the repository.

---

*Last synced with: `package.json`, `app/globals.css`, `app/layout.tsx`.*

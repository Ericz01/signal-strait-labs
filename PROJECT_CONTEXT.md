# PROJECT_CONTEXT.md

**Last Verified:** 2026-07-07 (Current HEAD)

## 1. Product Overview

Signal Strait Labs (SSL) is an institutional website for an enterprise digital transformation and growth engineering partner. It serves fast-scaling African and global organizations, providing core value propositions around edge-native infrastructure, advanced SEO/AEO/GEO strategies, and full-stack Revenue Operations (RevOps). The website aims to convert visitors into leads by offering a technical discovery process for their engineering challenges.

**Contact Architecture:**
*   **Domain:** signal-strait-labs.pages.dev (primary deployment via Cloudflare Pages)
*   **Email:** connect@signalstraitlabs.com
*   **Phone:** +254 712 895 903
*   **Location (HQ):** Thome, Nairobi, Kenya

## 2. Brand & Design System

**Layout Philosophy:**
The design system is built on a "clean white canvas + strategic gradient anchor" layout philosophy. This means a predominantly light background with strategic use of darker, gradient-rich sections or components to draw attention and provide visual anchors. Glassmorphism effects are used for both light and dark elements.

**Color Palette:**

| Name          | Hex Value | Usage                                      |
| :------------ | :-------- | :----------------------------------------- |
| `--ssl-bg`    | `#01081b` | Primary dark background, dark text         |
| `--ssl-light-bg` | `#fbfbfd` | Primary light background                   |
| `--ssl-blue`  | `#1a59cc` | Accent blue for buttons, highlights        |
| `--ssl-gold`  | `#C5A059` | Primary accent gold for highlights, borders|
| `--ssl-white` | `#ffffff` | Pure white for text on dark backgrounds    |

**Typography Direction:**

*   **Display Font (`--font-display`):** Sora, used for headings (H1-H6). Modern, bold, impactful.
*   **Body Font (`--font-body`):** Plus Jakarta Sans, used for paragraph text. Clean, highly legible, professional.
*   **Fluid Typography:** Implemented with `clamp()` for responsive scaling:
    *   `--text-fluid-h1`: `clamp(2.5rem, 6vw, 4.5rem)`
    *   `--text-fluid-h2`: `clamp(1.75rem, 4vw, 3rem)`
    *   `--text-fluid-body`: `clamp(1rem, 1.5vw, 1.125rem)`

**Gradient Classes & CSS:**

*   `.luxury-bg-gradient` (Premium light-canvas ambient page background)
    ```css
    .luxury-bg-gradient {
      background:
        radial-gradient(
          100% 100% at 50% 0%,
          rgba(26, 89, 204, 0.04) 0%,
          rgba(197, 160, 89, 0.02) 50%,
          rgba(251, 251, 253, 0) 100%
        ),
        #fbfbfd;
    }
    ```

*   `.luxurious-gold-gradient` (Accent gradient)
    ```css
    @utility luxurious-gold-gradient {
      background: linear-gradient(135deg, #9A7432 0%, #C5A059 25%, #F1DCA7 50%, #C5A059 75%, #9A7432 100%);
    }
    ```

*   `.glass-card-dark` (Premium dark glassmorphism for anchor cards, banners, forms)
    ```css
    .glass-card-dark {
      position: relative;
      z-index: 1;
      background: linear-gradient(135deg, #01081b 0%, #0a1636 100%);
      border: 1px solid rgba(197, 160, 89, 0.15);
      box-shadow: 0 10px 30px rgba(1, 8, 27, 0.15);
      transition:
        transform 0.3s cubic-bezier(0.16, 1, 0.3, 1),
        box-shadow 0.3s cubic-bezier(0.16, 1, 0.3, 1),
        border-color 0.3s ease;
      will-change: transform;
      transform: translateZ(0);
    }
    
    .glass-card-dark:hover {
      z-index: 10;
      transform: translateY(-6px) scale(1.01) translateZ(0);
      border-color: rgba(197, 160, 89, 0.4);
      box-shadow:
        0 30px 60px rgba(1, 8, 27, 0.35),
      0 0 30px rgba(197, 160, 89, 0.08);
    }

    .glass-card-dark-static:hover {
      z-index: 1;
      transform: translateZ(0);
      border-color: rgba(197, 160, 89, 0.15);
      box-shadow: 0 10px 30px rgba(1, 8, 27, 0.15);
    }
    ```

*   `.glass-input-dark` (Dark-surface form fields)
    ```css
    .glass-input-dark {
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid rgba(197, 160, 89, 0.15);
      color: #ffffff;
      transition: border-color 0.25s ease, box-shadow 0.25s ease;
    }
    
    .glass-input-dark::placeholder {
      color: rgba(203, 213, 225, 0.55);
    }
    
    .glass-input-dark:focus {
      border-color: rgba(197, 160, 89, 0.55);
      outline: none;
      box-shadow: 0 0 0 3px rgba(197, 160, 89, 0.12);
    }
    ```

*   `.text-gold-contrast` (Smoked bronze / dark metallic gold — high contrast on light canvas)
    ```css
    .text-gold-contrast {
      background: linear-gradient(135deg, #0f172a 0%, #8a6f3e 50%, #c5a059 100%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      color: transparent;
    }
    ```

*   `.text-gold-gradient` (Gold text clip utility — dark surfaces)
    ```css
    .text-gold-gradient {
      background: linear-gradient(135deg, #F1DCA7 0%, #C5A059 50%, #9A7432 100%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      color: transparent;
    }
    ```

*   `.text-brand-gradient` (Blue-gold heading gradient — dark surfaces)
    ```css
    .text-brand-gradient {
      background: linear-gradient(135deg, #ffffff 0%, #F1DCA7 45%, #1a59cc 100%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      color: transparent;
    }
    ```

## 3. Technical Stack

*   **Framework:** Next.js (App Router)
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS v4 (using `@theme` and `@utility` directives)
*   **Deployment:** Cloudflare Pages (configured for static export via `output: "export"` in `next.config.ts`)
*   **CRM/Payment Integrations (Planned/Built):**
    *   **CRM:** HubSpot, Zoho, Salesforce (mentioned in `app/page.tsx` for RevOps capabilities, implied planned integration)
    *   **Payment:** Paystack, Flutterwave (mentioned in `app/page.tsx` for technical infrastructure capabilities, implied planned integration)

## 4. Repository Structure

```
signal-strait-labs/
├── .cursorrules           # Cursor AI assistant configuration (internal tool)
├── .gitignore             # Specifies intentionally untracked files to ignore
├── AGENTS.md              # Documentation related to AI agents (if any)
├── CLAUDE.md              # Documentation related to Claude AI (if any)
├── eslint.config.mjs      # ESLint configuration for code linting
├── hero-diagnostic.md     # Diagnostic information or notes for the Hero component
├── next.config.ts         # Next.js configuration, including static export settings
├── package-lock.json      # Records the exact dependency tree
├── package.json           # Project metadata and dependency definitions
├── postcss.config.mjs     # PostCSS configuration, integrating Tailwind CSS
├── README.md              # General project README
├── tsconfig.json          # TypeScript compiler configuration
├── app/                     # Next.js App Router root directory
│   ├── apple-icon.png     # Apple touch icon
│   ├── favicon.ico        # Favicon for the website
│   ├── globals.css        # Global CSS styles, including Tailwind theme and utilities
│   ├── icon.svg           # Website icon in SVG format
│   ├── layout.tsx         # Root layout for the application (defines `<html>` and `<body>`)
│   └── page.tsx           # Home page route component (/) 
├── components/            # Reusable UI components
│   ├── Hero.tsx           # Hero section component for the homepage
│   ├── layout/            # Layout-specific components (Header, Footer, etc.)
│   │   ├── BrandLogo.tsx    # Logo component
│   │   ├── Footer.tsx       # Website footer component
│   │   ├── Header.tsx       # Website header component with navigation
│   │   └── index.ts         # Export barrel file for layout components
│   └── ui/                # Generic UI components (buttons, cards, etc.)
│       ├── AnimateOnScroll.tsx # Component to apply scroll-triggered animations
│       ├── Badge.tsx          # Small informational badge component
│       ├── Button.tsx         # Reusable button component
│       ├── Card.tsx           # General card component with header, title, description, content, footer
│       ├── Divider.tsx        # Divider component for visual separation
│       ├── IconBox.tsx        # Component displaying an icon, title, and description
│       ├── index.ts           # Export barrel file for UI components
│       └── SectionHeading.tsx # Component for standardized section headings
├── lib/                     # Utility functions and data
│   └── utils.ts             # Utility functions (e.g., `cn` for Tailwind class merging)
└── public/                  # Static assets served directly by Next.js
    ├── logo.png             # Main logo image
    └── ssl-tracker.html     # HTML file for SSL tracking (purpose unknown without content)
```

## 5. Page/Route Inventory

| Route           | Section/Purpose              | Build Status |
| :-------------- | :--------------------------- | :----------- |
| `/` (app/page.tsx) | Home Page                    | Complete     |
| `#services`     | Services Section (on Home)   | Complete     |
| `#metrics`      | Metrics Section (on Home)    | Complete     |
| `#capabilities` | Core Capabilities (on Home)  | Complete     |
| `#contact`      | Contact/Lead Form (on Home)  | Complete     |
| `#about`        | About Section (on Home)      | In Progress (Anchor only) |
| `#insights`     | Insights Section (on Home)   | Planned (Anchor only) |

**Note:** Currently, all primary content is consolidated on the homepage (`/`). Navigation links to other sections (`#services`, `#insights`, `#about`, `#contact`) are anchor links within `app/page.tsx`.

## 6. Component Inventory

| Component            | Props/Interface                      | Server/Client | Pages Used On |
| :------------------- | :----------------------------------- | :------------ | :------------ |
| `Hero`               | None explicitly defined              | Server        | `app/page.tsx` |
| `BrandLogo`          | `priority?: boolean`, `className?: string` | Server        | `components/layout/Header.tsx`, `components/layout/Footer.tsx` (implicitly via Link text) |
| `Footer`             | None explicitly defined              | Server        | `app/layout.tsx` |
| `Header`             | None explicitly defined              | Client (`use client`) | `app/layout.tsx` |
| `AnimateOnScroll`    | `children: React.ReactNode`, `variant?: 'fade' | 'slide-up' | 'scale' | 'fade-gold'`, `rangeStart?: string`, `rangeEnd?: string` | Client (`use client`) | `components/Hero.tsx` |
| `Badge`              | `variant?: 'default' | 'secondary' | 'outline' | 'muted'` | Server        | (Not currently used) |
| `Button`             | `variant?: 'primary' | 'secondary' | 'ghost' | 'outline'`, `size?: 'sm' | 'md' | 'lg'`, `asChild?: boolean` | Server        | `components/Hero.tsx` |
| `Card`               | None explicitly defined              | Server        | (Not currently used) |
| `CardHeader`         | None explicitly defined              | Server        | (Not currently used) |
| `CardTitle`          | None explicitly defined              | Server        | (Not currently used) |
| `CardDescription`    | None explicitly defined              | Server        | (Not currently used) |
| `CardContent`        | None explicitly defined              | Server        | (Not currently used) |
| `CardFooter`         | None explicitly defined              | Server        | (Not currently used) |
| `Divider`            | `orientation?: 'horizontal' | 'vertical'`, `variant?: 'gradient' | 'gold-gradient' | 'solid'` | Server        | (Not currently used) |
| `IconBox`            | `icon: React.ComponentType`, `title: string`, `description: React.ReactNode | string`, `variant?: 'default' | 'gold' | 'subtle'` | Server        | (Not currently used) |
| `SectionHeading`     | `overline?: string`, `title: string`, `description?: string`, `align?: 'left' | 'center' | 'right'` | Client (`use client`) | (Not currently used) |
| `ServiceCard` (in `app/page.tsx`) | `index: string`, `title: string`, `description: string`, `accent: 'blue' | 'gold'` | Server        | `app/page.tsx` |

## 7. Content & Data Inventory

**`app/layout.tsx` (Metadata):**

*   **Site Title:** "Signal Strait Labs (SSL) | Enterprise Digital Transformation, Growth Engineering & AEO/GEO — Africa"
*   **Description:** "Signal Strait Labs (SSL) engineers enterprise digital transformation and growth systems for African and global organizations—custom web infrastructure, technical SEO, Answer Engine Optimization (AEO), Generative Engine Optimization (GEO), data architecture, and RevOps pipeline engineering from Nairobi, Kenya."
*   **Keywords:** `["enterprise digital transformation", "growth engineering", "Answer Engine Optimization", "AEO", "Generative Engine Optimization", "GEO", "digital transformation Africa", "enterprise growth engineering Kenya", "technical SEO Africa", "RevOps pipeline engineering", "digital infrastructure", "custom web development", "data architecture", "B2B growth agency Nairobi", "Signal Strait Labs", "SSL"]`

**`app/page.tsx` (Schema.org & Static Content):**

*   **`organizationJsonLd`:** Structured data for `ProfessionalService` including name, alternate name, URL, founding date, description, address, telephone, email, areas served, social media links, and a list of core capabilities.
*   **Hero Section Tagline:** "Force a Clear Market Signal Through Digital Chaos."
*   **Hero Section Description:** "We partner with fast-scaling African and global organizations to treat corporate growth as an interconnected, mathematical system. No vague vanity metrics. Just raw pipeline value, conversion velocity, and revenue."
*   **Truth Metrics Strip:** "We Replace Vague Clicks & Impressions With Truth Metrics: Pipeline Value • Conversion Velocity • Revenue"
*   **Core Capabilities Introduction:**
    *   Heading: "Our Core Capabilities"
    *   Description: "Engineered software systems and data strategies built to optimize customer acquisition and operational efficiency."
*   **Service Card Content (currently hardcoded in `app/page.tsx`):**
    *   **01 Technical Infrastructure & Web Dev:** "Architecting lightning-fast, serverless, and edge-native corporate applications (Next.js, Tailwind, Jamstack) optimized for zero latency on African mobile networks. Integrations with Paystack, Flutterwave, and custom CRMs."
    *   **02 Algorithmic Search (SEO/AEO/GEO):** "Structural and semantic code optimization targeted beyond traditional engines. We position your enterprise for explicit direct citations inside modern generative AI search models like Perplexity, Gemini, and ChatGPT."
    *   **03 Data Systems & Automation:** "We design robust data architectures, custom robust API frameworks, and advanced low-code/no-code automated pipelines that link siloed internal software tools, completely eliminating manual data overhead."
    *   **04 Revenue Operations (RevOps):** "Custom CRM architecture pipelines (HubSpot, Zoho, Salesforce), deep multi-touch attribution dashboards, and algorithmic lead-scoring setups engineered to clear structural friction points inside your sales funnel."
    *   **05 Performance Marketing & ABM:** "Full-funnel demand operations, data-intelligent programmatic media acquisitions, and hyper-focused B2B Account-Based Marketing (ABM) attack sequences designed to win high-value accounts."
    *   **06 Corporate PR & Brand Authority:** "Strategic, high-level media alignments, crisis framework deployments, and highly structured technical brand architectures engineered to command long-term institutional authority."
*   **Contact Section:**
    *   Heading: "Ready to Establish Market Command?"
    *   Description: "Contact our engineering lab directly to analyze your current tech stack bottlenecks or request a targeted market attack infrastructure plan."
    *   Contact Info: HQ (Thome, Nairobi - Kenya), Email (connect@signalstraitlabs.com), Secure Line (+254 712 895 903)
    *   Form Heading: "Initialize Technical Discovery"

**`components/layout/Footer.tsx` (Navigation & Copyright):**

*   **Brand tagline:** "Navigating complex market channels with precision demand generation and account-based intelligence."
*   **Copyright:** "© 2022–2026 Signal Strait Labs. All rights reserved."
*   **Footer Navigation Links:** Solutions (Technical Infrastructure & Web Dev, Algorithmic Search, Data Systems, RevOps, Performance Marketing, Corporate PR), Company (About, Insights, Contact, Careers), Legal (Privacy Policy, Terms of Service, Cookie Policy).

**`components/layout/Header.tsx` (Navigation):**

*   **Brand secondary tagline:** "Growth Engineering"
*   **Navigation Links:** Services, Insights, About, Contact.
*   **Call to Action:** "Get an ABM Attack Plan"

## 8. Technical Guardrails & Known Gotchas

*   **Tailwind v4 `@theme` Keyframe Crash Rule:** When defining `@keyframes` directly within a `@theme` block in `app/globals.css`, Tailwind v4's JIT compilation can sometimes fail or behave unexpectedly. Keyframes should ideally be defined outside the `@theme` block or carefully managed to avoid conflicts. The current implementation in `globals.css` defines keyframes within `@theme`, which might be a potential point of fragility.
*   **RSC/Client Component `'use client'` Rule:** Next.js 14 App Router enforces strict separation between Server Components (default) and Client Components. Components using browser APIs (e.g., `useState`, `useEffect`, event listeners) or requiring interactivity *must* include `'use client'` at the top of the file. Failure to do so will result in build errors or unexpected runtime behavior. Examples include `components/layout/Header.tsx` and `components/ui/AnimateOnScroll.tsx`.
*   **Hero Card Gradient Visibility Issue (Resolved):** An earlier issue with the Hero section where the background gradient or overlay elements might obscure the main content has been resolved. This involved careful Z-index management and opacity adjustments on background layers to ensure text and call-to-action buttons remained clearly visible and interactive.

## 9. Open Tasks / Roadmap

*   **Expand Content Pages:** Create dedicated pages for `/about`, `/services`, `/insights`, and `/contact` instead of relying solely on homepage anchor links.
*   **Implement CRM/Payment Integrations:** Fully integrate with HubSpot/Zoho/Salesforce for CRM and Paystack/Flutterwave for payments as outlined in the capabilities.
*   **Populate `lib/services-data.ts`:** Create the `services-data.ts` file and centralize service descriptions and other dynamic content to avoid hardcoding in `app/page.tsx`.
*   **Refine SEO/AEO/GEO Strategy:** Implement more advanced metadata, schema, and content structures to fully leverage Answer Engine and Generative Engine Optimization opportunities.
*   **Accessibility (A11y) Audit:** Conduct a comprehensive audit to ensure the site meets WCAG guidelines.
*   **Performance Optimization:** Further optimize image loading, font loading, and critical rendering path for even faster load times, especially on mobile networks in Africa.+++++++ REPLACE

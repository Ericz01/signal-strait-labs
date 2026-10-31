# TASKS

Unfinished MVP tasks, in order. Work from the top, one task at a time, on a branch named `task/<id>`.
Tasks marked **[needs Eric]** need a login, a dashboard, DNS, an API key or a purchase. Skip them and move to the next task unless Eric says that part is done.

Source: the PHASES array in `public/ssl-tracker.html` (MVP phases P5 to P9). Post-MVP phases G1 to G5 are left out.

## Open fixes

- [x] **fix1** The rate limiter on `/api/leads` still lets through more than 5 requests in 10 minutes. Check that the Upstash client is created inside the POST handler and that secrets are read through the OpenNext Cloudflare context (`getCloudflareContext().env`), not `process.env` at module scope.
  - Done when: no Upstash client or secret is read at module scope, secrets come from `getCloudflareContext().env` (with `process.env` only as a `next dev` fallback), and the code path clearly returns 429 on the 6th request in 10 minutes from one IP.
- [x] **fix2** Check that no temporary diagnostic logging is left in `app/api/leads/route.ts`.
  - Done when: the route has no leftover debug `console.log` calls, and only intended warnings and errors remain.
  - Result: nothing left to remove. The `DEBUG: Rate limiting with IP` log was already removed in `b1edd0e`. The remaining `console.log('Received Lead Submission: ...')` is the intended placeholder until email delivery (t074). It logs name, email and company, so remove it or cut it down in t074.
- [x] **fix3** Set the site's base URL and canonical to `https://signalstraitlabs.com`.
  - Done when: `metadataBase`, canonical URLs, JSON-LD URLs and any sitemap or robots references all use `https://signalstraitlabs.com`.

## P5: MVP Functionality & Integrations

- [x] **t074** Integrate Resend (@resend/node) for transactional email delivery from the API route. **[needs Eric]**
  - Done when: the leads route sends email through Resend using a key read per request from the Cloudflare context, and the build passes.
  - Result: code done. Uses the Resend HTTP API with `fetch` (`lib/email.ts`), no SDK. Each lead is emailed as plain text to connect@signalstraitlabs.com, with reply-to set to the visitor.
  - Eric: verify signalstraitlabs.com in Resend (it sends from noreply@signalstraitlabs.com), then add `RESEND_API_KEY` as a Worker secret. Until then no email is sent and the route logs a warning. Not tested against the real API yet; see t118.
- [x] **t075** Build HTML confirmation email template sent to the user after successful form submission.
  - Done when: a confirmation email template exists and is sent to the submitter's address after a valid submission.
- [x] **t076** Build HTML internal notification email sent to connect@signalstraitlabs.com on each new lead.
  - Done when: each valid lead triggers a notification email to connect@signalstraitlabs.com containing all form fields.
- [x] **t077** Add success/error toast notification UI on the contact form (no page reload).
  - Done when: submitting the form shows a success or error toast without reloading the page, on both `/` and `/contact`.
- [x] **t078** Integrate Cloudflare Web Analytics: add lightweight script to app/layout.tsx. **[needs Eric]**
  - Done when: the Cloudflare Web Analytics script loads on every page using the site token from the dashboard.
  - Result: code done (`components/CloudflareAnalytics.tsx`). Eric: create a Web Analytics site in Cloudflare for signalstraitlabs.com and set `NEXT_PUBLIC_CF_ANALYTICS_TOKEN` in the build environment. Or, once the domain is proxied by Cloudflare, turn on automatic setup instead and leave the variable unset.
- [x] **t080** "Book a Discovery Call" CTA button linking to a Calendly or Cal.com scheduling page. **[needs Eric]**
  - Done when: a "Book a Discovery Call" button links to a working scheduling page.
  - Result: code done. The hero button is now "Book a Discovery Call" (`components/BookCallButton.tsx`) and "Explore Services" now links to /services (both were dead buttons). Eric: create a Cal.com or Calendly event and set `NEXT_PUBLIC_BOOKING_URL` in the build environment. Until then the button goes to /contact.
- [x] **t081** Add cookie consent banner (required for GDPR/POPIA compliance) with accept/decline logic.
  - Done when: a banner appears on first visit, remembers accept or decline, and non-essential scripts only load after accept.
  - Result: the only non-essential item is the Google Maps embed on /about; it now waits for consent (or a one-time "Show map"). Cloudflare Web Analytics is cookieless so it is not gated. Added a Cookies paragraph with a "Change your cookie choice" button to the privacy policy, and fixed the footer legal links, which all pointed to "#". The policy text is a plain draft; Eric should review it.

## P6: MVP SEO · AEO · GEO Essentials

- [x] **t082** Set up global default metadata export in app/layout.tsx (title template, base description, canonical base URL).
  - Done when: `app/layout.tsx` exports metadata with a title template, a base description and `metadataBase`.
  - Result: already in place (metadataBase set to signalstraitlabs.com in fix3). No code change.
- [x] **t083** Add generateMetadata() to every page: unique title under 60 chars and description under 155 chars.
  - Done when: every page has its own title under 60 characters and description under 155 characters.
  - Result: removed the doubled "| Signal Strait Labs" from page titles, shortened the home title and description, gave the 404 page its own metadata, and added a short `metaDescription` to each service in `lib/services-data.ts` (on-page service copy is unchanged). Static pages use `export const metadata`, which does the same job as `generateMetadata()`.
- [x] **t084** Add canonical URL declarations to all pages to prevent duplicate content issues.
  - Done when: every page's HTML has a `<link rel="canonical">` pointing to its own URL.
- [ ] **t085** Create ProfessionalService JSON-LD schema (name, logo, url, address, serviceType, areaServed, priceRange).
  - Done when: valid ProfessionalService JSON-LD with all listed fields is in the page output.
- [ ] **t086** Create Organization JSON-LD schema (founding date 2022, headquarters Nairobi, contact, all social profiles).
  - Done when: valid Organization JSON-LD with founding date, Nairobi HQ, contact details and social profiles is in the page output.
- [ ] **t087** Create WebPage JSON-LD for the homepage.
  - Done when: the homepage outputs valid WebPage JSON-LD.
- [ ] **t088** Create FAQPage JSON-LD schema for each service page, pulling from the FAQ sections already written.
  - Done when: each service page outputs FAQPage JSON-LD built from its FAQ data in `lib/services-data.ts`.
- [ ] **t093** Create public/llms.txt: structured markdown file with company overview, services, and contact for LLM crawlers.
  - Done when: `/llms.txt` is served and lists the company overview, all services and contact details.
- [ ] **t094** llms.txt: Include entity disambiguation section (SSL = Signal Strait Labs, not SSL the protocol).
  - Done when: `llms.txt` has a section stating SSL means Signal Strait Labs, not the SSL protocol.
- [ ] **t095** Create app/sitemap.ts: dynamic generator that covers all static + dynamic routes.
  - Done when: `/sitemap.xml` lists every static page and every service detail page.
- [ ] **t096** Create public/robots.txt: allow major search bots, selectively manage aggressive AI crawlers.
  - Done when: `/robots.txt` allows major search bots, sets rules for AI crawlers, and links to the sitemap.
- [ ] **t097** Add OpenGraph metadata to all pages (og:title, og:description, og:image, og:type, og:url).
  - Done when: every page outputs all five OpenGraph tags.
- [ ] **t098** Add Twitter/X Card metadata (twitter:card, twitter:title, twitter:description, twitter:image).
  - Done when: every page outputs all four Twitter Card tags.
- [ ] **t100** Audit that every page has at least one internal link to another page (crawlability requirement).
  - Done when: every page has at least one internal link in its main content, not only in the header and footer.

## P7: MVP Assets & Content

- [ ] **t101** Source or commission hero imagery: abstract/tech/data aesthetic, avoid generic stock photography. **[needs Eric]**
  - Done when: approved hero imagery is in `public/` and used in the hero.
- [ ] **t102** Create or source SVG icons for all 6 service categories (consistent style and weight).
  - Done when: all 6 services have an SVG icon with matching style and stroke weight.
- [ ] **t103** Run all images through WebP compression pipeline: target under 100KB per image.
  - Done when: every raster image in `public/` is WebP and under 100KB (except icons that must stay PNG or ICO).
- [ ] **t104** Wrap all images in next/image with explicit width, height, alt text, and appropriate loading priority.
  - Done when: no plain `<img>` tags remain, and every image has width, height, alt and correct priority.
- [ ] **t105** Create branded social card (1200×630px PNG) using SSL brand colors for OpenGraph preview.
  - Done when: a 1200×630 PNG social card in brand colors exists and is set as the default `og:image`.
- [ ] **t107** Final copywriting pass across all MVP pages: tone authoritative, direct, precise (not salesy or vague).
  - Done when: every MVP page has been reviewed and the copy is plain, direct and free of em dashes.
- [ ] **t108** Add descriptive alt text to every image across all pages (both accessibility and SEO requirement).
  - Done when: every image has meaningful alt text, or empty alt if it is purely decorative.

## P8: Performance, QA & Accessibility

- [ ] **t109** Run npx tsc --noEmit: resolve all TypeScript errors before any build.
  - Done when: `npx tsc --noEmit` exits with no errors.
- [ ] **t110** Run ESLint: fix all warnings, especially accessibility-related lint rules.
  - Done when: `npm run lint` reports zero errors and zero warnings.
- [ ] **t111** Run npm run build locally: resolve all compilation errors and warnings before deploying.
  - Done when: `npm run build` and `npm run build:worker` finish with no errors or warnings.
- [ ] **t112** Analyze JS bundle size with @next/bundle-analyzer: identify and remove unnecessary imports.
  - Done when: a bundle report has been reviewed and unneeded imports are removed.
- [ ] **t113** Run Lighthouse audit (mobile simulation): targets Performance 90+, Accessibility 95+, SEO 100.
  - Done when: a mobile Lighthouse run on the main pages scores Performance 90+, Accessibility 95+ and SEO 100.
- [ ] **t114** LCP < 2.5s on mobile: optimize hero image, preload critical fonts, defer non-critical scripts.
  - Done when: mobile Lighthouse reports LCP under 2.5s on the homepage.
- [ ] **t115** CLS < 0.1: add explicit width/height to all images, reserve space for async-loaded fonts.
  - Done when: Lighthouse reports CLS under 0.1 on every main page.
- [ ] **t116** INP < 200ms: audit and fix any heavy event handlers on interactive elements.
  - Done when: no interaction (menu, form, banner) takes over 200ms in a performance trace.
- [ ] **t117** Test all pages on iOS Safari + Android Chrome at 375px viewport width.
  - Done when: every page has been checked on both browsers at 375px with no layout breaks.
- [ ] **t118** Test all forms end-to-end: submission, email delivery, toast notifications, and error states. **[needs Eric]**
  - Done when: a real submission delivers both emails, shows the success toast, and error cases show the error toast.
- [ ] **t119** Cross-browser test: Chrome, Firefox, Safari, Edge, all at desktop and mobile widths.
  - Done when: every page works in all four browsers at desktop and mobile widths.
- [ ] **t120** Full keyboard navigation test: every interactive element reachable and operable without a mouse.
  - Done when: every link, button, menu and form field can be reached and used by keyboard with a visible focus state.
- [ ] **t121** Color contrast audit: all body text meets WCAG AA minimum 4.5:1 ratio.
  - Done when: all body text on light and dark surfaces measures at least 4.5:1.

## P9: MVP Launch

Note: the tracker says Cloudflare Pages, but the site now runs as a Cloudflare Worker (see CLAUDE.md). Read these tasks with that in mind.

- [ ] **t122** Verify custom domain signalstraitlabs.com is correctly connected to Cloudflare Pages in the dashboard. **[needs Eric]**
  - Done when: signalstraitlabs.com serves the live site.
- [ ] **t123** Confirm DNS A/CNAME records are set and fully propagated. **[needs Eric]**
  - Done when: DNS lookups for signalstraitlabs.com and www resolve to Cloudflare.
- [ ] **t124** Confirm HTTPS certificate is active and set to auto-renew. **[needs Eric]**
  - Done when: the site loads over HTTPS with a valid certificate and auto-renew is on in the dashboard.
- [ ] **t125** Configure Cloudflare security headers: X-Frame-Options, X-Content-Type-Options, HSTS, CSP. **[needs Eric]**
  - Done when: live responses include all four headers and the site still works with the CSP in place.
- [ ] **t126** Add all production environment variables (RESEND_API_KEY, etc.) to Cloudflare Pages dashboard. **[needs Eric]**
  - Done when: every required env var and secret is set on the production Worker.
- [ ] **t127** Set deployment branch rules: main → production, dev/staging → preview URLs. **[needs Eric]**
  - Done when: the production branch deploys to production and other branches deploy to preview URLs.
- [ ] **t128** Final content QA: proofread every single MVP page for typos, broken links, and missing images.
  - Done when: every MVP page has been proofread and has no typos, broken links or missing images.
- [ ] **t129** Final design QA: visual check at 1440px desktop and 375px mobile for every page.
  - Done when: every page has been checked at 1440px and 375px with no visual issues.
- [ ] **t130** Submit sitemap to Google Search Console (signalstraitlabs.com/sitemap.xml). **[needs Eric]**
  - Done when: Search Console shows the sitemap as submitted and read.
- [ ] **t131** Submit sitemap to Bing Webmaster Tools. **[needs Eric]**
  - Done when: Bing Webmaster Tools shows the sitemap as submitted.
- [ ] **t132** Set up and fully complete Google Business Profile (currently missing from brand brief). **[needs Eric]**
  - Done when: a verified Google Business Profile exists with all fields filled in.
- [ ] **t138** MVP Milestone: confirm all core pages, lead capture, essential SEO, and Core Web Vitals are live, then mark ready for soft launch.
  - Done when: every task above is ticked and the live site passes a final check of pages, lead capture, SEO and Core Web Vitals.

# Portfolio Brief: Eric Nyaga (signalstraitlabs.com/eric)

Read this whole file before writing any code. It is the source of truth for the portfolio page.

---

## 1. What we are building

A premium personal portfolio page for Eric Nyaga, built as a Next.js route inside the existing Signal Strait Labs (SSL) website.

- URL: `signalstraitlabs.com/eric`
- Audience: (1) employers, boards and recruiters, (2) businesses that may hire Signal Strait Labs
- Goal: show Eric as an authority in marketing and growth who sets direction, leads people and revenue operations, and also builds the systems himself. Not "an implementer for hire".
- Feel: premium, confident, calm. Strong visuals and real work on show. Think of a senior operator's page, not a freelancer's gig profile.

---

## 2. Technical rules

The SSL site already exists. Do not break it.

- Stack: Next.js App Router, TypeScript, Tailwind v4. Deployed to Cloudflare Workers through the OpenNext adapter.
- Builds and deploys must run in Linux (WSL Ubuntu or Linux Mint), not native Windows.
- Before writing code, read `package.json`, the root `app/layout.tsx`, the global CSS, and the existing components folder. Reuse what exists (fonts, colours, header, footer, buttons). Do not add a new UI library or animation library unless it is already installed. If something is truly needed, ask first.
- Keep the Worker bundle small. No heavy 3D, no large client-side libraries.
- File layout:
  - `app/eric/page.tsx`: the page (server component by default)
  - `app/eric/content.ts`: ALL text, numbers, links and case study data live here, typed, so Eric can edit content without touching layout code
  - `app/eric/_components/`: section components for this page only
  - `public/eric/`: images, screenshots, portrait, CV PDF, Open Graph image
- Client components only where interaction needs it (filters, counters, mobile menu, lightbox).
- Use `next/image` for all images. Set proper sizes and alt text.
- Respect `prefers-reduced-motion`. Every animation must have a still fallback.
- Mobile first. Must look premium on a phone, since most visitors will open it from LinkedIn or WhatsApp.
- Accessibility: proper heading order (one h1), visible focus states, colour contrast AA or better.

### SEO and sharing
- Use Next.js `metadata` export: title "Eric Nyaga | Marketing and Growth Leader, Founder of Signal Strait Labs", a plain description, canonical URL.
- Open Graph and Twitter card image at `public/eric/og-eric.png` (1200 x 630). Build a simple branded one if none is supplied.
- Add JSON-LD `Person` schema: name, jobTitle, worksFor (Signal Strait Labs, Indepth Research Institute), alumniOf (Zetech University, University of the People), url, sameAs (LinkedIn and other profiles from content.ts).
- Add `/eric` to the sitemap if the site has one.

### Contact
- If the site already has a contact API route, reuse it with a hidden field `source: "eric-portfolio"`. If not, use a `mailto:` button and a booking link from content.ts. Do not build a new backend for this.

---

## 3. Brand and visual direction

Use SSL brand so the page feels like part of the company Eric founded.

- Colours: navy `#01081b` (base background), blue `#1a59cc` (primary accent), gold `#C5A059` (premium highlight, use sparingly: key numbers, thin rules, small labels)
- Fonts: Sora (headings), Plus Jakarta Sans (body)
- Mood: dark, deep navy with soft blue light and fine gold detail. Generous spacing. Large, confident headings. Clean grid.
- Visual ideas to use:
  - Subtle animated grid or signal-line background in the hero (CSS or SVG, very light)
  - Large portrait with a soft blue glow edge
  - Animated number counters in the proof bar (only for real numbers)
  - Case study cards with screenshots inside clean browser and phone frames
  - Simple custom SVG diagrams for systems work (for example the lead flow and the automation pipeline). Built in code, in brand colours, not stock images.
  - Slow scrolling strip of tools and technologies
  - Hover lift and light glow on cards, fade and rise on scroll
- Avoid: stock photos of people in suits, emoji, gimmicky effects, cluttered glassmorphism everywhere, rainbow gradients.

---

## 4. Writing rules (very important)

- First person ("I"), direct, plain English. Short sentences.
- Sound like someone who has done the work and has opinions, not someone selling.
- No em dashes anywhere. Use commas, full stops or colons.
- Banned words and phrases: passionate, results-driven, dynamic, leverage, synergy, cutting-edge, seamless, unlock, empower, elevate, game-changer, revolutionize, journey, delve, robust, holistic, innovative solutions, in today's fast-paced world, I'm thrilled, take it to the next level, transform your business.
- Show, don't claim. Prefer "I built the system that routes every Meta lead into a sequence within minutes" over "I'm an expert in automation".
- Never invent numbers, client names, quotes or results. Anything marked `[ADD]` is a placeholder. In content.ts, give placeholder fields a clear `TODO` value, and hide any stat, quote or result that is still a placeholder from the rendered page (do not show "[ADD]" to visitors).
- Do not show Eric's age or date of birth anywhere on the page.

---

## 5. Who Eric is (facts for the copy)

- Name: Eric Nyaga, based in Nairobi, Kenya
- Founder, Signal Strait Labs: a marketing and organizational growth firm, founded 2022, Nairobi
- Central Marketing Officer and lead Martech officer, Indepth Research Institute (IRES): professional training and advisory firm, HQ Nairobi, operating across Africa and beyond
- Part-time Marketing Lead, Oplos Marketing & Media
- Part-time Marketing Lead, Apollina Healthcare
- At IRES, Eric also plays a big part in sales execution, CRM management and overall management, reporting to the CEO and management team
- Education:
  - Computer Science degree, Zetech University, 2019 to 2022 `[ADD exact degree title]`
  - `[ADD degree title]`, University of the People, 2024 to 2027 (in progress)
- Technical: full stack developer. `[ADD languages, frameworks and tools Eric wants listed]`. Known from his work: Next.js, TypeScript, Tailwind, vanilla JavaScript, HTML/CSS, Cloudflare Workers, n8n, Make.com, Meta Graph and LinkedIn APIs, HubSpot, Brevo, Google Ads, Meta Ads, Looker Studio, Google Sheets, Formspree, jsPDF, WordPress, Oracle Cloud.
- Tactical marketing: graphic design, video editing, email marketing, campaign setup and management, SEO, content, paid ads.

Context only (do not present as Eric's personal numbers): IRES has served 200,000+ professionals across 17+ sectors and 21+ countries. If used, label it clearly as the scale of the organization he leads marketing for.

---

## 6. Page structure and draft copy

Sections in this order. Copy below is a draft. Keep the meaning and plain tone; tighten where needed.

### 6.1 Hero
- Small label (gold): `Marketing and Growth Leader · Founder, Signal Strait Labs`
- H1: **I lead marketing, and I build the systems behind it.**
- Intro: "I'm Eric Nyaga. I set marketing direction, run sales and CRM operations, and write the code and automations that make the plan actually work. I do this as Central Marketing Officer at Indepth Research Institute, and for clients through Signal Strait Labs, the firm I founded."
- Two clear doors (buttons):
  - "Hiring for a senior role?" → scrolls to Leadership section, plus "Download CV" (`public/eric/eric-nyaga-cv.pdf`)
  - "Need growth work done?" → scrolls to Work with me / SSL section
- Portrait on the right (stacked above text on mobile)
- Thin credential strip under the hero: Signal Strait Labs · IRES · Apollina Healthcare · Oplos Marketing & Media (text logos or supplied logos in `public/eric/logos/`, only with permission)

### 6.2 Proof bar
4 or 5 real numbers with short labels. All `[ADD]` until Eric supplies them. Ideas:
- `[ADD]` leads generated through systems I built
- `[ADD]` organic ranking or traffic change at IRES
- `[ADD]` campaigns run across `[ADD]` countries
- `[ADD]` automations live and running daily
- `[ADD]` people I lead or coordinate

### 6.3 How I think (point of view)
This section is what makes him read as an authority. 4 short principles, each with a heading and 2 to 3 sentences. Drafts:
1. **Marketing is a system, not a stream of posts.** Every campaign should feed a pipeline that someone owns, with a clear next step for every lead.
2. **If it isn't in the CRM, it didn't happen.** I set up tracking before I spend money, so we can tell which channel brought a paying client.
3. **Speed and follow-up beat volume.** A warm lead left for two weeks is a lost lead. I design follow-up so response speed matches how ready the buyer is.
4. **Build for the team you have.** The best tool is the one your team will actually use. I automate the repetitive work so people can focus on conversations that close.

### 6.4 Where I work now
Four role cards: role title, organization, one line on scope, years.
- Signal Strait Labs, Founder (2022 to now): I run the firm, shape client strategy and lead the builds.
- IRES, Central Marketing Officer and Lead Martech (`[ADD start year]` to now): I lead marketing across the institute's sector units, run the CRM and reporting to management, and support sales execution.
- Apollina Healthcare, Marketing Lead, part-time (`[ADD]`)
- Oplos Marketing & Media, Marketing Lead, part-time (`[ADD]`)

### 6.5 Selected work (the core section)
Filter tabs: All · Strategy and Leadership · Systems and Automation · Campaigns · Engineering. Each card opens to a full case study (expandable panel or a modal on desktop, full-width expand on mobile). Each case study uses the same format:

**The problem → My role → What I decided → What I built → The result**

Every case study shows at least one visual: screenshot in a device frame, or a custom SVG diagram.

**Case 1 (flagship): Autonomous social media for a construction firm**
- Client: RailSite Building and Civil Contractors `[confirm permission to name]`
- Tags: Systems and Automation, Engineering
- Problem: A growing construction firm with no marketing department needed to post every day across its social channels, on a tight one-time budget, with almost no staff time.
- My role: Founder, Signal Strait Labs. Scoped, designed and built the whole system.
- What I decided: Run it on free tools so the client can keep it at zero monthly cost. Self-host the automation engine instead of paying for a platform.
- What I built: An automation pipeline on self-hosted n8n (Oracle Cloud free tier). Content goes in through one intake form. Captions are generated to vary every day, open with a useful tip, then show the project and end with a call to action. Posts go out daily at 10:00 on Facebook and Instagram, including carousels, and videos as Reels on Instagram. Missed runs send instant alert emails. LinkedIn company page posting is being added. I'm also improving the client's WordPress website.
- Result: `[ADD posts published, hours saved, follower or reach change]`
- Visual: SVG pipeline diagram (Intake form → n8n → caption generation → Facebook / Instagram / LinkedIn → alerts) plus screenshots `[ADD]`

**Case 2: Lead management framework for a training institute**
- Organization: IRES
- Tags: Strategy and Leadership
- Problem: Leads moved between marketing and sales without clear definitions, owners or deadlines, so good leads went cold.
- My role: Led the design of the framework with management and the sales units.
- What I decided: Define every lead stage clearly, with no overlap, and tie each stage to an owner, an action and a response time.
- What I built: A lead management framework running in HubSpot: lead stages from first contact through marketing qualified, sales accepted and sales qualified, to opportunity and deal. Clear handoffs between digital marketers, sales reps and customer success. A 7-step multi-channel follow-up sequence before any lead is recycled. Response time targets by role. Qualification using BANT and MEDDIC. A rule that every lost deal gets a review.
- Result: `[ADD change in response time, MQL to SQL rate or pipeline speed]`. Target set: 40% of marketing qualified leads becoming sales qualified.
- Visual: SVG funnel and handoff diagram (marketing side and sales side, with the gap between them)
- Note: show structure only. No internal names, client names or confidential figures.

**Case 3: Course Finder and Training Needs Assessment tools**
- Organization: IRES (healthcare and humanitarian units)
- Tags: Engineering, Systems and Automation
- Problem: Visitors didn't know which course fit them, and the site had no smart way to capture high-intent leads.
- What I built: Interactive web tools that ask a short set of adaptive questions, where later questions change based on earlier answers, recommend courses from the catalogue, capture the lead, and give the visitor a branded PDF report to download. Free-text answers are matched to course topics.
- Result: `[ADD leads captured, completion rate]`
- Visual: screenshots in phone and laptop frames `[ADD]`, link to live tool if public `[ADD URL]`

**Case 4: Management marketing dashboard and monthly reporting**
- Organization: IRES
- Tags: Strategy and Leadership
- Problem: Management needed one honest view of marketing performance across many platforms, without paying for tools.
- What I built: A free, highly visual dashboard pulling Google, Meta, LinkedIn, Google Business Profile, YouTube and TikTok data, delivered weekly to the CEO, Marketing Director and Business Manager. Plus a compact monthly report, presented alongside the sales unit and RevOps reports. No vanity metrics: it tracks the path to course registrations.
- Result: `[ADD]`
- Visual: blurred dashboard screenshot `[ADD]`

**Case 5: Paid advertising and attribution system**
- Organization: IRES, Apollina Healthcare, Oplos Marketing & Media
- Tags: Strategy and Leadership, Campaigns
- Problem: Long sales cycles and a deep website made it hard to know which ads produced paying clients. Three brands had to run under one ad account.
- What I built: A reusable paid ads model with formula-driven budget allocation, a UTM naming framework, separate naming rules per brand, and attribution captured in HubSpot through UTM properties and workflows. Plus a funding plan for Google Ads and Meta campaigns for courses that need to reach minimum class size.
- Result: `[ADD cost per lead, ROAS or registrations]`

**Case 6: Lead generation for logistics companies**
- Clients: Buyers Logistics, Chase Fast Logistics `[confirm permission to name, otherwise "two Nairobi logistics firms"]`
- Tags: Campaigns, Systems and Automation
- What I built: Meta lead campaigns for customs brokerage and freight forwarding, targeting every country served by the port of Mombasa. Each lead flows straight into an email nurture sequence in Brevo and into a Google Sheet the client's team already knows how to use.
- Result: `[ADD leads, cost per lead]`

**Case 7: Rebuilding the marketing team's content plan**
- Organization: IRES
- Tags: Strategy and Leadership
- What I did: Reworked the plan for the team of digital marketers so content goes beyond course promotion into proof, people and expertise: certifications, venues, trainers, alumni, testimonials, industry insight, and international venues promoted daily. Added search optimisation for AI answer engines (AEO and GEO) and a shared content bank as the first step toward automated posting. I'm running the new model myself first in the humanitarian sector.
- Result: `[ADD]`

**Case 8: Search visibility and authority building**
- Organization: IRES, Apollina Healthcare, Oplos
- Tags: Strategy and Leadership, Campaigns
- What I did: `[ADD the IRES SEO work and ranking results]`. Built a prioritised tracker of 126 free directories, backlink and guest posting sources for Apollina and Oplos, with live progress tracking.
- Result: `[ADD ranking or traffic change]`

**Case 9: The Signal Strait Labs website**
- Tags: Engineering
- What I built: The firm's own site on Next.js, TypeScript and Tailwind, running on Cloudflare Workers, including a services grid with detailed interactions, and an interactive project tracker used to manage builds.
- Visual: screenshot, link to homepage

Optional smaller items (a compact "More work" grid, no full case study): email automation fixes and deliverability work in Brevo, monthly humanitarian sector newsletter, target account lists for Apollina across African markets, AI prospecting agent project (I defined the ideal customer profile for the vendor building it), branded executive apparel for IRES management, design and video samples `[ADD files]`.

### 6.6 Leadership and management
For the "hiring" door. Short and concrete:
- I report to and work with the CEO and management team on marketing direction, budgets and results.
- I lead and coordinate a marketing team of `[ADD number]` across sector units.
- I'm involved in sales execution: lead handoffs, follow-up standards and deal reviews.
- I manage outside vendors and partners, for example defining requirements for an AI prospecting agent built by an external firm.
- I run marketing for several brands at once, each with its own audience and budget.

### 6.7 Capabilities
Four columns or tabs:
- **Strategy and leadership:** marketing strategy, go-to-market, budgeting, reporting to management, team planning
- **Revenue operations:** CRM design (HubSpot), lead management, attribution, sales enablement, follow-up systems
- **Marketing execution:** paid ads (Google, Meta), email marketing (Brevo), SEO, content, graphic design, video editing
- **Engineering and automation:** full stack web development, workflow automation (n8n, Make.com), APIs, dashboards, lead capture tools

Below it, the slow scrolling tool strip (names in plain text or simple monochrome icons).

### 6.8 Experience and education timeline
Vertical timeline, newest first. Roles from 6.4 plus education from section 5. `[ADD any earlier roles]`

### 6.9 Testimonials
2 or 3 short quotes `[ADD with permission]`. Hide this section completely until real quotes exist.

### 6.10 Work with me
For the "growth work" door. Heading: **Need this built for your business?**
Text: "Through Signal Strait Labs, I help businesses set up the marketing systems they need to grow: lead generation, automation, CRM setup, reporting and websites." Buttons: "See Signal Strait Labs services" (link to homepage services section) and "Book a call" `[ADD booking link]`.

### 6.11 Contact and footer
Email `[ADD preferred public email, e.g. eric@signalstraitlabs.com]`, LinkedIn `[ADD URL]`, location "Nairobi, Kenya", CV download. Short form if the site already has a contact route.

---

## 7. Images: plug-and-play placeholders

Eric will add real images later by dropping files into `public/eric/` with the exact same names, then deploying. No code changes should ever be needed to swap an image.

### Rules
- Create a real placeholder file for EVERY image listed below, at the exact path, filename, extension and pixel size given. The page must reference only these paths.
- Generate the placeholders with a small Node script at `scripts/make-eric-placeholders.mjs` (use `sharp` if already installed, otherwise ask before adding it). The script must skip any file that already exists, so it never overwrites a real image Eric has added.
- Placeholder style: navy `#01081b` background, soft blue `#1a59cc` glow, thin gold `#C5A059` border, and centred text showing the filename and pixel size (e.g. "railsite-1.jpg · 1600 x 1000"). This makes it obvious which file goes where.
- Every image slot uses a fixed aspect ratio box with `object-fit: cover`, so a real image of a slightly different size still fits without breaking the layout.
- All image paths, alt text and captions live in `app/eric/content.ts`, never hard-coded in components.
- Cache busting: add `export const ASSET_VERSION = "1"` in content.ts and append `?v=${ASSET_VERSION}` to every image and CV URL. After swapping images, Eric bumps this number to "2" so browsers and Cloudflare load the new files.
- Optional items (logos, samples, extra screenshots): include a `show: true/false` flag in content.ts so Eric can turn a slot on or off without deleting files.
- Create `public/eric/IMAGES.md` listing every file below with its size and what it should show, as Eric's swap checklist.

### Image manifest

| File (in `public/eric/`) | Size (px) | What goes here |
|---|---|---|
| `portrait.jpg` | 1200 x 1500 (4:5) | Main hero portrait, plain or dark background |
| `portrait-square.jpg` | 800 x 800 | Smaller portrait for About and contact |
| `og-eric.png` | 1200 x 630 | Social share image (build a branded version with name and title if no real one) |
| `eric-nyaga-cv.pdf` | n/a | CV download (placeholder: a one-page PDF saying "CV coming soon") |
| `work/railsite-1.jpg` | 1600 x 1000 | RailSite: automation workflow screenshot |
| `work/railsite-2.jpg` | 1080 x 1350 | RailSite: sample published post (phone frame) |
| `work/lead-framework-1.jpg` | 1600 x 1000 | Lead framework: HubSpot pipeline view (blurred) |
| `work/course-finder-1.jpg` | 1600 x 1000 | Course Finder on laptop |
| `work/course-finder-2.jpg` | 1080 x 1920 | Course Finder on phone |
| `work/needs-assessment-1.jpg` | 1600 x 1000 | Training Needs Assessment tool |
| `work/dashboard-1.jpg` | 1600 x 1000 | Management dashboard (blurred numbers) |
| `work/paid-ads-1.jpg` | 1600 x 1000 | Paid ads model or campaign results |
| `work/logistics-ads-1.jpg` | 1080 x 1350 | Logistics lead ad creative |
| `work/logistics-ads-2.jpg` | 1600 x 1000 | Lead flow into Brevo or Google Sheet |
| `work/content-plan-1.jpg` | 1600 x 1000 | Content plan or content bank |
| `work/seo-1.jpg` | 1600 x 1000 | Rankings or traffic chart |
| `work/ssl-site-1.jpg` | 1600 x 1000 | Signal Strait Labs homepage |
| `samples/design-1.jpg` to `design-6.jpg` | 1080 x 1080 | Graphic design samples (gallery) |
| `samples/video-1.jpg` to `video-3.jpg` | 1280 x 720 | Video thumbnails (each links to a URL set in content.ts) |
| `logos/ssl.png`, `logos/ires.png`, `logos/apollina.png`, `logos/oplos.png` | 400 x 160, transparent | Credential strip logos (show only with permission) |

The SVG diagrams in the case studies (RailSite pipeline, lead framework funnel) are built in code and need no image files.

---

## 8. QA checklist (check before saying it's done)

- [ ] `npm run build` passes in Linux, and the OpenNext Cloudflare build passes
- [ ] All existing pages still work; nothing outside `app/eric/`, `public/eric/` and the sitemap was changed (list any other change made and why)
- [ ] No em dashes and none of the banned words in any visible text
- [ ] No placeholder text (`[ADD]`, `TODO`) visible on the page
- [ ] Looks right at 360px, 768px, 1280px and 1920px wide
- [ ] Lighthouse: Performance 90+, Accessibility 95+, SEO 95+ on mobile
- [ ] Reduced motion setting turns animations off
- [ ] Open Graph preview shows the right title, description and image
- [ ] Both hero doors scroll to the right sections; CV downloads
- [ ] All external links open in a new tab with `rel="noopener noreferrer"`
- [ ] Every file in the image manifest exists as a placeholder at the exact path and size
- [ ] Replacing any placeholder with a different real image of the same name shows correctly with no layout break
- [ ] Running the placeholder script a second time does not overwrite existing files
- [ ] `public/eric/IMAGES.md` swap checklist exists

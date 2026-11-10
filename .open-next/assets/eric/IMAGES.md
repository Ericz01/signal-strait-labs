# Image swap checklist for /eric

Drop a real file into `public/eric/` with the **exact same name and extension**, then:

1. Open `app/eric/content.ts` and bump `ASSET_VERSION` ("1" to "2", and so on).
2. Build and deploy.

The bump changes `?v=` on every image and CV link, so browsers and Cloudflare fetch the new files. No layout code changes are needed: every image sits in a fixed-ratio box with `object-fit: cover`, so a real image of a slightly different size still fits.

Placeholders are made by `node scripts/make-eric-placeholders.mjs`. It never overwrites a file that already exists. To get a placeholder back, delete the file and run it again.

Alt text and captions for every image live in `app/eric/content.ts`. Update them when you swap in a real image.

## Core

| Done | File | Size (px) | What goes here |
|---|---|---|---|
| [x] | `portrait.jpg` | 1200 x 1500 (4:5) | Main hero portrait. Currently cropped from your square headshot. |
| [x] | `portrait-square.jpg` | 800 x 800 | Smaller portrait for the contact section. Currently your headshot. |
| [ ] | `og-eric.png` | 1200 x 630 | Social share image. Currently a generated branded card with your name, title and headshot. Replace only if you have a better one. |
| [x] | `eric-nyaga-cv.pdf` | n/a | CV download. Currently your real CV (see note below). |

## Case study screenshots (`work/`)

These are visible on the page now as placeholders. To hide one you won't supply, set its `show` to `false` in `content.ts`.

| Done | File | Size (px) | What goes here |
|---|---|---|---|
| [ ] | `work/railsite-1.jpg` | 1600 x 1000 | RailSite: n8n automation workflow screenshot (browser frame) |
| [ ] | `work/railsite-2.jpg` | 1080 x 1350 | RailSite: a sample published post (phone frame) |
| [ ] | `work/lead-framework-1.jpg` | 1600 x 1000 | Lead framework: HubSpot pipeline view, names and figures blurred |
| [ ] | `work/course-finder-1.jpg` | 1600 x 1000 | Course Finder on a laptop |
| [ ] | `work/course-finder-2.jpg` | 1080 x 1920 | Course Finder on a phone |
| [ ] | `work/needs-assessment-1.jpg` | 1600 x 1000 | Training Needs Assessment tool |
| [ ] | `work/dashboard-1.jpg` | 1600 x 1000 | Management dashboard, numbers blurred |
| [ ] | `work/paid-ads-1.jpg` | 1600 x 1000 | Paid ads model or campaign results |
| [ ] | `work/logistics-ads-1.jpg` | 1080 x 1350 | Logistics lead ad creative (phone frame) |
| [ ] | `work/logistics-ads-2.jpg` | 1600 x 1000 | Leads arriving in Brevo or the Google Sheet |
| [ ] | `work/content-plan-1.jpg` | 1600 x 1000 | Content plan or content bank |
| [ ] | `work/seo-1.jpg` | 1600 x 1000 | Rankings or traffic chart |
| [ ] | `work/ssl-site-1.jpg` | 1600 x 1000 | Signal Strait Labs homepage |

## Optional (hidden until switched on in `content.ts`)

| Done | File | Size (px) | What goes here | Switch |
|---|---|---|---|---|
| [ ] | `samples/design-1.jpg` to `design-6.jpg` | 1080 x 1080 | Graphic design samples | `samples.show` |
| [ ] | `samples/video-1.jpg` to `video-3.jpg` | 1280 x 720 | Video thumbnails. Set each video's `href` and `title` too. | `samples.show` |
| [ ] | `logos/ssl.png` | 400 x 160, transparent | Credential strip logo | `credentials[].logo.show` |
| [ ] | `logos/ires.png` | 400 x 160, transparent | Credential strip logo (with permission) | `credentials[].logo.show` |
| [ ] | `logos/apollina.png` | 400 x 160, transparent | Credential strip logo (with permission) | `credentials[].logo.show` |
| [ ] | `logos/oplos.png` | 400 x 160, transparent | Credential strip logo (with permission) | `credentials[].logo.show` |

## Not images

The diagrams in the RailSite, lead framework and logistics case studies are built in code from the text in `content.ts`. They need no files.

`Canva - download.png` is the original headshot the portraits were made from. The page doesn't use it. It is still a public file (1.8 MB) if deployed, so move it out of `public/` once you are happy with the portraits.

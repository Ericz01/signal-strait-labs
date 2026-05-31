This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## 🛠 Environment Configuration

Copy the project root `.env.local` file (or create one from the template below) before running integrations locally. This file is git-ignored and must never be committed.

| Variable | Description | Required (Local) | Example Format |
| --- | --- | --- | --- |
| `RESEND_API_KEY` | Server-side API key for Resend transactional email and lead-capture delivery. | No — required only when testing or sending email via Resend. | `re_xxxxxxxxxxxxxxxxxxxx` |
| `NEXT_PUBLIC_APP_URL` | Public canonical base URL for metadata, Open Graph, and client-side links. Exposed to the browser. | Yes — set to your local or deployed origin. | `https://signal-strait-labs.pages.dev` |

**Local template**

```bash
# Resend Email Integration
RESEND_API_KEY=re_placeholder_token_abc123

# Production Deployment URL
NEXT_PUBLIC_APP_URL=https://signal-strait-labs.pages.dev
```

For local development, set `NEXT_PUBLIC_APP_URL` to `http://localhost:3000`. In production (e.g. Cloudflare Pages), configure the same keys in your host’s environment settings.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.
## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

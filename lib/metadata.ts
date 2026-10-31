import type { Metadata } from 'next';
import { SITE_NAME } from '@/lib/site-config';

// Default social preview image (1200x630). Rebuild with:
// node scripts/make-social-card.mjs
export const DEFAULT_OG_IMAGE = {
  url: '/og-image.png',
  width: 1200,
  height: 630,
  alt: 'Signal Strait Labs: growth engineering for Africa and beyond',
};

export const baseOpenGraph = {
  siteName: SITE_NAME,
  locale: 'en_KE',
  type: 'website' as const,
  images: [DEFAULT_OG_IMAGE],
};

// Add `site`/`creator` (e.g. "@signalstraitlabs") once the X account exists.
export const baseTwitter = {
  card: 'summary_large_image' as const,
  images: [DEFAULT_OG_IMAGE.url],
};

type PageMetadataInput = {
  /** Page title without the brand; the layout template adds " | Signal Strait Labs". */
  title: string;
  description: string;
  /** Path starting with "/", e.g. "/about". Resolved against metadataBase. */
  path: string;
};

// Title, description, canonical, OpenGraph and Twitter card for a page, all pointing at
// the page's own URL.
export function pageMetadata({ title, description, path }: PageMetadataInput): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      ...baseOpenGraph,
      title: `${title} | ${SITE_NAME}`,
      description,
      url: path,
    },
    twitter: {
      ...baseTwitter,
      title: `${title} | ${SITE_NAME}`,
      description,
    },
  };
}

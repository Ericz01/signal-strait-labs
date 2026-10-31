import type { Metadata } from 'next';
import { SITE_NAME } from '@/lib/site-config';

// Default social preview image. Replace with the branded 1200x630 card (t105).
export const DEFAULT_OG_IMAGE = {
  url: '/logo.png',
  width: 1536,
  height: 1024,
  alt: 'Signal Strait Labs',
};

export const baseOpenGraph = {
  siteName: SITE_NAME,
  locale: 'en_KE',
  type: 'website' as const,
  images: [DEFAULT_OG_IMAGE],
};

type PageMetadataInput = {
  /** Page title without the brand; the layout template adds " | Signal Strait Labs". */
  title: string;
  description: string;
  /** Path starting with "/", e.g. "/about". Resolved against metadataBase. */
  path: string;
};

// Title, description, canonical and OpenGraph for a page, all pointing at
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
  };
}

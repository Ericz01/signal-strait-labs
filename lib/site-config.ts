// Public, non-secret site settings.

export const SITE_URL = 'https://signalstraitlabs.com';
export const SITE_NAME = 'Signal Strait Labs';
export const CONTACT_EMAIL = 'connect@signalstraitlabs.com';
export const CONTACT_PHONE = '+254712895903';

export const HOME_TITLE = 'Signal Strait Labs | Websites, Search & Growth in Nairobi';
export const HOME_DESCRIPTION =
  'Signal Strait Labs is a Nairobi team building fast websites, search and AI visibility, data systems and sales pipelines for growing companies.';

// Scheduling page for discovery calls (Cal.com or Calendly). Set
// NEXT_PUBLIC_BOOKING_URL at build time. Until then, the CTA goes to the
// contact page.
export const BOOKING_URL = process.env.NEXT_PUBLIC_BOOKING_URL || '/contact';

export const isExternalUrl = (href: string) => /^https?:\/\//.test(href);

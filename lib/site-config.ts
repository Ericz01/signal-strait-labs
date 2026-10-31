// Public, non-secret site settings.

// Scheduling page for discovery calls (Cal.com or Calendly). Set
// NEXT_PUBLIC_BOOKING_URL at build time. Until then, the CTA goes to the
// contact page.
export const BOOKING_URL = process.env.NEXT_PUBLIC_BOOKING_URL || '/contact';

export const isExternalUrl = (href: string) => /^https?:\/\//.test(href);

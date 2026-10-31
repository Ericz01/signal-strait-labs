'use client';

import Link from 'next/link';
import { setConsent, useCookieConsent } from '@/lib/cookie-consent';

// Consent banner. Shown until the visitor accepts or declines. Accepting
// allows third-party embeds (Google Maps) that may set their own cookies.
export function CookieConsent() {
  const consent = useCookieConsent();
  if (consent !== 'unset') return null;

  return (
    <div
      role="region"
      aria-label="Cookie consent"
      className="cookie-banner fixed inset-x-4 bottom-4 z-50 mx-auto max-w-3xl rounded-2xl border border-ssl-gold/30 bg-ssl-bg/95 p-5 shadow-2xl backdrop-blur-xl sm:p-6"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-relaxed text-slate-300">
          We only use what the site needs to work. If you accept, we also load embedded content like Google Maps,
          which may set its own cookies.{' '}
          <Link href="/privacy-policy#cookies" className="font-semibold text-ssl-gold underline-offset-4 hover:underline">
            Read our cookie policy
          </Link>
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => setConsent('declined')}
            className="rounded-lg border border-slate-500 px-4 py-2 text-sm font-semibold text-slate-200 transition-colors hover:border-slate-300 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-ssl-gold"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={() => setConsent('accepted')}
            className="rounded-lg bg-ssl-gold px-4 py-2 text-sm font-semibold text-ssl-bg transition-colors hover:bg-[#b08e4d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}

// Lets visitors change their choice later (used on the privacy policy page).
export function CookieSettingsButton() {
  return (
    <button
      type="button"
      onClick={() => setConsent('unset')}
      className="font-semibold text-ssl-blue underline-offset-4 hover:underline"
    >
      Change your cookie choice
    </button>
  );
}

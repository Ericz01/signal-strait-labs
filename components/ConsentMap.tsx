'use client';

import { useState } from 'react';
import { setConsent, useCookieConsent } from '@/lib/cookie-consent';

type ConsentMapProps = {
  src: string;
  title: string;
  /** Link to open the location in Google Maps without the embed. */
  linkHref: string;
};

// Google Maps embed that only loads after cookie consent, or when the visitor
// asks for it on this page.
export function ConsentMap({ src, title, linkHref }: ConsentMapProps) {
  const consent = useCookieConsent();
  const [showOnce, setShowOnce] = useState(false);

  if (consent === 'accepted' || showOnce) {
    return (
      <iframe
        src={src}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={title}
        className="grayscale hover:grayscale-0 transition-all duration-700"
      />
    );
  }

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-slate-100 p-6 text-center">
      <p className="max-w-sm text-sm text-slate-600">
        The map is provided by Google Maps, which may set cookies. It loads only if you allow it.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <button
          type="button"
          onClick={() => setShowOnce(true)}
          className="rounded-lg bg-ssl-blue px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-ssl-blue/90"
        >
          Show map
        </button>
        <button
          type="button"
          onClick={() => setConsent('accepted')}
          className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-400"
        >
          Always show maps
        </button>
      </div>
      <a href={linkHref} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-ssl-blue hover:underline">
        Open in Google Maps<span className="sr-only"> (opens in a new tab)</span>
      </a>
    </div>
  );
}

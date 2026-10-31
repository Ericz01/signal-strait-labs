'use client';

import { useSyncExternalStore } from 'react';

// Cookie consent choice, stored in localStorage. "unset" means the visitor has
// not chosen yet. Only essential storage is used until they accept.
export type ConsentChoice = 'accepted' | 'declined' | 'unset';

export const STORAGE_KEY = 'ssl-cookie-consent';
const CHANGE_EVENT = 'ssl-cookie-consent-change';

function read(): ConsentChoice {
  try {
    const value = window.localStorage.getItem(STORAGE_KEY);
    return value === 'accepted' || value === 'declined' ? value : 'unset';
  } catch {
    return 'unset';
  }
}

export function setConsent(choice: ConsentChoice) {
  try {
    if (choice === 'unset') window.localStorage.removeItem(STORAGE_KEY);
    else window.localStorage.setItem(STORAGE_KEY, choice);
  } catch {
    // Storage blocked: the choice lasts for this page view only.
  }
  // Keep <html data-consent> in sync: CSS uses it to hide the banner before
  // React hydrates (see lib/consent-boot.ts).
  if (choice === 'unset') document.documentElement.removeAttribute('data-consent');
  else document.documentElement.setAttribute('data-consent', choice);
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

function subscribe(onChange: () => void) {
  window.addEventListener(CHANGE_EVENT, onChange);
  window.addEventListener('storage', onChange);
  return () => {
    window.removeEventListener(CHANGE_EVENT, onChange);
    window.removeEventListener('storage', onChange);
  };
}

// Server render and hydration use 'unset', so the banner is in the initial HTML
// and paints immediately for first-time visitors. Returning visitors never see
// it: CONSENT_BOOT_SCRIPT (lib/consent-boot.ts) hides it with CSS before the first paint.
export function useCookieConsent(): ConsentChoice {
  return useSyncExternalStore<ConsentChoice>(subscribe, read, () => 'unset');
}

'use client';

import { useSyncExternalStore } from 'react';

// Cookie consent choice, stored in localStorage. "unset" means the visitor has
// not chosen yet. Only essential storage is used until they accept.
export type ConsentChoice = 'accepted' | 'declined' | 'unset';

const STORAGE_KEY = 'ssl-cookie-consent';
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

// Returns null during server render and hydration, so nothing consent-based
// renders until the stored choice is known.
export function useCookieConsent(): ConsentChoice | null {
  return useSyncExternalStore<ConsentChoice | null>(subscribe, read, () => null);
}

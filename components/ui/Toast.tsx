'use client';

import { useEffect } from 'react';
import { cn } from '@/lib/utils';

export type ToastVariant = 'success' | 'error';

export type ToastProps = {
  variant: ToastVariant;
  title: string;
  message?: string;
  onClose: () => void;
  /** Auto-dismiss delay in ms. Set to 0 to keep it open. */
  duration?: number;
};

// A single toast pinned to the bottom of the screen. Success toasts are
// announced politely; error toasts use role="alert" so screen readers
// announce them right away.
export function Toast({ variant, title, message, onClose, duration = 6000 }: ToastProps) {
  useEffect(() => {
    if (!duration) return;
    const id = window.setTimeout(onClose, duration);
    return () => window.clearTimeout(id);
  }, [duration, onClose]);

  const isError = variant === 'error';

  return (
    <div
      className="pointer-events-none fixed inset-x-4 bottom-4 z-[60] flex justify-center sm:inset-x-auto sm:right-6 sm:bottom-6 sm:justify-end"
    >
      <div
        role={isError ? 'alert' : 'status'}
        aria-live={isError ? 'assertive' : 'polite'}
        className={cn(
          'pointer-events-auto flex w-full max-w-sm animate-fade-up items-start gap-3 rounded-xl border bg-ssl-bg/95 p-4 text-left shadow-2xl backdrop-blur-xl motion-reduce:animate-none',
          isError ? 'border-red-400/40' : 'border-ssl-gold/40'
        )}
      >
        <span
          aria-hidden="true"
          className={cn(
            'mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold',
            isError ? 'bg-red-500/20 text-red-300' : 'bg-ssl-gold/20 text-ssl-gold'
          )}
        >
          {isError ? '!' : '✓'}
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold text-white">{title}</p>
          {message && <p className="mt-1 text-sm text-slate-300">{message}</p>}
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Dismiss notification"
          className="-m-1 rounded p-1 text-slate-400 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-ssl-gold"
        >
          <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor">
            <path d="M4.3 4.3a1 1 0 0 1 1.4 0L10 8.6l4.3-4.3a1 1 0 1 1 1.4 1.4L11.4 10l4.3 4.3a1 1 0 0 1-1.4 1.4L10 11.4l-4.3 4.3a1 1 0 0 1-1.4-1.4L8.6 10 4.3 5.7a1 1 0 0 1 0-1.4Z" />
          </svg>
        </button>
      </div>
    </div>
  );
}

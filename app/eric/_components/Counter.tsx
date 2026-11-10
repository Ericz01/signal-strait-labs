"use client";

import { useEffect, useRef, useState } from "react";

// Counts up to `value` once when it scrolls into view. The server renders the
// final number, so it is correct without JavaScript and with reduced motion.
export function Counter({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Already on screen at load: leave the final number in place.
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) return;

    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const duration = 1400;
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - t, 3);
          setDisplay(Math.round(value * eased));
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.6 }
    );
    setDisplay(0);
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value]);

  return (
    <span ref={ref}>
      {/* Screen readers get the final number only. */}
      <span className="sr-only">
        {prefix}
        {value.toLocaleString("en-US")}
        {suffix}
      </span>
      <span aria-hidden="true">
        {prefix}
        {display.toLocaleString("en-US")}
        {suffix}
      </span>
    </span>
  );
}

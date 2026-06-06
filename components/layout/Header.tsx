"use client";

import Link from "next/link";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

type NavLink = {
  readonly href: `#${string}`;
  readonly label: string;
};





const NAV_LINKS: readonly NavLink[] = [
  { href: "#services", label: "Services" },
  { href: "#insights", label: "Insights" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
] as const;

const SCROLL_COMPRESS_THRESHOLD = 20;

function NavAnchor({
  href,
  label,
  onNavigate,
  className,
}: NavLink & {
  onNavigate?: () => void;
  className?: string;
}) {
  return (
    <a
      href={href}
      onClick={onNavigate}
      className={
        className ??
        "text-sm font-medium text-slate-300 transition-colors duration-200 hover:text-[#c5a059]"
      }
    >
      {label}
    </a>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > SCROLL_COMPRESS_THRESHOLD);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  const toggleMobile = useCallback(() => {
    setMobileOpen((open) => !open);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-ssl-gold/20 transition-[background-color,box-shadow,padding] duration-300 ease-out ${
        scrolled
          ? "bg-[#01081b]/[0.98] shadow-lg shadow-black/25 backdrop-blur-xl"
          : "glass-nav-dark"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 transition-[height,padding] duration-300 sm:px-6 ${
          scrolled ? "h-14 py-2" : "h-20 py-4"
        }`}
      >
        {/* Brand cluster */}
        <Link
          href="/"
          className="group flex min-w-0 shrink-0 items-center gap-2.5 sm:gap-3"
          aria-label="Signal Strait Labs home"
          onClick={closeMobile}
        >
          {/* Container holding your true company asset */}
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-ssl-gold/20 bg-[#01081b]/70 shadow-inner shadow-black/30 backdrop-blur-md sm:h-10 sm:w-10">
            <Image
              src="/logo.png"
              alt="Signal Strait Labs Logo"
              width={32}
              height={32}
              className="h-6 w-6 object-contain transition-transform duration-300 ease-out group-hover:rotate-12 sm:h-7 sm:w-7"
              priority
            />
          </span>
          <span className="font-display truncate text-sm font-semibold leading-tight tracking-tight text-white sm:text-base">
            Signal Strait Labs
          </span>
        </Link>

        {/* Desktop navigation matrix */}
        <nav
          className="hidden flex-1 items-center justify-center gap-8 md:flex"
          aria-label="Primary"
        >
          {NAV_LINKS.map((item) => (
            <NavAnchor key={item.href} {...item} />
          ))}
        </nav>

        {/* CTA + mobile toggle */}
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <a
            href="#connect"
            className="hidden rounded-lg bg-gradient-to-r from-[#8a6f3e] to-[#c5a059] px-4 py-2.5 text-xs font-bold uppercase tracking-[0.14em] text-[#01081b] shadow-md shadow-[#c5a059]/25 transition-transform duration-200 hover:scale-[1.03] hover:shadow-lg hover:shadow-[#c5a059]/35 sm:inline-block sm:px-5 sm:text-sm"
          >
            Get an ABM Attack Plan
          </a>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-ssl-gold/25 text-[#c5a059] transition-colors hover:border-ssl-gold/45 hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ssl-gold md:hidden"
            aria-expanded={mobileOpen}
            aria-controls="ssl-mobile-menu"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={toggleMobile}
          >
            {mobileOpen ? (
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden
              >
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden
              >
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div
        id="ssl-mobile-menu"
        className={`overflow-hidden border-t border-ssl-gold/15 transition-[max-height,opacity] duration-300 ease-out md:hidden ${
          mobileOpen
            ? "max-h-[min(24rem,70vh)] opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
        } ${scrolled ? "bg-[#01081b]/[0.98]" : "bg-[#01081b]/95"}`}
        aria-hidden={!mobileOpen}
      >
        <nav
          className="flex flex-col gap-1 px-4 py-4 sm:px-6"
          aria-label="Mobile primary"
        >
          {NAV_LINKS.map((item) => (
            <NavAnchor
              key={item.href}
              {...item}
              onNavigate={closeMobile}
              className="rounded-lg px-3 py-3 text-base font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-[#c5a059]"
            />
          ))}
          <a
            href="#connect"
            onClick={closeMobile}
            className="mt-2 rounded-lg bg-gradient-to-r from-[#8a6f3e] to-[#c5a059] px-4 py-3.5 text-center text-xs font-bold uppercase tracking-[0.14em] text-[#01081b] shadow-md shadow-[#c5a059]/25 transition-transform duration-200 hover:scale-[1.02]"
          >
            Get an ABM Attack Plan
          </a>
        </nav>
      </div>
    </header>
  );
}
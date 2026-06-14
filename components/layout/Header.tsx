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

const SCROLL_COMPRESS_THRESHOLD = 80;

function NavAnchor({
  href,
  label,
  onNavigate,
}: NavLink & {
  onNavigate?: () => void;
}) {
  return (
    <a
      href={href}
      onClick={onNavigate}
      className="group relative py-2 text-sm font-medium tracking-wide text-slate-300 transition-colors duration-300 hover:text-white"
    >
      <span className="relative z-10">{label}</span>
      <span className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-gradient-to-r from-transparent via-ssl-gold/80 to-transparent transition-all duration-500 group-hover:w-full" />
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
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = useCallback(() => setMobileOpen(false), []);
  const toggleMobile = useCallback(() => setMobileOpen((open) => !open), []);

  return (
        <header
      className={`sticky top-0 z-50 border-b transition-all duration-500 ease-in-out backdrop-blur-xl backdrop-saturate-150 ${
        scrolled
          ? "border-white/[0.08] bg-[#01081b]/90 py-3 shadow-xl shadow-black/40"
          : "border-white/[0.02] bg-[#01081b]/70 py-5 shadow-none"
      }`}
    >
      <div className="relative z-50 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Brand Cluster */}
          <Link
            href="/"
            className="group flex shrink-0 items-center gap-3 transition-transform duration-300 active:scale-95"
            onClick={closeMobile}
          >
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] shadow-inner transition-all duration-500 group-hover:border-ssl-gold/40 group-hover:bg-ssl-gold/5 group-hover:shadow-ssl-gold/10">
              <Image
                src="/logo.png"
                alt="Signal Strait Labs"
                width={28}
                height={28}
                className="w-auto object-contain transition-all duration-700 ease-out group-hover:rotate-[15deg] group-hover:scale-110"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-base font-bold tracking-tight text-white sm:text-lg">
                Signal Strait Labs
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-ssl-gold/80">
                Growth Engineering
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-10 md:flex">
            {NAV_LINKS.map((item) => (
              <NavAnchor key={item.href} {...item} />
            ))}
          </nav>

          {/* Action Center */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="group relative hidden overflow-hidden rounded-lg bg-gradient-to-br from-[#8a6f3e] to-[#c5a059] p-[1px] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(197,160,89,0.3)] active:scale-[0.98] lg:block"
            >
              <div className="relative flex items-center justify-center rounded-[7px] bg-[#01081b] px-5 py-2.5 transition-colors group-hover:bg-transparent">
                <span className="relative z-10 text-xs font-bold uppercase tracking-widest text-ssl-gold transition-colors duration-300 group-hover:text-[#01081b]">
                  Get an ABM Attack Plan
                </span>
              </div>
            </a>

            {/* Mobile Menu Toggle */}
                        <button
              type="button"
              onClick={toggleMobile}
              className="relative flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-white transition-all hover:border-ssl-gold/40 hover:bg-ssl-gold/5 focus-visible:ring-2 focus-visible:ring-[#c5a059] focus-visible:ring-offset-2 focus-visible:ring-offset-[#01081b] focus-visible:outline-none md:hidden"
              aria-expanded={mobileOpen}
              aria-controls="ssl-mobile-menu"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              <div className="relative h-5 w-5">
                <span
                  className={`absolute left-0 top-1/2 h-0.5 w-5 -translate-y-1/2 bg-current transition-all duration-300 ${
                    mobileOpen ? "rotate-45" : "-translate-y-[6px]"
                  }`}
                />
                <span
                  className={`absolute left-0 top-1/2 h-0.5 w-5 -translate-y-1/2 bg-current transition-all duration-300 ${
                    mobileOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-1/2 h-0.5 w-5 -translate-y-1/2 bg-current transition-all duration-300 ${
                    mobileOpen ? "-rotate-45" : "translate-y-[4px]"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Sheet */}
            <div
              id="ssl-mobile-menu"
              className={`fixed inset-0 z-40 flex h-screen w-screen flex-col bg-[#01081b]/95 backdrop-blur-2xl backdrop-saturate-150 transition-all duration-500 ease-in-out md:hidden ${
                mobileOpen
                  ? "translate-x-0 opacity-100 pointer-events-auto"
                  : "translate-x-full opacity-0 pointer-events-none"
              }`}
              aria-hidden={!mobileOpen}
            >
              <nav className="flex flex-1 flex-col justify-center p-8 sm:p-12">
                <div className="flex flex-col space-y-2">
                  {NAV_LINKS.map((item, idx) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={closeMobile}
                      className="flex items-center justify-between border-b border-white/[0.03] py-6 text-2xl font-semibold tracking-tight text-slate-300 transition-colors hover:text-ssl-gold"
                      style={{ transitionDelay: `${idx * 50}ms` }}
                    >
                      <span>{item.label}</span>
                      <svg
                        viewBox="0 0 24 24"
                        className="h-6 w-6 opacity-30"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  ))}
                </div>
                <a
                  href="#contact"
                  onClick={closeMobile}
                  className="mt-10 flex items-center justify-center rounded-xl bg-gradient-to-r from-[#8a6f3e] to-[#c5a059] py-5 text-base font-bold uppercase tracking-widest text-[#01081b] shadow-xl shadow-ssl-gold/20 transition-transform active:scale-95"
                >
                  Get an ABM Attack Plan
                </a>
              </nav>
            </div>
    </header>
  );
}
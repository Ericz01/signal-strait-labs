import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/[0.06] bg-[#01081b] text-slate-400">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16">
        {/* Responsive Grid Setup - Pre-configured for columns 2, 3, and 4 later */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          
          {/* Column 1: Brand Anchor */}
          <div className="flex flex-col gap-4">
            <Link 
              href="/" 
              className="font-display text-lg font-bold tracking-tight text-white transition-colors hover:text-[#c5a059]"
            >
              Signal Strait Labs
            </Link>
            
            <p className="max-w-xs text-sm leading-relaxed text-slate-400/90">
              Navigating complex market channels with precision demand generation and account-based intelligence.
            </p>

            {/* Social Media Icon Matrix */}
            <div className="mt-4 flex flex-wrap items-center gap-4">
              {/* LinkedIn - Live Link */}
              <a
                href="https://www.linkedin.com/company/signal-strait-labs"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Signal Strait Labs LinkedIn Profile"
                className="group p-1 text-slate-400 transition-colors duration-200 hover:text-[#c5a059]"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current transition-transform duration-200 group-hover:scale-110">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>

              {/* Facebook - Live Link */}
              <a
                href="https://web.facebook.com/profile.php?id=61589782545004"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Signal Strait Labs Facebook Page"
                className="group p-1 text-slate-400 transition-colors duration-200 hover:text-[#c5a059]"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current transition-transform duration-200 group-hover:scale-110">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 12.991 22 12z"/>
                </svg>
              </a>

              {/* Instagram - Placeholder */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Signal Strait Labs Instagram"
                className="group p-1 text-slate-400 transition-colors duration-200 hover:text-[#c5a059]"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 transition-transform duration-200 group-hover:scale-110">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>

              {/* X / Twitter - Placeholder */}
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Signal Strait Labs X Profile"
                className="group p-1 text-slate-400 transition-colors duration-200 hover:text-[#c5a059]"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current transition-transform duration-200 group-hover:scale-110">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

              {/* YouTube - Placeholder */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Signal Strait Labs YouTube Channel"
                className="group p-1 text-slate-400 transition-colors duration-200 hover:text-[#c5a059]"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 transition-transform duration-200 group-hover:scale-110">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </a>

              {/* TikTok - Placeholder */}
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Signal Strait Labs TikTok"
                className="group p-1 text-slate-400 transition-colors duration-200 hover:text-[#c5a059]"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 transition-transform duration-200 group-hover:scale-110">
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
                </svg>
              </a>
            </div>
          </div>

                    {/* Column 2: Solutions */}
          <div className="flex flex-col">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white">
              Solutions
            </h3>
            <nav className="mt-4 flex flex-col gap-3">
              <Link
                href="#services"
                className="text-sm text-slate-400 transition-colors duration-200 hover:text-[#c5a059]"
              >
                Technical Infrastructure & Web Dev
              </Link>
              <Link
                href="#services"
                className="text-sm text-slate-400 transition-colors duration-200 hover:text-[#c5a059]"
              >
                Algorithmic Search (SEO/AEO/GEO)
              </Link>
              <Link
                href="#services"
                className="text-sm text-slate-400 transition-colors duration-200 hover:text-[#c5a059]"
              >
                Data Systems & Automation
              </Link>
              <Link
                href="#services"
                className="text-sm text-slate-400 transition-colors duration-200 hover:text-[#c5a059]"
              >
                Revenue Operations (RevOps)
              </Link>
              <Link
                href="#services"
                className="text-sm text-slate-400 transition-colors duration-200 hover:text-[#c5a059]"
              >
                Performance Marketing & ABM
              </Link>
              <Link
                href="#services"
                className="text-sm text-slate-400 transition-colors duration-200 hover:text-[#c5a059]"
              >
                Corporate PR & Brand Authority
              </Link>
            </nav>
          </div>
                    {/* Column 3: Company */}
          <div className="flex flex-col">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white">
              Company
            </h3>
            <nav className="mt-4 flex flex-col gap-3">
              <Link
                href="#about"
                className="text-sm text-slate-400 transition-colors duration-200 hover:text-[#c5a059]"
              >
                About
              </Link>
              <Link
                href="#insights"
                className="text-sm text-slate-400 transition-colors duration-200 hover:text-[#c5a059]"
              >
                Insights
              </Link>
              <Link
                href="#contact"
                className="text-sm text-slate-400 transition-colors duration-200 hover:text-[#c5a059]"
              >
                Contact
              </Link>
              <Link
                href="#"
                className="group flex items-center gap-2 text-sm text-slate-400 transition-colors duration-200 hover:text-[#c5a059]"
              >
                Careers
                <span className="rounded-full border border-ssl-gold/20 bg-ssl-gold/10 px-2 py-0.5 text-[10px] font-bold text-ssl-gold">
                  Hiring
                </span>
              </Link>
            </nav>
          </div>
                    {/* Column 4: Legal */}
          <div className="flex flex-col">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white">
              Legal
            </h3>
            <nav className="mt-4 flex flex-col gap-3">
              <Link
                href="#"
                className="text-sm text-slate-400 transition-colors duration-200 hover:text-[#c5a059]"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-sm text-slate-400 transition-colors duration-200 hover:text-[#c5a059]"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="text-sm text-slate-400 transition-colors duration-200 hover:text-[#c5a059]"
              >
                Cookie Policy
              </Link>
            </nav>
          </div>

      </div>

        {/* Bottom Bar Utility Line */}
        <div className="mt-12 border-t border-white/[0.06] pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-xs text-slate-500/80 sm:flex-row">
            <p>© 2022–2026 Signal Strait Labs. All rights reserved.</p>
            <div className="flex items-center gap-2">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-3 w-3 text-[#c5a059]/60"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>Nairobi, Kenya</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
import { BrandLogo } from "./BrandLogo";

export function Footer() {
  return (
    <footer className="footer-dark border-t border-ssl-gold/20 px-6 py-12 text-center text-xs text-slate-400">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="flex flex-col items-center gap-3 sm:items-start">
          <a
            href="/"
            className="flex shrink-0 items-center"
            aria-label="Signal Strait Labs home"
          >
            <BrandLogo className="h-10 w-auto sm:h-11" />
          </a>
          <p>
            © {new Date().getFullYear()} Signal Strait Labs. All rights
            reserved.{" "}
            <span className="text-ssl-gold">System Live.</span>
          </p>
        </div>
        <div className="flex space-x-6">
          <a
            href="https://linkedin.com/company/signal-strait-labs"
            target="_blank"
            rel="noreferrer"
            className="text-slate-300 transition-colors hover:text-ssl-gold"
          >
            LinkedIn
          </a>
          <a
            href="https://web.facebook.com/profile.php?id=61589782545004"
            target="_blank"
            rel="noreferrer"
            className="text-slate-300 transition-colors hover:text-ssl-gold"
          >
            Facebook
          </a>
        </div>
      </div>
    </footer>
  );
}

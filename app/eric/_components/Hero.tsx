import Image from "next/image";
import { credentials, hero, profile } from "../content";
import { asset } from "../_lib/utils";
import { SignalBackground } from "./SignalBackground";

const buttonBase =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ssl-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ssl-bg";

function Arrow() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M10 4v12m0 0 5-5m-5 5-5-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Hero() {
  const { portrait } = profile;
  return (
    <section aria-labelledby="eric-hero-heading" className="relative isolate overflow-hidden bg-ssl-bg">
      <SignalBackground />

      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-16 pt-12 sm:px-6 md:grid-cols-[1.2fr_0.8fr] md:gap-14 md:pb-24 md:pt-20 lg:gap-20">
        <div className="order-2 md:order-1">
          <p className="mb-6 text-xs font-semibold uppercase leading-relaxed tracking-[0.2em] text-ssl-gold">{hero.label}</p>
          <h1
            id="eric-hero-heading"
            className="text-[2.35rem] font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.6rem]"
          >
            {hero.heading}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">{hero.intro}</p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href={hero.hiringDoor.target} className={`${buttonBase} bg-ssl-gold text-ssl-bg hover:bg-[#d4b273]`}>
              {hero.hiringDoor.label}
              <Arrow />
            </a>
            <a
              href={hero.growthDoor.target}
              className={`${buttonBase} border border-white/15 bg-ssl-blue text-white hover:bg-[#2266e0]`}
            >
              {hero.growthDoor.label}
              <Arrow />
            </a>
          </div>
          <a
            href={asset(profile.cv.href)}
            download={profile.cv.downloadName}
            className="mt-5 inline-flex items-center gap-2 rounded text-sm font-semibold text-slate-200 underline decoration-ssl-gold/50 underline-offset-4 transition-colors hover:text-white hover:decoration-ssl-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ssl-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ssl-bg"
          >
            {profile.cv.label}
            <span className="text-slate-400">(PDF)</span>
          </a>
        </div>

        {portrait.show && (
          <div className="order-1 mx-auto w-full max-w-[16rem] sm:max-w-[20rem] md:order-2 md:max-w-none">
            <div className="relative">
              <div aria-hidden="true" className="eric-portrait-glow absolute -inset-10 -z-10 rounded-full opacity-90" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-ssl-gold/30 bg-ssl-bg shadow-[0_30px_80px_-30px_rgba(26,89,204,0.7)]">
                <Image
                  src={asset(portrait.src)}
                  alt={portrait.alt}
                  fill
                  preload
                  sizes="(min-width: 1024px) 400px, (min-width: 768px) 38vw, 320px"
                  className="object-cover"
                />
                <div aria-hidden="true" className="absolute inset-0 rounded-[1.75rem] ring-1 ring-inset ring-white/10" />
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="border-y border-white/[0.06] bg-white/[0.015]">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-5 sm:px-6 md:flex-row md:items-center md:gap-8">
          <p className="shrink-0 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">
            {hero.credentialsLabel}
          </p>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {credentials.map((c) => (
              <li key={c.name} className="flex items-center">
                {c.logo.show ? (
                  <Image
                    src={asset(c.logo.src)}
                    alt={c.logo.alt}
                    width={c.logo.width}
                    height={c.logo.height}
                    className="h-8 w-auto object-contain opacity-80"
                  />
                ) : (
                  <span className="font-display text-sm font-semibold tracking-tight text-slate-200">{c.name}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

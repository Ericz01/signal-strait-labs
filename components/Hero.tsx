import { ResponsivePhoto } from '@/components/ResponsivePhoto';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll';
import { BookCallButton } from '@/components/BookCallButton';

const highlights = ['Websites & web apps', 'Search & AI visibility', 'Data & sales systems'];

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[88vh] w-full items-center justify-center overflow-hidden bg-ssl-bg">
      {/* Background photo: Nairobi at night (Unsplash, imsogabriel stock) */}
      <ResponsivePhoto
        base="/images/hero-nairobi-night"
        smallWidth={720}
        largeWidth={1920}
        alt=""
        priority
        className="absolute inset-0 -z-30 h-full w-full object-cover object-[50%_75%]"
      />
      {/* Darken the sky for legible text, fade the city into the page */}
      <div aria-hidden="true" className="absolute inset-0 -z-20 bg-gradient-to-b from-ssl-bg/90 via-ssl-bg/45 to-ssl-bg" />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(60rem_32rem_at_50%_-10%,rgba(26,89,204,0.35),transparent_70%)]"
      />

      <div className="relative px-4 pb-36 pt-24 text-center sm:px-6 sm:pt-32 lg:px-8">
        <AnimateOnScroll variant="fade">
          <p className="glass-chip mx-auto mb-8 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-200">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-ssl-gold" />
            Nairobi, Kenya &middot; Since 2022
          </p>
        </AnimateOnScroll>
        <h1 className="mx-auto max-w-5xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Fast websites, better search, <br className="hidden sm:block" />
          <span className="text-gold-gradient whitespace-nowrap">more sales.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-300 sm:text-xl">
          Signal Strait Labs is a Nairobi team that builds websites, gets you found on Google and in AI search, and
          sets up the data and sales systems behind them. We measure our work in leads and revenue, not clicks.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <BookCallButton className="shadow-lg shadow-ssl-gold/20" />
          <Button
            asChild
            variant="outline"
            size="lg"
            className="glass-chip border-white/20 text-white hover:bg-white/15"
          >
            <Link href="/services">Explore Services</Link>
          </Button>
        </div>
        <ul className="mx-auto mt-12 flex max-w-3xl flex-wrap justify-center gap-3">
          {highlights.map((item) => (
            <li key={item} className="glass-chip rounded-full px-4 py-2 text-sm text-slate-200">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

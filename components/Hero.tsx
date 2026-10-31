import React from 'react';
import { Button } from '@/components/ui/Button';
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll';
import Link from 'next/link';
import { BookCallButton } from '@/components/BookCallButton';

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full bg-slate-950 overflow-hidden flex items-center justify-center">
      {/* Isolated Background Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Layer 1: Slow Drifting Animated Mesh Gradient */}
        <div 
          className="absolute inset-y-0 left-0 w-[200%] animate-background-drift opacity-60 will-change-transform motion-reduce:animate-none"
          style={{
            backgroundImage: `
              radial-gradient(at 15% 20%, rgba(245, 158, 11, 0.04) 0px, transparent 50%),
              radial-gradient(at 80% 40%, rgba(6, 182, 212, 0.03) 0px, transparent 50%),
              radial-gradient(at 40% 80%, rgba(99, 102, 241, 0.03) 0px, transparent 50%)
            `,
            backgroundSize: '100% 100%',
          }}
        />
        {/* Layer 2: Faint Geometric Grid Overlay */}
        <div className="absolute inset-0 grid-pattern-dark" />
        {/* Layer 3: Smooth Bottom Ambient Vignette Transition */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-24 sm:py-32 text-center">
        <AnimateOnScroll variant="slide-up">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl mb-6">
            Fast websites, better search, <br />
            <span className="bg-gradient-to-r from-white via-slate-200 to-amber-400 bg-clip-text text-transparent">
              more sales.
            </span>
          </h1>
        </AnimateOnScroll>
        <AnimateOnScroll variant="slide-up" style={{ animationDelay: '0.2s' }}>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto sm:text-xl leading-relaxed mt-6">
            Signal Strait Labs is a Nairobi team that builds websites, gets you
            found on Google and in AI search, and sets up the data and sales
            systems behind them. We measure our work in leads and revenue, not
            clicks.
          </p>
        </AnimateOnScroll>
        <AnimateOnScroll variant="slide-up" style={{ animationDelay: '0.4s' }}>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center">
            <BookCallButton />
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10"
            >
              <Link href="/services">Explore Services</Link>
            </Button>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
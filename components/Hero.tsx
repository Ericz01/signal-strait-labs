import React from 'react';
import { Button } from '@/components/ui/Button';
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-slate-950">
      <div className="absolute inset-0 z-0 opacity-20">
        {/* Subtle mesh grid pattern or glow */}
      </div>
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-24 sm:py-32 text-center">
        <AnimateOnScroll variant="slide-up">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl mb-6">
            Force a Clear Market Signal Through <br />
            <span className="bg-gradient-to-r from-white via-slate-200 to-amber-400 bg-clip-text text-transparent">
              Digital Chaos.
            </span>
          </h1>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto sm:text-xl leading-relaxed mt-6">
            We partner with fast-scaling African and global organizations to treat
            corporate growth as an interconnected, mathematical system. No vague
            vanity metrics. Just raw pipeline value, conversion velocity, and
            revenue.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Button variant="primary" size="lg">
              Book a Call
            </Button>
            <Button variant="outline" size="lg">
              Explore Services
            </Button>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
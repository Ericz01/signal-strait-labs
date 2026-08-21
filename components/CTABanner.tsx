'use client';

import React from 'react';
import { Button } from '@/components/ui/Button';
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll';

export default function CTABanner() {
  return (
    <section className="px-4 sm:px-6 py-12 md:py-20 bg-ssl-light-bg">
      <AnimateOnScroll variant="scale">
        <div className="glass-card-dark glass-card-dark-static mx-auto max-w-5xl rounded-3xl p-12 md:p-20 text-center">
          <h2 className="text-fluid-h2 font-extrabold tracking-tight text-white mb-6">
            Ready to Force Your Signal Through the Chaos?
          </h2>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Stop reacting to the market. Start engineering your market position with enterprise-grade growth infrastructure.
          </p>
          <Button 
            variant="primary" 
            size="lg" 
            onClick={() => {
              const element = document.getElementById('contact');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-lg px-10 py-6"
          >
            Start a Project
          </Button>
        </div>
      </AnimateOnScroll>
    </section>
  );
}

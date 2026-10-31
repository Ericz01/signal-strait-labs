import React from 'react';
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { processSteps } from '@/lib/process-data';

export default function Process() {
  return (
    <section className="mesh-light px-4 py-20 sm:px-6 md:py-28" id="process">
      <div className="mx-auto max-w-7xl">
        <AnimateOnScroll variant="slide-up">
          <SectionHeading
            align="center"
            overline="HOW WE WORK"
            title="How a Project Runs"
            description="Four steps, from finding the problem to improving the results."
            variant="light"
            className="mb-14 md:mb-16"
          />
        </AnimateOnScroll>

        <div className="relative">
          {/* Connecting line behind the cards on desktop */}
          <div
            aria-hidden="true"
            className="absolute left-[12%] right-[12%] top-12 hidden h-px bg-gradient-to-r from-transparent via-ssl-gold/40 to-transparent lg:block"
          />
          <ol className="relative grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {processSteps.map((step) => (
              <li
                key={step.number}
                className="reveal reveal-slide-up glass-card-light glass-edge glass-hover relative flex h-full flex-col items-start rounded-2xl p-7"
              >
                <div
                  aria-hidden="true"
                  className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-ssl-blue to-[#0d3a8c] font-display text-lg font-bold text-white shadow-lg shadow-ssl-blue/25"
                >
                  {step.number}
                </div>
                <h3 className="mb-3 font-display text-xl font-bold text-ssl-bg">{step.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{step.description}</p>
              </li>
          ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

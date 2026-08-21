import React from 'react';
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { processSteps } from '@/lib/process-data';

export default function Process() {
  return (
    <section className="bg-ssl-light-bg px-4 sm:px-6 py-12 md:py-20" id="process">
      <div className="mx-auto max-w-7xl">
        <AnimateOnScroll variant="slide-up">
          <SectionHeading
            align="center"
            overline="HOW WE ENGAGE"
            title="The SSL Engagement System"
            description="Our structured, data-first methodology designed to transform technical infrastructure into a high-performance growth engine."
            variant="light"
            className="mb-12 md:mb-16"
          />
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {processSteps.map((step, index) => (
            <AnimateOnScroll
              key={step.number}
              variant="slide-up"
              style={{
                animationDelay: `${index * 0.15}s`,
              }}
            >
              <div className="relative flex flex-col items-start h-full p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl font-black text-ssl-blue/20 mb-4 font-display">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-ssl-bg mb-3 font-display">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  {step.description}
                </p>
                {/* Connecting line for desktop */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 -right-5 w-10 h-px bg-ssl-gold/30" />
                )}
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

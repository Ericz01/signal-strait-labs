import React from 'react';
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card, CardContent } from '@/components/ui/Card';
import { testimonials } from '@/lib/testimonials-data';

export default function Testimonials() {
  return (
    <section className="bg-ssl-light-bg px-4 sm:px-6 py-12 md:py-20" id="testimonials">
      <div className="mx-auto max-w-7xl">
        <AnimateOnScroll variant="slide-up">
          <SectionHeading
            align="center"
            overline="WHAT PARTNERS SAY"
            title="Evidence of Market Command"
            description="How high-growth enterprises are leveraging SSL to engineer their digital infrastructure."
            variant="light"
            className="mb-12 md:mb-16"
          />
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimateOnScroll
              key={index}
              variant="slide-up"
              style={{
                animationDelay: `${index * 0.15}s`,
              }}
            >
              <Card className="h-full flex flex-col p-6 bg-white border border-slate-100 hover:border-ssl-gold/30">
                <CardContent className="p-0 flex flex-col h-full">
                  <p className="text-slate-600 leading-relaxed mb-8 flex-grow italic">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-4 mt-auto border-t border-slate-100 pt-6">
                    <div className="h-12 w-12 rounded-full bg-ssl-blue/10 flex items-center justify-center text-ssl-blue font-bold text-lg border border-ssl-blue/20">
                      {testimonial.initial}
                    </div>
                    <div>
                      <div className="font-bold text-ssl-bg">{testimonial.name}</div>
                      <div className="text-xs text-slate-500 uppercase tracking-wide">
                        {testimonial.role} @ {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

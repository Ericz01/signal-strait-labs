import React from 'react';
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card, CardContent } from '@/components/ui/Card';
import { testimonials } from '@/lib/testimonials-data';

// Placeholder entries use bracketed names like "[Client Name]".
const isPlaceholder = (value: string) => /^\[.*\]$/.test(value.trim());

export default function Testimonials() {
  // Never show invented quotes as real client feedback. The section stays
  // hidden until every entry has a real name, role and company.
  const ready =
    testimonials.length > 0 &&
    testimonials.every((t) => !isPlaceholder(t.name) && !isPlaceholder(t.role) && !isPlaceholder(t.company));
  if (!ready) return null;

  return (
    <section className="mesh-light px-4 sm:px-6 py-16 md:py-24" id="testimonials">
      <div className="mx-auto max-w-7xl">
        <AnimateOnScroll variant="slide-up">
          <SectionHeading
            align="center"
            overline="CLIENT FEEDBACK"
            title="What Clients Say"
            description="Feedback from companies we have worked with."
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
              <Card tone="light" className="h-full flex flex-col p-6">
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

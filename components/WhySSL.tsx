import React from 'react';
import Image from 'next/image';
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { IconBox } from '@/components/ui/IconBox';
import { Card } from '@/components/ui/Card';
import { differentiators } from '@/lib/differentiators-data';

export default function WhySSL() {
  return (
    <section className="relative isolate overflow-hidden bg-ssl-bg px-4 py-20 sm:px-6 md:py-28" id="why-ssl">
      {/* Soft blue/amber blur (Unsplash, Studio Pizza), darkened for contrast */}
      <Image
        src="/images/blur-blue-amber-1200.webp"
        alt=""
        fill
        sizes="100vw"
        className="-z-20 object-cover opacity-70"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-b from-ssl-bg/80 via-ssl-bg/60 to-ssl-bg/85" />

      <div className="mx-auto max-w-7xl">
        <AnimateOnScroll variant="slide-up">
          <SectionHeading
            overline="WHY WORK WITH US"
            title="Marketing and Engineering in One Team"
            description="The people who plan your strategy also build it, so nothing gets lost between agencies."
            align="center"
            variant="dark"
            className="mb-14 md:text-center"
          />
        </AnimateOnScroll>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
          {differentiators.map((differentiator) => (
            <AnimateOnScroll key={differentiator.title} variant="slide-up">
              <Card tone="dark" className="group h-full p-7">
                <IconBox
                  icon={differentiator.icon}
                  title={differentiator.title}
                  description={differentiator.description}
                  variant="gold"
                  tone="dark"
                  className="h-auto justify-start"
                />
              </Card>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

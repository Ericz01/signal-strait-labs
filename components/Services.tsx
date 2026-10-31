import React from 'react';
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ServiceCard } from '@/components/ServiceCard';
import { GlassOrbs } from '@/components/GlassOrbs';
import { services } from '@/lib/services-data';
import { cn } from '@/lib/utils';

export default function Services() {
  return (
    <section className="mesh-light relative isolate px-4 pb-20 pt-24 sm:px-6 md:pb-28 md:pt-28" id="capabilities">
      <GlassOrbs />
      <div className="mx-auto max-w-7xl">
        <AnimateOnScroll variant="slide-up">
          <SectionHeading
            align="center"
            overline="WHAT WE DO"
            title="Services"
            description="Seven services that work on their own or together, from your website to your sales pipeline."
            variant="light"
            className="mb-14 md:text-center"
          />
        </AnimateOnScroll>

        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.slug}
              service={service}
              className={cn(
                service.featured === 'primary' && 'lg:col-span-2',
                service.featured === 'secondary' && 'order-last lg:col-span-2'
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

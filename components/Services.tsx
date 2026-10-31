import React from 'react';
import Link from 'next/link';
import { ArrowRightIcon } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { IconBox } from '@/components/ui/IconBox';
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { services } from '@/lib/services-data';
import { cn } from '@/lib/utils';

export default function Services() {
  return (
    <section className="mesh-light px-4 pb-16 pt-24 sm:px-6 md:pb-24 md:pt-28" id="capabilities">
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
            <AnimateOnScroll
              key={service.slug}
              variant="slide-up"
              className={cn(
                service.featured === 'primary' && 'lg:col-span-2',
                service.featured === 'secondary' && 'order-last lg:col-span-2'
              )}
            >
              <Card tone="light" interactive className="h-full">
                <Link href={service.href} className="group flex h-full flex-col p-7">
                  <IconBox
                    icon={service.icon}
                    title={service.title}
                    description={service.description}
                    tone="light"
                    className="mb-6 h-auto justify-start"
                  />
                  {/* The whole card is the link; this is just a visual cue. */}
                  <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-ssl-blue">
                    Learn more
                    <ArrowRightIcon aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Card>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

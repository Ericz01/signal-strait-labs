import React from 'react';
import { cn } from '@/lib/utils';
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { IconBox } from '@/components/ui/IconBox';
import { differentiators } from '@/lib/differentiators-data';

export default function WhySSL() {
  return (
    <section className="mx-auto max-w-full px-4 sm:px-6 py-12 md:py-20 bg-ssl-light-bg" id="why-ssl">
      <AnimateOnScroll variant="slide-up">
        <SectionHeading
          overline="WHY WORK WITH US"
          title="Marketing and Engineering in One Team"
          description="The people who plan your strategy also build it, so nothing gets lost between agencies."
          align="center"
          variant="light"
          className="mb-16 md:text-center"
        />
      </AnimateOnScroll>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {differentiators.map((differentiator, index) => (
          <AnimateOnScroll
            key={differentiator.title}
            variant="slide-up"
            style={{
              animationDelay: `${index * 0.15}s`,
              animationDuration: '0.8s',
            }}
          >
            <IconBox
              icon={differentiator.icon}
              title={differentiator.title}
              description={differentiator.description}
              className={
                cn(
                  "[--icon-bg:theme(colors.slate.100)]",
                  "[--icon-border:theme(colors.slate.200)]",
                  "[--icon-text:theme(colors.ssl-blue)]",
                  "[--title-text:theme(colors.ssl-bg)]",
                  "[--description-text:theme(colors.slate.700)]",
                  "[&>div]:!bg-[var(--icon-bg)]",
                  "[&>div]:!border-[var(--icon-border)]",
                  "[&>div]:!text-[var(--icon-text)]",
                  "[&>h3]:!text-[var(--title-text)]",
                  "[&>p]:!text-[var(--description-text)]",
                  "hover:[&>div]:!bg-[var(--icon-text)]",
                  "hover:[&>div]:!text-white",
                  "h-full flex flex-col justify-between p-6 rounded-lg bg-white shadow-sm border border-slate-100 transform transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                )
              }
            />
          </AnimateOnScroll>
        ))}
      </div>
    </section>
  );
}

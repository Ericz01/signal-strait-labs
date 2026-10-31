import Link from 'next/link';
import { ArrowRightIcon } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { IconBox } from '@/components/ui/IconBox';
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll';
import { cn } from '@/lib/utils';
import type { Service } from '@/lib/services-data';

// One service as a light glass card. The reveal animation sits on the card
// itself (asChild) so its backdrop blur keeps working.
export function ServiceCard({ service, className }: { service: Service; className?: string }) {
  return (
    <AnimateOnScroll asChild variant="slide-up">
      <Card tone="light" interactive className={cn('group h-full', className)}>
        <Link href={service.href} className="flex h-full flex-col p-7 md:p-8">
          {/* Gold-to-blue accent line that grows on hover */}
          <span
            aria-hidden="true"
            className="absolute inset-x-8 top-0 h-[2px] origin-left scale-x-0 rounded-full bg-gradient-to-r from-ssl-gold via-ssl-gold to-ssl-blue transition-transform duration-500 group-hover:scale-x-100"
          />
          <IconBox
            icon={service.icon}
            title={service.title}
            description={service.description}
            tone="light"
            className="mb-7 h-auto justify-start gap-4"
          />
          {/* The whole card is the link; this is just a visual cue. */}
          <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-ssl-blue">
            Learn more
            <ArrowRightIcon aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
        </Link>
      </Card>
    </AnimateOnScroll>
  );
}

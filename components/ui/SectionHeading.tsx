"use client";

import * as React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  overline?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
}

const SectionHeading = React.forwardRef<HTMLDivElement, SectionHeadingProps>(
  ({ overline, title, description, align = 'left', className, ...props }, ref) => {
    const alignmentClasses = {
      left: 'text-left items-start',
      center: 'text-center items-center',
      right: 'text-right items-end',
    };

    return (
      <div
        ref={ref}
        className={cn(
          'flex flex-col gap-2',
          alignmentClasses[align],
          className
        )}
        {...props}
      >
        {overline && (
          <p className="text-xs font-semibold tracking-widest uppercase text-amber-500">
            {overline}
          </p>
        )}
        <h2 className="text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl">
          {title}
        </h2>
        {description && (
          <p
            className={cn(
              'text-base text-slate-400',
              align === 'center' && 'max-w-2xl mx-auto'
            )}
          >
            {description}
          </p>
        )}
      </div>
    );
  }
);

SectionHeading.displayName = 'SectionHeading';

export { SectionHeading };

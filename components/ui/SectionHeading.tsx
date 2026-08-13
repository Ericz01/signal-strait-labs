"use client";

import * as React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  overline?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  variant?: 'light' | 'dark';
}

const SectionHeading = React.forwardRef<HTMLDivElement, SectionHeadingProps>(
  ({ overline, title, description, align = 'left', variant = 'dark', className, ...props }, ref) => {
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
        <h2 className={cn(
          "text-3xl font-bold tracking-tight sm:text-4xl",
          variant === 'dark' ? 'text-white' : 'text-ssl-bg'
        )}>
          {title}
        </h2>
        {description && (
          <p
            className={cn(
              "text-base",
              variant === 'dark' ? 'text-slate-300' : 'text-slate-600',
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

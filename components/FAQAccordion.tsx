"use client";

import { useId, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const baseId = useId();

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="glass-card-light overflow-hidden rounded-xl border">
          <button
            type="button"
            id={`${baseId}-q${index}`}
            aria-expanded={openIndex === index}
            aria-controls={`${baseId}-a${index}`}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="flex w-full items-center justify-between p-6 text-left"
          >
            <span className="font-semibold text-ssl-bg">{item.question}</span>
            <ChevronDown
              aria-hidden="true"
              className={cn(
                "h-5 w-5 text-ssl-blue transition-transform duration-300",
                openIndex === index ? "rotate-180" : ""
              )}
            />
          </button>
          <div
            id={`${baseId}-a${index}`}
            role="region"
            aria-labelledby={`${baseId}-q${index}`}
            // Closed answers stay in the DOM for the animation, so make them inert.
            inert={openIndex !== index}
            className={cn(
              "grid transition-all duration-300 ease-in-out",
              openIndex === index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
            )}
          >
            <div className="overflow-hidden">
              <p className="px-6 pb-6 text-slate-600 leading-relaxed">{item.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// NOTE: These are placeholder testimonials pending real client feedback.
// The Testimonials section stays hidden while any name, role or company is
// still a bracketed placeholder. Replace with real, approved quotes to show it.
// They represent the core value propositions (technical depth, pipeline engineering, growth systems).

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  initial: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'SSL transformed our fragmented tech stack into a unified growth engine. The visibility we now have into pipeline velocity is exactly what we were missing.',
    name: '[Client Name]',
    role: '[Role]',
    company: '[Enterprise Client]',
    initial: 'E',
  },
  {
    quote:
      'Their approach to infrastructure isn’t just about "development". It’s about engineering systems that directly drive revenue and acquisition efficiency.',
    name: '[Client Name]',
    role: '[Role]',
    company: '[Enterprise Client]',
    initial: 'C',
  },
  {
    quote:
      'The technical depth they brought to our data architecture was immediate. They replaced our assumptions with measurable, high-performance truth metrics.',
    name: '[Client Name]',
    role: '[Role]',
    company: '[Enterprise Client]',
    initial: 'S',
  },
];

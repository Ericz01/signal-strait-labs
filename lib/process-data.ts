export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Audit',
    description: 'We review your website, marketing and data to find what is holding growth back. We go on evidence, not guesswork.',
  },
  {
    number: '02',
    title: 'Plan',
    description: 'We plan the fix as one connected piece of work covering your website, automation and marketing, instead of separate patches.',
  },
  {
    number: '03',
    title: 'Build',
    description: 'We build and launch in short, focused stages, with clear updates along the way.',
  },
  {
    number: '04',
    title: 'Improve',
    description: 'After launch we track leads and revenue and keep improving what works.',
  },
];

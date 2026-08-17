export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Signal Diagnostic',
    description: 'We audit your current stack, funnel, and data flows to identify exactly where signal is being lost — no assumptions, only measured findings.',
  },
  {
    number: '02',
    title: 'Systems Architecture',
    description: 'We design the technical and growth architecture to fix it: infrastructure, automation, and acquisition systems mapped as one connected system, not isolated fixes.',
  },
  {
    number: '03',
    title: 'Engineering Sprint',
    description: 'We build and ship — production-grade code, integrated systems, and campaigns launched in focused, accountable sprints.',
  },
  {
    number: '04',
    title: 'Optimize & Scale',
    description: 'We track pipeline value and conversion velocity post-launch, iterating the system continuously rather than declaring it finished.',
  },
];

import { BarChart2Icon, CodeIcon, LayersIcon } from 'lucide-react';

export interface Differentiator {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const differentiators: Differentiator[] = [
  {
    title: "Truth Metrics",
    description: "We replace vanity metrics like clicks and impressions with pipeline value, conversion velocity, and revenue — the numbers that actually move your business forward.",
    icon: BarChart2Icon,
  },
  {
    title: "Technical Depth",
    description: "Real engineering, not surface-level campaigns. Every strategy is backed by production-grade code, serverless architecture, and systems built to scale without breaking.",
    icon: CodeIcon,
  },
  {
    title: "Full-Stack Execution",
    description: "From market strategy to shipped code, one team owns the entire system — no handoffs, no diluted vision, no lost context along the way.",
    icon: LayersIcon,
  },
];

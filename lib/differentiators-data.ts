import { BarChart2Icon, CodeIcon, LayersIcon } from 'lucide-react';

export interface Differentiator {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const differentiators: Differentiator[] = [
  {
    title: "Results You Can Measure",
    description: "We report on leads, sales and revenue, not clicks and impressions.",
    icon: BarChart2Icon,
  },
  {
    title: "Real Technical Skill",
    description: "Our marketing is backed by solid engineering: fast websites, clean data and systems that keep working as you grow.",
    icon: CodeIcon,
  },
  {
    title: "One Team, Start to Finish",
    description: "The same team plans the work and builds it. No handoffs between agencies, and nothing lost along the way.",
    icon: LayersIcon,
  },
];

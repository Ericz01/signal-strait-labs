import { AtomIcon, CpuIcon, DollarSignIcon, GemIcon, BarChartIcon, MegaphoneIcon, UsersIcon } from 'lucide-react';

export interface Service {
  slug: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
  featured?: 'primary' | 'secondary';
}

export const services: Service[] = [
  {
    slug: 'technical-infrastructure-web-dev',
    title: 'Technical Infrastructure & Web Dev',
    description: 'Architecting lightning-fast, serverless, and edge-native corporate applications (Next.js, Tailwind, Jamstack) optimized for zero latency on African mobile networks. Integrations with Paystack, Flutterwave, and custom CRMs.',
    icon: CpuIcon,
    href: '/services/technical-infrastructure-web-dev',
    featured: 'primary',
  },
  {
    slug: 'algorithmic-search',
    title: 'Algorithmic Search (SEO/AEO/GEO)',
    description: 'Structural and semantic code optimization targeted beyond traditional engines. We position your enterprise for explicit direct citations inside modern generative AI search models like Perplexity, Gemini, and ChatGPT.',
    icon: AtomIcon,
    href: '/services/algorithmic-search',
  },
  {
    slug: 'data-systems-automation',
    title: 'Data Systems & Automation',
    description: 'We design robust data architectures, custom robust API frameworks, and advanced low-code/no-code automated pipelines that link siloed internal software tools, completely eliminating manual data overhead.',
    icon: BarChartIcon,
    href: '/services/data-systems-automation',
  },
  {
    slug: 'revenue-operations-revops',
    title: 'Revenue Operations (RevOps)',
    description: 'Custom CRM architecture pipelines (HubSpot, Zoho, Salesforce), deep multi-touch attribution dashboards, and algorithmic lead-scoring setups engineered to clear structural friction points inside your sales funnel.',
    icon: DollarSignIcon,
    href: '/services/revenue-operations-revops',
  },
  {
    slug: 'performance-marketing-abm',
    title: 'Performance Marketing & ABM',
    description: 'Full-funnel demand operations, data-intelligent programmatic media acquisitions, and hyper-focused B2B Account-Based Marketing (ABM) attack sequences designed to win high-value accounts.',
    icon: MegaphoneIcon,
    href: '/services/performance-marketing-abm',
  },
  {
    slug: 'corporate-pr-brand-authority',
    title: 'Corporate PR & Brand Authority',
    description: 'Strategic, high-level media alignments, crisis framework deployments, and highly structured technical brand architectures engineered to command long-term institutional authority.',
    icon: GemIcon,
    href: '/services/corporate-pr-brand-authority',
  },
  {
    slug: 'marketing-sales-capacity-building',
    title: 'Marketing & Sales Capacity Building',
    description: 'We train and equip your in-house marketing and sales teams with modern playbooks, tools, and workflows — building lasting internal capability, not just outsourced campaigns.',
    icon: UsersIcon,
    href: '/services/marketing-sales-capacity-building',
    featured: 'secondary',
  },
];
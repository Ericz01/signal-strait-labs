import { AtomIcon, CpuIcon, DollarSignIcon, GemIcon, BarChartIcon, MegaphoneIcon, UsersIcon } from 'lucide-react';

export interface FAQ {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;
  title: string;
  description: string;
  /** Short description for search results (under 155 characters). */
  metaDescription: string;
  problem: string;
  approach: string;
  outcomes: string;
  faqs: FAQ[];
  icon: React.ComponentType<{ className?: string }>;
  href: string;
  featured?: 'primary' | 'secondary';
}

// Title and slug only, for the contact form's service dropdown.
export function getServiceOptions() {
  return services.map(({ title, slug }) => ({ title, slug }));
}

export const services: Service[] = [
  {
    slug: 'technical-infrastructure-web-dev',
    title: 'Websites & Web Apps',
    description: 'We build fast, serverless websites and web apps (Next.js, Tailwind) that load quickly on African mobile networks, with Paystack, Flutterwave and CRM integrations.',
    metaDescription: 'Fast, edge-native websites and web apps built with Next.js for African mobile networks, with Paystack, Flutterwave and CRM integrations.',
    problem: 'Many companies serving African markets run websites built for fast Western networks. Pages load slowly on mobile data, checkout breaks with local payment methods, and every new market means another costly fix.',
    approach: 'We build with fast, serverless architecture so pages load quickly even on 3G. We connect Paystack and Flutterwave directly into checkout, alongside global payment options, so payments work wherever your customers are.',
    outcomes: 'Faster load times, fewer people leaving before checkout, and a payment system that works across African and international markets from day one.',
    faqs: [
      { question: "How fast will my site load on mobile networks in Africa?", answer: "We build for speed on slower connections from the start, not as an afterthought. Most pages load in under 2.5 seconds even on 3G." },
      { question: "Can you integrate local payment methods like M-Pesa, Paystack, or Flutterwave?", answer: "Yes. We set up local payment rails alongside international options like Stripe, so customers everywhere can pay the way they're used to." },
      { question: "Do you build on our existing site or start from scratch?", answer: "Either works. We'll review what you have first and recommend whichever gives you a better result without wasting your budget." }
    ],
    icon: CpuIcon,
    href: '/services/technical-infrastructure-web-dev',
    featured: 'primary',
  },
  {
    slug: 'algorithmic-search',
    title: 'Search & AI Visibility (SEO/AEO/GEO)',
    description: 'Technical SEO plus answer and generative engine optimization (AEO/GEO), so your business ranks in search and gets cited by AI tools like ChatGPT, Gemini and Perplexity.',
    metaDescription: 'Technical SEO, AEO and GEO that help your business rank in search and get cited by AI answer engines like ChatGPT, Gemini and Perplexity.',
    problem: 'People don\'t only search on Google anymore. They ask ChatGPT and Perplexity directly and get an answer without ever visiting a website. Most companies still only optimize for the old kind of search.',
    approach: 'We structure your content and code so both search engines and AI tools can find, understand, and quote you. That means ranking on Google and being the source AI tools point back to.',
    outcomes: 'Visibility in search results and in AI-generated answers, so you get found no matter how people search.',
    faqs: [
      { question: "What's the difference between SEO and AEO/GEO?", answer: "SEO gets you ranked on Google. AEO and GEO get you cited directly inside AI answers on tools like ChatGPT and Perplexity, where people never click through to a website at all." },
      { question: "How long until we see results?", answer: "Technical fixes can show impact within weeks. Ranking and AI citation growth usually builds over 3 to 6 months." },
      { question: "Do you write the content too, or just handle the technical side?", answer: "Both. We handle the technical structure and can also write or restructure content so it's built to rank and get cited." }
    ],
    icon: AtomIcon,
    href: '/services/algorithmic-search',
  },
  {
    slug: 'data-systems-automation',
    title: 'Data Systems & Automation',
    description: 'We design data architecture, APIs and automated pipelines that connect your internal tools, so your team stops moving data by hand.',
    metaDescription: 'Data architecture, APIs and automated pipelines that connect your internal tools and remove manual data work.',
    problem: 'Growing companies often run on tools that don\'t talk to each other. Someone ends up copying data by hand between systems, and mistakes creep in.',
    approach: 'We connect your tools with automated workflows, so data moves between systems on its own. If two platforms can share information, we make sure they do.',
    outcomes: 'Less manual work, fewer errors, and a clear, live view of what\'s happening across your business.',
    faqs: [
      { question: "What if our tools weren't built to connect with each other?", answer: "Most tools have an API or support a connector platform like Zapier or Make. We find the best route to connect them, even when it's not obvious." },
      { question: "Will this replace our current software?", answer: "No. We connect what you already use so it works together. We only recommend replacing a tool if it's genuinely holding you back." },
      { question: "How much manual work can actually be automated?", answer: "It depends on your setup. In most businesses a lot of repetitive data entry can be removed within the first month." }
    ],
    icon: BarChartIcon,
    href: '/services/data-systems-automation',
  },
  {
    slug: 'revenue-operations-revops',
    title: 'Revenue Operations (RevOps)',
    description: 'CRM setup in HubSpot, Zoho or Salesforce, multi-touch attribution dashboards and lead scoring that remove friction from your sales funnel.',
    metaDescription: 'CRM setup in HubSpot, Zoho or Salesforce, attribution dashboards and lead scoring that remove friction from your sales pipeline.',
    problem: 'Sales and marketing often work from different numbers. Leads fall through the cracks between the CRM, the ad platform, and a sales spreadsheet.',
    approach: 'We build your CRM pipeline properly in HubSpot, Zoho, or Salesforce, connect it to how leads actually enter your funnel, and score them so the right leads reach your sales team first.',
    outcomes: 'One pipeline everyone trusts, less time chasing cold leads, and a clear line from marketing spend to closed revenue.',
    faqs: [
      { question: "We already use a CRM. Why do we need RevOps?", answer: "Having a CRM isn't the same as having it set up right. Many teams use only a fraction of what their CRM can do, and leads still fall through the cracks." },
      { question: "Which CRMs do you work with?", answer: "HubSpot, Zoho, and Salesforce. If you're on something else, talk to us and we'll let you know if we can support it." },
      { question: "Can you work with our existing sales team, or do we need to change how they work?", answer: "We build around your team's actual process. Some habits may need to change, but the goal is to make their job easier, not harder." }
    ],
    icon: DollarSignIcon,
    href: '/services/revenue-operations-revops',
  },
  {
    slug: 'performance-marketing-abm',
    title: 'Performance Marketing & ABM',
    description: 'Full-funnel paid media and B2B account-based marketing (ABM), built on your data and aimed at winning high-value accounts.',
    metaDescription: 'Full-funnel paid media and B2B account-based marketing designed to win high-value accounts and grow your pipeline.',
    problem: 'A lot of ad spend goes to people who were never going to buy. That hurts more in markets where every marketing dollar has to work hard.',
    approach: 'We run full-funnel campaigns and target the specific accounts that matter most, especially for B2B. We test, measure, and adjust based on what\'s actually converting, not guesswork.',
    outcomes: 'More qualified leads for the same budget, and a clear picture of which campaigns are driving real revenue.',
    faqs: [
      { question: "Do you handle both B2B and B2C marketing?", answer: "Yes, though we specialize in B2B account-based marketing. For B2C, we focus on full-funnel campaigns built around your specific customer." },
      { question: "What platforms do you advertise on?", answer: "Google, LinkedIn, Meta, and others depending on where your audience actually spends time, not just where it's easiest to run ads." },
      { question: "How do you measure success?", answer: "By pipeline value and revenue, not clicks or impressions. We'll track and report on the numbers that actually affect your business." }
    ],
    icon: MegaphoneIcon,
    href: '/services/performance-marketing-abm',
  },
  {
    slug: 'corporate-pr-brand-authority',
    title: 'PR & Reputation',
    description: 'Media relations, crisis planning and clear brand positioning that build long-term authority for your company.',
    metaDescription: 'Media relations, crisis planning and brand positioning that build long-term authority for your company.',
    problem: 'New and growing companies often struggle to be taken seriously, especially competing against bigger, more established names, locally and internationally.',
    approach: 'We build your media presence and public communications with the same care as our technical work, so people see you as a credible authority in your industry, not just another company with a website.',
    outcomes: 'Stronger brand trust, more media mentions, and a reputation that supports every other part of your growth.',
    faqs: [
      { question: "We're a small company. Isn't PR only for big brands?", answer: "No. PR helps smaller and newer companies most, since it's how you build credibility before you have years of reputation to lean on." },
      { question: "Can you get us featured in international media?", answer: "We build relationships with relevant media, both local and international, based on where your audience and industry actually pay attention." },
      { question: "How is this different from just posting on social media?", answer: "Social media is one channel. PR builds your reputation across media coverage, industry recognition, and public communication as a whole." }
    ],
    icon: GemIcon,
    href: '/services/corporate-pr-brand-authority',
  },
  {
    slug: 'marketing-sales-capacity-building',
    title: 'Marketing & Sales Team Training',
    description: 'We train your in-house marketing and sales teams with modern playbooks, tools and workflows, so the skills stay in your business.',
    metaDescription: 'We train your in-house marketing and sales teams with practical playbooks, tools and workflows, so the skills stay in your business.',
    problem: 'Hiring an agency for every campaign gets expensive, and once the contract ends, your team is back to square one with no new skills gained.',
    approach: 'We train your in-house marketing and sales teams directly, sharing the same playbooks, tools, and workflows we use ourselves, so your team can run campaigns and manage the pipeline without needing us for every task.',
    outcomes: 'A marketing and sales team that keeps improving after we\'re done, and less long-term dependency on outside agencies.',
    faqs: [
      { question: "Are you training our whole team or just a few people?", answer: "We can do either. Some companies want their whole team trained, others prefer we start with a smaller group who then teach the rest." },
      { question: "What happens after the training ends?", answer: "You keep the playbooks, tools, and workflows we build together. Your team can keep running with them long after our engagement ends." },
      { question: "Is this instead of hiring an agency, or alongside one?", answer: "It can be either. Some clients use this to eventually stop needing an agency. Others keep working with us for bigger projects while their team handles the day to day." }
    ],
    icon: UsersIcon,
    href: '/services/marketing-sales-capacity-building',
    featured: 'secondary',
  },
];
// ---------------------------------------------------------------------------
// Content for signalstraitlabs.com/eric
//
// Every word, number, link and image on the page lives in this file. Edit
// here; the layout code never needs to change.
//
// Placeholders: any value that starts with "TODO" is hidden from visitors.
// A stat, result, link or date set to TODO simply does not render. Replace the
// TODO with the real value and it appears.
//
// Images: drop a real file into public/eric/ with the same name, then bump
// ASSET_VERSION ("1" -> "2") so browsers and Cloudflare fetch the new file.
// See public/eric/IMAGES.md for the full list.
//
// Writing rules: first person, plain English, no em dashes, no hype words.
// ---------------------------------------------------------------------------

export const ASSET_VERSION = "1";

/** A value that still needs Eric's input. Anything starting with "TODO" is hidden. */
export type Placeholder = `TODO${string}`;

export type ImageSlot = {
  /** Path inside public/, e.g. "/eric/work/railsite-1.jpg". */
  src: string;
  width: number;
  height: number;
  alt: string;
  caption?: string;
  /** How the image is framed on the page. */
  frame?: "browser" | "phone" | "plain";
  /** Turn a slot off without deleting the file. */
  show: boolean;
};

export type ExternalLink = { label: string; href: string };

// ---------------------------------------------------------------------------
// SEO and sharing
// ---------------------------------------------------------------------------

export const seo = {
  title: "Eric Nyaga | Marketing and Growth Leader, Founder of Signal Strait Labs",
  description:
    "Eric Nyaga leads marketing, sales operations and CRM at Indepth Research Institute and founded Signal Strait Labs. He sets the direction and builds the systems behind it. Based in Nairobi, Kenya.",
  path: "/eric",
  ogImage: {
    src: "/eric/og-eric.png",
    width: 1200,
    height: 630,
    alt: "Eric Nyaga, Marketing and Growth Leader, Founder of Signal Strait Labs",
  },
};

// ---------------------------------------------------------------------------
// Profile and contact details
// ---------------------------------------------------------------------------

export const profile = {
  name: "Eric Nyaga",
  givenName: "Eric",
  familyName: "Nyaga",
  location: "Nairobi, Kenya",
  jobTitle: "Central Marketing Officer",
  portrait: {
    src: "/eric/portrait.jpg",
    width: 1200,
    height: 1500,
    alt: "Portrait of Eric Nyaga",
    show: true,
  } satisfies ImageSlot,
  portraitSquare: {
    src: "/eric/portrait-square.jpg",
    width: 800,
    height: 800,
    alt: "Eric Nyaga",
    show: true,
  } satisfies ImageSlot,
  cv: {
    href: "/eric/eric-nyaga-cv.pdf",
    downloadName: "Eric-Nyaga-CV.pdf",
    label: "Download CV",
  },
  /** Public email shown on the page. Hidden while TODO. */
  email: "TODO: preferred public email, e.g. eric@signalstraitlabs.com" as string,
  /** Your CV lists linkedin.com/in/eric-nyaga22. Paste the full URL here once confirmed. */
  linkedin: "TODO: LinkedIn profile URL" as string,
  /** Other public profiles for the JSON-LD sameAs list (GitHub, X, etc.). */
  otherProfiles: [] as ExternalLink[],
  /** Cal.com or Calendly link. While TODO, "Book a call" scrolls to the contact form. */
  bookingUrl: "TODO: booking link" as string,
};

// ---------------------------------------------------------------------------
// 6.1 Hero
// ---------------------------------------------------------------------------

export const hero = {
  label: "Marketing and Growth Leader · Founder, Signal Strait Labs",
  heading: "I lead marketing, and I build the systems behind it.",
  intro:
    "I'm Eric Nyaga. I set marketing direction, run sales and CRM operations, and write the code and automations that make the plan actually work. I do this as Central Marketing Officer at Indepth Research Institute, and for clients through Signal Strait Labs, the firm I founded.",
  hiringDoor: { label: "Hiring for a senior role?", target: "#leadership" },
  growthDoor: { label: "Need growth work done?", target: "#work-with-me" },
  credentialsLabel: "Where I work",
};

/** Credential strip under the hero. Logos show only when `logo.show` is true (with permission). */
export const credentials: Array<{ name: string; logo: ImageSlot }> = [
  {
    name: "Signal Strait Labs",
    logo: { src: "/eric/logos/ssl.png", width: 400, height: 160, alt: "Signal Strait Labs", show: false },
  },
  {
    name: "IRES",
    logo: { src: "/eric/logos/ires.png", width: 400, height: 160, alt: "Indepth Research Institute", show: false },
  },
  {
    name: "Apollina Healthcare",
    logo: { src: "/eric/logos/apollina.png", width: 400, height: 160, alt: "Apollina Healthcare", show: false },
  },
  {
    name: "Oplos Marketing & Media",
    logo: { src: "/eric/logos/oplos.png", width: 400, height: 160, alt: "Oplos Marketing & Media", show: false },
  },
];

// ---------------------------------------------------------------------------
// 6.2 Proof bar. Only real numbers. A stat with a TODO value is hidden, and
// the whole bar is hidden until at least one stat is real.
// ---------------------------------------------------------------------------

export type Stat = {
  value: number | Placeholder;
  prefix?: string;
  /** e.g. "+", "%", "k+" */
  suffix?: string;
  label: string;
  /** Optional second line, hidden while TODO. */
  detail?: string;
};

export const proof = {
  heading: "In numbers",
  stats: [
    { value: "TODO: number of leads", suffix: "+", label: "leads generated through systems I built" },
    { value: "TODO: ranking or traffic change", suffix: "%", label: "change in organic traffic at IRES" },
    { value: "TODO: number of campaigns", label: "campaigns run", detail: "TODO: across N countries" },
    { value: "TODO: number of automations", label: "automations live and running daily" },
    { value: "TODO: team size", label: "people I lead or coordinate" },
  ] as Stat[],
};

// ---------------------------------------------------------------------------
// 6.3 How I think
// ---------------------------------------------------------------------------

export const principles = {
  eyebrow: "How I think",
  heading: "Four rules I work by.",
  items: [
    {
      title: "Marketing is a system, not a stream of posts.",
      body: "Every campaign should feed a pipeline that someone owns. Every lead should have a clear next step. If a post doesn't lead anywhere, it's decoration.",
    },
    {
      title: "If it isn't in the CRM, it didn't happen.",
      body: "I set up tracking before I spend money. That way we can tell which channel brought a paying client, not just which one got clicks.",
    },
    {
      title: "Speed and follow-up beat volume.",
      body: "A warm lead left for two weeks is a lost lead. I design follow-up so response speed matches how ready the buyer is.",
    },
    {
      title: "Build for the team you have.",
      body: "The best tool is the one your team will actually use. I automate the repetitive work so people can focus on the conversations that close.",
    },
  ],
};

// ---------------------------------------------------------------------------
// 6.4 Where I work now
// ---------------------------------------------------------------------------

export type Role = {
  organization: string;
  title: string;
  scope: string;
  /** Year as text. TODO hides the years. */
  start: string;
  /** "now" or a year. */
  end: string;
  /** Optional context line, clearly about the organization, not personal numbers. */
  context?: string;
};

export const roles = {
  eyebrow: "Current roles",
  heading: "Where I work now",
  items: [
    {
      organization: "Signal Strait Labs",
      title: "Founder",
      scope: "I run the firm, shape client strategy and lead the builds.",
      start: "2022",
      end: "now",
    },
    {
      organization: "Indepth Research Institute (IRES)",
      title: "Central Marketing Officer and Lead Martech",
      scope:
        "I lead marketing across the institute's sector units, run the CRM and reporting to management, and support sales execution.",
      // Your CV shows May 2025 (as Assistant Marketing Manager). Confirm the year for this title.
      start: "TODO: start year",
      end: "now",
      context: "IRES has served 200,000+ professionals across 17+ sectors and 21+ countries.",
    },
    {
      organization: "Apollina Healthcare",
      title: "Marketing Lead, part-time",
      scope: "I run marketing, search visibility and target account planning across African markets.",
      start: "TODO: start year",
      end: "now",
    },
    {
      organization: "Oplos Marketing & Media",
      title: "Marketing Lead, part-time",
      scope: "I run marketing, paid ads and search visibility for the brand.",
      start: "TODO: start year",
      end: "now",
    },
  ] as Role[],
};

// ---------------------------------------------------------------------------
// 6.5 Selected work
// ---------------------------------------------------------------------------

export type WorkTag = "strategy" | "systems" | "campaigns" | "engineering";

export const workFilters: Array<{ id: WorkTag | "all"; label: string }> = [
  { id: "all", label: "All" },
  { id: "strategy", label: "Strategy and Leadership" },
  { id: "systems", label: "Systems and Automation" },
  { id: "campaigns", label: "Campaigns" },
  { id: "engineering", label: "Engineering" },
];

/** A step in a pipeline diagram. `chips` render as small outputs under the step. */
export type DiagramStep = { label: string; detail?: string; chips?: string[] };

export type Diagram =
  | {
      type: "pipeline";
      title: string;
      steps: DiagramStep[];
      /** Side note, e.g. what happens when something fails. */
      alert?: string;
    }
  | {
      type: "handoff";
      title: string;
      lanes: Array<{ name: string; owner: string; stages: Array<{ label: string; detail?: string }> }>;
      handoff: { label: string; detail: string };
      footnotes: string[];
    };

export type Visual = { kind: "image"; image: ImageSlot } | { kind: "diagram"; diagram: Diagram };

export type CaseStudy = {
  id: string;
  title: string;
  /** One line for the card. */
  summary: string;
  /** Who it was for. If `nameConfirmed` is false, `anonymousName` is shown instead. */
  client: { name: string; anonymousName?: string; nameConfirmed: boolean };
  tags: WorkTag[];
  featured?: boolean;
  problem?: string;
  role?: string;
  decided?: string;
  built: string[];
  /** Hidden while TODO. */
  result: string;
  /** Shown with the result, even while the measured result is TODO. */
  resultNote?: string;
  visuals: Visual[];
  links?: ExternalLink[];
};

const shot = (
  file: string,
  width: number,
  height: number,
  alt: string,
  frame: ImageSlot["frame"],
  caption?: string
): ImageSlot => ({ src: `/eric/work/${file}`, width, height, alt, frame, caption, show: true });

export const work = {
  eyebrow: "Selected work",
  heading: "Real projects, start to finish.",
  intro:
    "Each one follows the same format: the problem, my role, what I decided, what I built and what happened.",
  steps: {
    problem: "The problem",
    role: "My role",
    decided: "What I decided",
    built: "What I built",
    result: "The result",
  },
  cardCta: "Read the case study",
  closeLabel: "Close case study",
  cases: [
    {
      id: "railsite",
      title: "Autonomous social media for a construction firm",
      summary:
        "A daily posting system that runs on free tools, with almost no staff time from the client.",
      client: {
        name: "RailSite Building and Civil Contractors",
        anonymousName: "A growing construction firm",
        // Set to true once RailSite agrees to be named.
        nameConfirmed: false,
      },
      tags: ["systems", "engineering"],
      featured: true,
      problem:
        "A growing construction firm with no marketing department needed to post every day across its social channels. It had a tight one-time budget and almost no staff time to give.",
      role: "Founder, Signal Strait Labs. I scoped, designed and built the whole system.",
      decided:
        "Run it on free tools so the client can keep it at zero monthly cost. Self-host the automation engine instead of paying for a platform.",
      built: [
        "An automation pipeline on self-hosted n8n, running on the Oracle Cloud free tier.",
        "One intake form for all content. The team adds a project once and the system does the rest.",
        "Captions that change every day: each opens with a useful tip, then shows the project and ends with a call to action.",
        "Daily posts at 10:00 on Facebook and Instagram, including carousels, with videos going out as Instagram Reels.",
        "Instant alert emails if a scheduled run is missed.",
        "LinkedIn company page posting, now being added. I'm also improving the client's WordPress website.",
      ],
      result: "TODO: posts published, hours saved, follower or reach change",
      visuals: [
        {
          kind: "diagram",
          diagram: {
            type: "pipeline",
            title: "How a post gets from the site to social media",
            steps: [
              { label: "Intake form", detail: "Project photos, videos and notes" },
              { label: "n8n", detail: "Self-hosted on Oracle Cloud free tier" },
              { label: "Caption generation", detail: "Tip, project, call to action" },
              { label: "Publish daily at 10:00", chips: ["Facebook", "Instagram", "Reels", "LinkedIn (next)"] },
            ],
            alert: "Missed run: alert email sent at once",
          },
        },
        {
          kind: "image",
          image: shot("railsite-1.jpg", 1600, 1000, "The n8n workflow that runs the daily posts", "browser", "The automation workflow"),
        },
        {
          kind: "image",
          image: shot("railsite-2.jpg", 1080, 1350, "A sample post published by the system", "phone", "A published post"),
        },
      ],
    },
    {
      id: "lead-framework",
      title: "Lead management framework for a training institute",
      summary: "Clear lead stages, owners and response times between marketing and sales, run in HubSpot.",
      client: { name: "Indepth Research Institute (IRES)", nameConfirmed: true },
      tags: ["strategy"],
      problem:
        "Leads moved between marketing and sales without clear definitions, owners or deadlines. Good leads went cold while each side waited on the other.",
      role: "I led the design of the framework with management and the sales units.",
      decided:
        "Define every lead stage clearly, with no overlap, and tie each stage to an owner, an action and a response time.",
      built: [
        "Lead stages in HubSpot from first contact through marketing qualified, sales accepted and sales qualified, to opportunity and deal.",
        "Clear handoffs between digital marketers, sales reps and customer success.",
        "A 7-step multi-channel follow-up sequence before any lead is recycled.",
        "Response time targets by role.",
        "Qualification using BANT and MEDDIC.",
        "A rule that every lost deal gets a review.",
      ],
      result: "TODO: change in response time, MQL to SQL rate or pipeline speed",
      resultNote: "The target I set: 40% of marketing qualified leads become sales qualified.",
      visuals: [
        {
          kind: "diagram",
          diagram: {
            type: "handoff",
            title: "Who owns a lead at each stage",
            lanes: [
              {
                name: "Marketing",
                owner: "Digital marketers",
                stages: [
                  { label: "New lead", detail: "First contact" },
                  { label: "Marketing qualified" },
                ],
              },
              {
                name: "Sales",
                owner: "Sales reps, then customer success",
                stages: [
                  { label: "Sales accepted" },
                  { label: "Sales qualified", detail: "BANT and MEDDIC" },
                  { label: "Opportunity" },
                  { label: "Deal" },
                ],
              },
            ],
            handoff: {
              label: "The handoff",
              detail: "Where leads used to go cold. Now it has an owner and a response time target.",
            },
            footnotes: ["7-step follow-up before any lead is recycled", "Every lost deal gets a review"],
          },
        },
        {
          kind: "image",
          image: shot("lead-framework-1.jpg", 1600, 1000, "HubSpot pipeline view with details blurred", "browser", "The pipeline in HubSpot"),
        },
      ],
    },
    {
      id: "course-finder",
      title: "Course Finder and Training Needs Assessment tools",
      summary: "Adaptive question tools that recommend courses, capture the lead and hand back a PDF report.",
      client: { name: "IRES, healthcare and humanitarian units", nameConfirmed: true },
      tags: ["engineering", "systems"],
      problem:
        "Visitors didn't know which course fit them, and the site had no smart way to capture high-intent leads.",
      role: "I designed and built both tools.",
      decided:
        "Give visitors something worth having in exchange for their details: a short set of questions and a report they can keep.",
      built: [
        "Interactive web tools that ask a short set of questions. Later questions change based on earlier answers.",
        "Course recommendations drawn from the catalogue, with free-text answers matched to course topics.",
        "Lead capture built into the flow.",
        "A branded PDF report the visitor can download at the end.",
      ],
      result: "TODO: leads captured, completion rate",
      visuals: [
        {
          kind: "image",
          image: shot("course-finder-1.jpg", 1600, 1000, "The Course Finder on a laptop", "browser", "Course Finder"),
        },
        {
          kind: "image",
          image: shot("course-finder-2.jpg", 1080, 1920, "The Course Finder on a phone", "phone", "On a phone"),
        },
        {
          kind: "image",
          image: shot("needs-assessment-1.jpg", 1600, 1000, "The Training Needs Assessment tool", "browser", "Training Needs Assessment"),
        },
      ],
      // Add the public URL when the tool is live, e.g. { label: "Try the Course Finder", href: "https://..." }
      links: [{ label: "Try the Course Finder", href: "TODO: live tool URL" }],
    },
    {
      id: "dashboard",
      title: "Management marketing dashboard and monthly reporting",
      summary: "One weekly view of marketing across six platforms for the CEO and management, built on free tools.",
      client: { name: "Indepth Research Institute (IRES)", nameConfirmed: true },
      tags: ["strategy"],
      problem:
        "Management needed one honest view of marketing performance across many platforms, without paying for tools.",
      role: "I designed and built the dashboard and prepare the monthly report.",
      decided: "No vanity metrics. Track the path to course registrations, and nothing that doesn't help a decision.",
      built: [
        "A free, highly visual dashboard pulling Google, Meta, LinkedIn, Google Business Profile, YouTube and TikTok data.",
        "Weekly delivery to the CEO, Marketing Director and Business Manager.",
        "A compact monthly report, presented alongside the sales unit and RevOps reports.",
      ],
      result: "TODO: result",
      visuals: [
        {
          kind: "image",
          image: shot("dashboard-1.jpg", 1600, 1000, "The management marketing dashboard with numbers blurred", "browser", "The dashboard"),
        },
      ],
    },
    {
      id: "paid-ads",
      title: "Paid advertising and attribution system",
      summary: "A reusable model for ad budgets, UTM naming and HubSpot attribution across three brands.",
      client: { name: "IRES, Apollina Healthcare, Oplos Marketing & Media", nameConfirmed: true },
      tags: ["strategy", "campaigns"],
      problem:
        "Long sales cycles and a deep website made it hard to know which ads produced paying clients. Three brands had to run under one ad account.",
      role: "I designed the model and set up the tracking.",
      decided:
        "Capture attribution inside HubSpot, where sales already works, and give each brand its own naming rules so one account stays readable.",
      built: [
        "A reusable paid ads model with formula-driven budget allocation.",
        "A UTM naming framework, with separate naming rules per brand.",
        "Attribution captured in HubSpot through UTM properties and workflows.",
        "A funding plan for Google Ads and Meta campaigns for courses that need to reach minimum class size.",
      ],
      result: "TODO: cost per lead, ROAS or registrations",
      visuals: [
        {
          kind: "image",
          image: shot("paid-ads-1.jpg", 1600, 1000, "The paid ads budget model", "browser", "The paid ads model"),
        },
      ],
    },
    {
      id: "logistics",
      title: "Lead generation for logistics companies",
      summary: "Meta lead campaigns for customs and freight clients, with every lead sent straight into follow-up.",
      client: {
        name: "Buyers Logistics and Chase Fast Logistics",
        anonymousName: "Two Nairobi logistics firms",
        // Set to true once both firms agree to be named.
        nameConfirmed: false,
      },
      tags: ["campaigns", "systems"],
      problem:
        "Two logistics firms needed more customs brokerage and freight forwarding enquiries, and a way to follow up each one quickly.",
      role: "Through Signal Strait Labs, I set up the campaigns and the lead flow.",
      decided:
        "Send every lead into tools the client's team already knows, so follow-up starts the same day without new software to learn.",
      built: [
        "Meta lead campaigns for customs brokerage and freight forwarding, targeting every country served by the port of Mombasa.",
        "Each lead flows straight into an email nurture sequence in Brevo.",
        "The same lead lands in a Google Sheet the client's team already uses.",
      ],
      result: "TODO: leads, cost per lead",
      visuals: [
        {
          kind: "diagram",
          diagram: {
            type: "pipeline",
            title: "Where each lead goes",
            steps: [
              { label: "Meta lead ad", detail: "Countries served by the port of Mombasa" },
              { label: "Lead form", detail: "Customs or freight enquiry" },
              { label: "Straight into", chips: ["Brevo email nurture", "Google Sheet for the team"] },
            ],
          },
        },
        {
          kind: "image",
          image: shot("logistics-ads-1.jpg", 1080, 1350, "A logistics lead ad creative", "phone", "Lead ad creative"),
        },
        {
          kind: "image",
          image: shot("logistics-ads-2.jpg", 1600, 1000, "Leads arriving in Brevo and the Google Sheet", "browser", "Lead flow"),
        },
      ],
    },
    {
      id: "content-plan",
      title: "Rebuilding the marketing team's content plan",
      summary: "A content plan that goes past course promotion into proof, people and expertise.",
      client: { name: "Indepth Research Institute (IRES)", nameConfirmed: true },
      tags: ["strategy"],
      problem: "Content was mostly course promotion, which gave people little reason to trust or follow the brand.",
      role: "I reworked the plan for the team of digital marketers.",
      decided: "Test the new model myself first, in the humanitarian sector, before rolling it out to every unit.",
      built: [
        "A plan that covers proof, people and expertise: certifications, venues, trainers, alumni, testimonials and industry insight.",
        "International venues promoted daily.",
        "Search optimisation for AI answer engines (AEO and GEO).",
        "A shared content bank, as the first step toward automated posting.",
      ],
      result: "TODO: result",
      visuals: [
        {
          kind: "image",
          image: shot("content-plan-1.jpg", 1600, 1000, "The content plan and shared content bank", "browser", "The content bank"),
        },
      ],
    },
    {
      id: "search",
      title: "Search visibility and authority building",
      summary: "Search work at IRES, and a prioritised tracker of 126 free authority sources for two brands.",
      client: { name: "IRES, Apollina Healthcare, Oplos Marketing & Media", nameConfirmed: true },
      tags: ["strategy", "campaigns"],
      role: "I set the search priorities and built the tracker.",
      decided: "Start with free sources, rank them by value, and track progress in one live place.",
      built: [
        "TODO: the IRES SEO work and ranking results",
        "A prioritised tracker of 126 free directories, backlink and guest posting sources for Apollina and Oplos, with live progress tracking.",
      ],
      result: "TODO: ranking or traffic change",
      visuals: [
        {
          kind: "image",
          image: shot("seo-1.jpg", 1600, 1000, "Search rankings and traffic over time", "browser", "Rankings and traffic"),
        },
      ],
    },
    {
      id: "ssl-site",
      title: "The Signal Strait Labs website",
      summary: "The firm's own site on Next.js and Cloudflare Workers, plus the tracker I use to run builds.",
      client: { name: "Signal Strait Labs", nameConfirmed: true },
      tags: ["engineering"],
      role: "I designed and built it.",
      decided: "Build on the same stack I recommend to clients, and keep it fast on a phone.",
      built: [
        "The firm's site on Next.js, TypeScript and Tailwind, running on Cloudflare Workers.",
        "A services grid with detailed interactions.",
        "An interactive project tracker used to manage builds.",
      ],
      result: "TODO: result",
      visuals: [
        {
          kind: "image",
          image: shot("ssl-site-1.jpg", 1600, 1000, "The Signal Strait Labs homepage", "browser", "signalstraitlabs.com"),
        },
      ],
      links: [{ label: "Visit the site", href: "/" }],
    },
  ] as CaseStudy[],
};

/** Smaller items, shown as a compact grid with no full case study. */
export const moreWork = {
  heading: "More work",
  items: [
    { title: "Email deliverability", body: "Automation fixes and deliverability work in Brevo." },
    { title: "Sector newsletter", body: "A monthly newsletter for the humanitarian sector." },
    { title: "Target account lists", body: "Account lists for Apollina across African markets." },
    {
      title: "AI prospecting agent",
      body: "I defined the ideal customer profile for the outside firm building it.",
    },
    { title: "Executive apparel", body: "Branded apparel for the IRES management team." },
  ],
};

/** Design and video samples. Set `show: true` on the group once the files are real. */
export const samples = {
  show: false,
  heading: "Design and video",
  design: Array.from({ length: 6 }, (_, i) => ({
    src: `/eric/samples/design-${i + 1}.jpg`,
    width: 1080,
    height: 1080,
    alt: `TODO: describe design sample ${i + 1}`,
    frame: "plain",
    show: true,
  })) as ImageSlot[],
  video: Array.from({ length: 3 }, (_, i) => ({
    thumbnail: {
      src: `/eric/samples/video-${i + 1}.jpg`,
      width: 1280,
      height: 720,
      alt: `TODO: describe video ${i + 1}`,
      frame: "plain",
      show: true,
    } as ImageSlot,
    title: `TODO: video ${i + 1} title`,
    href: `TODO: video ${i + 1} URL`,
  })),
};

// ---------------------------------------------------------------------------
// 6.6 Leadership and management
// ---------------------------------------------------------------------------

export type LeadershipPoint = {
  /** Use {value} where `value` goes. */
  text: string;
  value?: string;
  /** Shown instead of `text` while `value` is TODO. */
  textWithoutValue?: string;
};

export const leadership = {
  eyebrow: "For hiring teams",
  heading: "Leadership and management",
  intro: "What I own day to day, beyond the builds.",
  points: [
    { text: "I report to and work with the CEO and management team on marketing direction, budgets and results." },
    {
      text: "I lead and coordinate a marketing team of {value} across sector units.",
      value: "TODO: team size",
      textWithoutValue: "I lead and coordinate the marketing team across sector units.",
    },
    { text: "I'm involved in sales execution: lead handoffs, follow-up standards and deal reviews." },
    {
      text: "I manage outside vendors and partners, for example defining requirements for an AI prospecting agent built by an external firm.",
    },
    { text: "I run marketing for several brands at once, each with its own audience and budget." },
  ] as LeadershipPoint[],
};

// ---------------------------------------------------------------------------
// 6.7 Capabilities
// ---------------------------------------------------------------------------

export const capabilities = {
  eyebrow: "Capabilities",
  heading: "What I do, from plan to code.",
  groups: [
    {
      title: "Strategy and leadership",
      items: ["Marketing strategy", "Go-to-market", "Budgeting", "Reporting to management", "Team planning"],
    },
    {
      title: "Revenue operations",
      items: ["CRM design (HubSpot)", "Lead management", "Attribution", "Sales enablement", "Follow-up systems"],
    },
    {
      title: "Marketing execution",
      items: ["Paid ads (Google, Meta)", "Email marketing (Brevo)", "SEO", "Content", "Graphic design", "Video editing"],
    },
    {
      title: "Engineering and automation",
      items: [
        "Full stack web development",
        "Workflow automation (n8n, Make.com)",
        "APIs",
        "Dashboards",
        "Lead capture tools",
      ],
    },
  ],
  toolsLabel: "Tools I work with",
  // Add any other languages, frameworks and tools you want listed.
  tools: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "JavaScript",
    "HTML and CSS",
    "Cloudflare Workers",
    "n8n",
    "Make.com",
    "Meta Graph API",
    "LinkedIn API",
    "HubSpot",
    "Brevo",
    "Google Ads",
    "Meta Ads",
    "Looker Studio",
    "Google Sheets",
    "Formspree",
    "jsPDF",
    "WordPress",
    "Oracle Cloud",
  ],
};

// ---------------------------------------------------------------------------
// 6.8 Experience and education (newest first)
// ---------------------------------------------------------------------------

export type TimelineEntry = {
  kind: "role" | "education";
  title: string;
  /** Shown while `title` is TODO. */
  fallbackTitle?: string;
  organization: string;
  start: string;
  end: string;
  note?: string;
};

export const timeline = {
  eyebrow: "Background",
  heading: "Experience and education",
  entries: [
    ...roles.items.map(
      (r): TimelineEntry => ({ kind: "role", title: r.title, organization: r.organization, start: r.start, end: r.end })
    ),
    {
      kind: "education",
      title: "TODO: degree title",
      fallbackTitle: "Degree studies",
      organization: "University of the People",
      start: "2024",
      end: "2027",
      note: "In progress",
    },
    {
      kind: "education",
      title: "TODO: exact degree title",
      fallbackTitle: "Computer Science degree",
      organization: "Zetech University",
      start: "2019",
      end: "2022",
    },
    // Add earlier roles here, e.g.
    // { kind: "role", title: "...", organization: "...", start: "2023", end: "2024" },
  ] as TimelineEntry[],
};

// ---------------------------------------------------------------------------
// 6.9 Testimonials. The section is hidden until at least one real quote exists.
// Only add quotes you have permission to use.
// ---------------------------------------------------------------------------

export const testimonials = {
  heading: "What people say",
  items: [] as Array<{ quote: string; name: string; role: string }>,
};

// ---------------------------------------------------------------------------
// 6.10 Work with me
// ---------------------------------------------------------------------------

export const workWithMe = {
  eyebrow: "Work with me",
  heading: "Need this built for your business?",
  body: "Through Signal Strait Labs, I help businesses set up the marketing systems they need to grow: lead generation, automation, CRM setup, reporting and websites.",
  servicesCta: { label: "See Signal Strait Labs services", href: "/#capabilities" },
  bookCta: { label: "Book a call" },
};

// ---------------------------------------------------------------------------
// 6.11 Contact
// ---------------------------------------------------------------------------

export const contact = {
  eyebrow: "Contact",
  heading: "Get in touch",
  intro: "Hiring for a role, or have a project in mind? Send me a short note.",
  labels: { email: "Email", linkedin: "LinkedIn", location: "Location", cv: "CV" },
  form: {
    heading: "Send a message",
    name: "Name",
    email: "Email",
    message: "Message",
    messagePlaceholder: "The role or the project, in a few lines",
    submit: "Send message",
    sending: "Sending...",
    successTitle: "Message sent",
    successBody: "Thanks. I'll get back to you soon.",
    errorTitle: "Message not sent",
    /** Sent as the lead's "service interest" so the lead email shows where it came from. */
    sourceLabel: "Eric Nyaga portfolio page",
  },
};

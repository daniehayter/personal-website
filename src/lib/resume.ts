// Single source of truth for everything on the site that comes from the resume.
// Edit here; the home page and /experience both render from it.

export const profile = {
  name: "Aron Daniel",
  role: "Product Manager",
  focus: "AI-Powered SaaS · Growth, Analytics & Digital Experiences",
  location: "Coimbatore, India",
  email: "aronjan2@gmail.com",
  linkedin: "https://linkedin.com/in/aron-daniel-b818a279",
  productSince: 2019,
};

export type Metric = {
  value: string;
  label: string;
  context: string;
  company: string;
};

export const metrics: Metric[] = [
  {
    value: "+700%",
    label: "monthly platform engagement",
    context: "AI-powered Trust Center builder",
    company: "Responsive",
  },
  {
    value: "50%",
    label: "shorter UX design cycles",
    context: "AI prototypes validated with customers",
    company: "Responsive",
  },
  {
    value: "+20%",
    label: "successful product activations",
    context: "A/B-tested self-serve onboarding",
    company: "Rently",
  },
  {
    value: "$1M",
    label: "MRR portfolio supported",
    context: "B2B/B2C eCommerce storefront",
    company: "Rently",
  },
];

export type Work = {
  title: string;
  company: string;
  tags: string[];
  summary: string;
  outcome: string;
};

export const work: Work[] = [
  {
    title: "AI Trust Center builder",
    company: "Responsive",
    tags: ["Generative AI", "Onboarding"],
    summary:
      "Led continuous discovery into onboarding friction, then launched an AI-powered builder that auto-generates a personalized platform setup for each customer.",
    outcome: "+700% monthly platform engagement, faster time-to-value",
  },
  {
    title: "AI-driven prototyping loop",
    company: "Responsive",
    tags: ["Discovery", "UX"],
    summary:
      "Partnered with design to validate wireframes and AI-driven prototypes against direct customer feedback before anything reached engineering.",
    outcome: "UX design cycles cut by 50%",
  },
  {
    title: "Unblocking an enterprise deal",
    company: "Responsive",
    tags: ["API", "Enterprise"],
    summary:
      "Traced a high-value deal's blocker to a third-party DocuSign API bottleneck and defined a custom metadata-scraping solution around it.",
    outcome: "Reliable data flow restored, deal unblocked",
  },
  {
    title: "Salesforce access sync",
    company: "Responsive",
    tags: ["Integrations", "CRM"],
    summary:
      "Architected a scalable Salesforce integration with automated data logic that keeps CRM contacts and platform access in sync.",
    outcome: "Data integrity across enterprise systems",
  },
  {
    title: "Self-serve onboarding",
    company: "Rently",
    tags: ["Growth", "A/B testing"],
    summary:
      "Ran targeted A/B tests and UX optimizations across the self-service customer onboarding experience.",
    outcome: "+20% successful product activations",
  },
  {
    title: "B2B/B2C eCommerce storefront",
    company: "Rently",
    tags: ["Platform", "Architecture"],
    summary:
      "Worked with the CTO to evaluate and transition storefront architecture across Salesforce, NetSuite and Magento.",
    outcome: "Scalable storefront supporting a $1M MRR portfolio",
  },
];

export type Role = {
  company: string;
  note?: string;
  title: string;
  start: string;
  end: string;
  bullets: string[];
};

export const experience: Role[] = [
  {
    company: "Responsive",
    note: "formerly RFPIO",
    title: "Product Manager",
    start: "Feb 2023",
    end: "Present",
    bullets: [
      "Increased monthly platform engagement by 700% by leading continuous discovery and launching an AI-powered Trust Center builder that auto-generates personalized platform setups, reducing onboarding friction and accelerating time-to-value.",
      "Led continuous discovery and end-to-end execution for complex enterprise SaaS capabilities, translating customer and stakeholder needs into prioritized requirements and user stories while partnering cross-functionally with engineering and design through development and UAT.",
      "Reduced UX design cycles by 50% by partnering with design teams to validate wireframes and AI-driven prototypes using direct customer feedback before development.",
      "Unblocked a high-value enterprise deal by analyzing a third-party DocuSign API bottleneck and defining a custom metadata-scraping solution that enabled reliable data flow.",
      "Architected a scalable Salesforce integration using automated data logic to synchronize CRM contacts with platform access and maintain data integrity across enterprise systems.",
    ],
  },
  {
    company: "Rently",
    title: "Associate Product Manager",
    start: "Mar 2019",
    end: "Feb 2023",
    bullets: [
      "Increased successful product activations by 20% by executing targeted A/B tests and UX optimizations for a self-service customer onboarding experience.",
      "Improved search, discovery, and conversion metrics by redesigning property manager listing and product-detail pages, optimizing the shopping and viewing journey for end users.",
      "Applied user behavior and web analytics to identify platform vulnerabilities and customer friction, translating data-driven insights into a dedicated security solution.",
      "Architected a scalable B2B/B2C eCommerce storefront in partnership with the CTO, evaluating and transitioning architectures across Salesforce, NetSuite, and Magento while supporting a $1M MRR portfolio.",
    ],
  },
];

export const earlyCareer: Role[] = [
  {
    company: "Namecheap, Inc.",
    title: "Team Leader, Support Operations",
    start: "Jul 2016",
    end: "Feb 2019",
    bullets: [
      "Led global technical support operations for customer-facing internet products, developing practical knowledge of domain names, DNS, domain configuration, and related web infrastructure.",
      "Used customer feedback and operational data to identify recurring friction, improve internal workflows, and optimize digital assisted-service tools.",
    ],
  },
  {
    company: "Integra Global Solutions",
    title: "Technical Support Specialist",
    start: "Oct 2014",
    end: "Jun 2016",
    bullets: [
      "Resolved end-to-end technical configuration issues, translating complex software capabilities into clear, actionable solutions for global B2B clients.",
    ],
  },
  {
    company: "Sri Padmavathy Corporation",
    title: "Inventory Control",
    start: "Mar 2014",
    end: "Aug 2014",
    bullets: [],
  },
  {
    company: "365 Media",
    title: "Process Associate Trainee",
    start: "Jul 2013",
    end: "Feb 2014",
    bullets: [],
  },
];

export const competencies: { area: string; items: string[] }[] = [
  {
    area: "Product strategy & discovery",
    items: [
      "Continuous discovery",
      "Customer feedback",
      "Product requirements",
      "Roadmap prioritization",
      "User stories",
      "Agile / Scrum",
      "GTM strategy",
    ],
  },
  {
    area: "Growth & analytics",
    items: [
      "Product & behavioral analytics",
      "Activation & engagement",
      "Conversion rate optimization",
      "A/B testing",
      "Funnel optimization",
      "KPI measurement",
    ],
  },
  {
    area: "AI & technical product",
    items: [
      "LLMs",
      "Generative AI workflows",
      "API integrations",
      "SaaS infrastructure",
      "Enterprise integrations",
      "RBAC",
      "Domains & DNS",
    ],
  },
  {
    area: "UX & digital experiences",
    items: [
      "UX optimization",
      "User journey mapping",
      "Wireframing",
      "Prototyping",
      "Web experiences",
      "Customer onboarding",
      "Search & discovery",
    ],
  },
];

export const tools = ["Mixpanel", "Tableau", "SQL", "Figma", "Jira", "Confluence"];

export const credentials = [
  { title: "Certified Scrum Product Owner (CSPO)", issuer: "Scrum Alliance", year: "" },
  {
    title: "B.E. Mechanical Engineering",
    issuer: "Sri Krishna College of Technology",
    year: "2009 – 2013",
  },
];

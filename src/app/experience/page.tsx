import { Briefcase, Calendar, MapPin, GraduationCap, Award, CheckCircle, Mail } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      company: "Responsive (formerly RFPIO)",
      role: "Product Manager",
      period: "February 2023 - Present",
      location: "Coimbatore, India (SaaS)",
      bullets: [
        "Accelerated customer onboarding and increased monthly platform engagement by 700% by leading continuous discovery and launching an AI-powered Trust Center builder that auto-generates personalized platform setups.",
        "Streamlined Agile delivery for complex enterprise features (Granular Access Control) by translating stakeholder requirements into prioritized backlogs, actively facilitating sprint planning, and leading UAT with engineering pods.",
        "Unblocked a high-value enterprise deal by analyzing a third-party DocuSign API bottleneck and engineering a custom metadata-scraping solution to ensure seamless data flow.",
        "Reduced UX design cycles by 50% by partnering with cross-functional design teams to validate wireframes and AI-driven prototypes using direct customer feedback before development.",
        "Architected a scalable Salesforce integration utilizing automated data logic to sync CRM contacts with platform access, ensuring data integrity across enterprise systems."
      ]
    },
    {
      company: "Rently",
      role: "Associate Product Manager",
      period: "March 2019 - February 2023",
      location: "Coimbatore, India (SaaS - $1M MRR Portfolio)",
      bullets: [
        "Increased successful product activations by 20% by executing targeted A/B tests and UX optimizations for a self-service customer onboarding initiative.",
        "Improved search, discovery, and conversion metrics by redesigning property manager listing pages (Product Detail Pages), optimizing the shopping and viewing experience for end-users.",
        "Mitigated systemic platform security risks by analyzing user behavior and web analytics to identify vulnerabilities and launch a dedicated security infrastructure.",
        "Architected a scalable B2B/B2C eCommerce storefront by partnering directly with the CTO to evaluate and transition architectures across Salesforce, NetSuite, and Magento, supporting a $1M MRR portfolio."
      ]
    },
    {
      company: "Namecheap, Inc.",
      role: "Team Leader (Support Operations)",
      period: "July 2016 - February 2019",
      location: "Global Support Operations",
      bullets: [
        "Led global technical support operations, leveraging user feedback and operational data to improve internal workflows and optimize digital assisted-service tools."
      ]
    },
    {
      company: "Integra Global Solutions",
      role: "Technical Support Specialist",
      period: "October 2014 - June 2016",
      location: "Coimbatore, India",
      bullets: [
        "Resolved end-to-end technical configuration issues, translating complex software capabilities into clear, actionable solutions for global B2B clients."
      ]
    },
    {
      company: "Sri Padmavathy Corporation",
      role: "Inventory Control",
      period: "March 2014 - August 2014",
      location: "Coimbatore, India",
      bullets: [
        "Managed inventory, timesheets, and supplier communications to optimize day-to-day productivity."
      ]
    },
    {
      company: "365 Media",
      role: "Process Associate Trainee",
      period: "July 2013 - February 2014",
      location: "Coimbatore, India",
      bullets: [
        "Conducted web research for data mining and harvesting applications."
      ]
    }
  ];

  const skillGroups = [
    {
      category: "Product Management",
      items: [
        "Agile/Scrum",
        "Continuous Discovery",
        "Go-to-Market (GTM) Strategy",
        "A/B Testing",
        "Conversion Rate Optimization (CRO)",
        "User Stories",
        "Sprint Planning",
        "Backlog Grooming"
      ]
    },
    {
      category: "Technical & Architecture",
      items: [
        "API Integrations",
        "LLMs/Generative AI Workflows",
        "SaaS Infrastructure",
        "Granular Access Control (RBAC)"
      ]
    },
    {
      category: "Analytics & UX",
      items: [
        "Product Analytics",
        "User Journey Mapping",
        "Wireframing",
        "Data-Driven Decision Making"
      ]
    },
    {
      category: "Tools & Platforms",
      items: [
        "Jira",
        "Confluence",
        "Mixpanel",
        "Tableau",
        "SQL",
        "Figma"
      ]
    }
  ];

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      {/* Header Profile Summary */}
      <div className="border-b border-zinc-200 dark:border-zinc-800 pb-12">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
          Professional Experience
        </h1>
        <p className="mt-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-4xl leading-relaxed">
          Certified Scrum Product Owner (CSPO) and Product Manager with 7+ years of experience driving the end-to-end Product Development Life Cycle (PDLC) across high-growth SaaS applications. Proven track record of leveraging continuous discovery, AI-driven workflows, and API integrations to build scalable solutions that directly impact revenue and user engagement.
        </p>

        {/* Contact Links */}
        <div className="mt-6 flex flex-wrap gap-4 text-sm font-medium text-zinc-600 dark:text-zinc-400">
          <a href="mailto:aronjan2@gmail.com" className="flex items-center gap-1.5 hover:text-indigo-600 dark:hover:text-indigo-400">
            <Mail className="h-4 w-4" />
            aronjan2@gmail.com
          </a>
          <span className="hidden sm:inline text-zinc-300 dark:text-zinc-700">|</span>
          <a href="https://linkedin.com/in/aron-daniel-b818a279" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-indigo-600 dark:hover:text-indigo-400">
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            LinkedIn Profile
          </a>
          <span className="hidden sm:inline text-zinc-300 dark:text-zinc-700">|</span>
          <span className="flex items-center gap-1.5">
            <MapPin className="h-4 w-4" />
            Coimbatore, Tamil Nadu, India
          </span>
        </div>
      </div>

      <div className="mt-12 grid gap-12 lg:grid-cols-3">
        {/* Sidebar: Skills, Education, Certifications */}
        <div className="space-y-10 lg:col-span-1">
          {/* Certifications */}
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/40">
            <h3 className="flex items-center gap-2 font-bold text-zinc-950 dark:text-zinc-50">
              <Award className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
              Certifications
            </h3>
            <div className="mt-4 flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-indigo-500 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-sm text-zinc-900 dark:text-zinc-100">
                  Certified Scrum Product Owner (CSPO)
                </p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  Scrum Alliance
                </p>
              </div>
            </div>
          </div>

          {/* Skills Grid - Accessibility Optimized colors */}
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/40 space-y-6">
            <h3 className="font-bold text-zinc-950 dark:text-zinc-50">
              Skills & Stack
            </h3>
            {skillGroups.map((group, idx) => (
              <div key={idx} className="space-y-3">
                <h4 className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 tracking-wider uppercase">
                  {group.category}
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="inline-flex items-center px-2.5 py-1.5 rounded-md text-xs font-semibold bg-zinc-100 text-zinc-800 border border-zinc-200 dark:bg-zinc-800 dark:text-zinc-100 dark:border-zinc-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/40">
            <h3 className="flex items-center gap-2 font-bold text-zinc-950 dark:text-zinc-50">
              <GraduationCap className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
              Education
            </h3>
            <div className="mt-4">
              <h4 className="font-semibold text-sm text-zinc-900 dark:text-zinc-100">
                BE in Mechanical Engineering
              </h4>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                Sri Krishna College of Technology
              </p>
              <p className="text-xs text-zinc-400 dark:text-zinc-500 mt-0.5">
                2009 - 2013
              </p>
            </div>
          </div>
        </div>

        {/* Main Content: Timeline */}
        <div className="lg:col-span-2 space-y-12">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 flex items-center gap-2">
            <Briefcase className="h-5 w-5 text-zinc-500" />
            Career History
          </h2>

          <div className="relative pl-6 border-l border-zinc-200 dark:border-zinc-800 space-y-12">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative group">
                {/* Marker Dot */}
                <div className="absolute -left-[31px] top-1.5 h-4 w-4 rounded-full border-2 border-indigo-600 bg-zinc-50 dark:bg-black group-hover:bg-indigo-600 transition-colors" />

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-zinc-950 dark:text-zinc-50 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex flex-col sm:items-end text-xs text-zinc-500 dark:text-zinc-400 shrink-0">
                    <span className="flex items-center gap-1.5 font-medium">
                      <Calendar className="h-3.5 w-3.5" />
                      {exp.period}
                    </span>
                    <span className="mt-0.5">{exp.location}</span>
                  </div>
                </div>

                <ul className="mt-4 space-y-2.5">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li
                      key={bIdx}
                      className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed flex items-start gap-2"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-zinc-400 dark:bg-zinc-600 shrink-0 mt-2" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

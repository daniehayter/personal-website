import Link from "next/link";
import { ArrowRight, Briefcase, Code, Award, Users, Cpu, FileText } from "lucide-react";
import { getSortedPostsData } from "@/lib/blog";

export default function Home() {
  const latestPosts = getSortedPostsData().slice(0, 2);

  const stats = [
    { label: "Platform Engagement Increase", value: "700%" },
    { label: "SaaS Product Management Exp", value: "7+ Yrs" },
    { label: "Successful Onboarding Activations", value: "+20%" },
    { label: "UX Cycle Reduction via AI", value: "50%" },
  ];

  const expertises = [
    {
      title: "SaaS Product Development",
      description: "Developing and scaling B2B and B2C SaaS platforms with a focus on metrics, ARR, and user engagement.",
      icon: Briefcase,
    },
    {
      title: "Agile & SCRUM Leadership",
      description: "CSPO certified. Leading dedicated Scrum teams, managing backlogs, and keeping sprints ahead of schedule.",
      icon: Users,
    },
    {
      title: "Rapid AI Prototyping",
      description: "Leveraging LLMs and tools like Bolt & Vercel to build interactive mockups, cutting UX iteration loops in half.",
      icon: Cpu,
    },
    {
      title: "Client & UX Collaboration",
      description: "Conducting user interviews, painted door testing, and translating insights into roadmap features that solve real pain points.",
      icon: Code,
    },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32 bg-radial from-indigo-500/10 via-transparent to-transparent">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 dark:bg-indigo-950/40 dark:text-indigo-300 mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 animate-pulse" />
              Available for New Opportunities
            </span>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 leading-[1.1]">
              Building scalable SaaS products with{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-violet-500 bg-clip-text text-transparent dark:from-indigo-400 dark:to-violet-400">
                Agile precision
              </span>{" "}
              & AI velocity.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl">
              I am a certified Scrum Product Owner with 7+ years of SaaS experience,
              demonstrated history of driving platform engagement, and a passion for leveraging continuous discovery and generative AI workflows to deliver impactful software.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/experience"
                className="inline-flex items-center gap-2 px-6 h-12 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition-colors shadow-lg shadow-indigo-600/10"
              >
                View Experience
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="mailto:aronjan2@gmail.com"
                className="inline-flex items-center justify-center px-6 h-12 rounded-lg border border-zinc-200 bg-white text-zinc-900 font-medium hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100 dark:hover:bg-zinc-900 transition-colors"
              >
                Contact Aron
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950/20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col gap-2">
                <span className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 font-medium max-w-[150px]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-4xl">
              Core Expertise
            </h2>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400">
              A balanced blend of analytical planning, technical prototyping, and user-centric problem-solving.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2">
            {expertises.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="flex gap-4 p-6 rounded-2xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900/50 hover:shadow-md transition-shadow"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 dark:bg-indigo-950/50 dark:text-indigo-400">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-zinc-950 dark:text-zinc-50">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      {latestPosts.length > 0 && (
        <section className="py-20 bg-zinc-50/50 dark:bg-zinc-950/10 border-t border-zinc-200 dark:border-zinc-800">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
                  Featured Writing
                </h2>
                <p className="mt-3 text-zinc-600 dark:text-zinc-400">
                  Insights on product management, agile delivery, and emerging tech tools.
                </p>
              </div>
              <Link
                href="/blog"
                className="hidden sm:flex items-center gap-1.5 text-sm font-semibold text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
              >
                Read All Posts
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              {latestPosts.map((post) => (
                <article
                  key={post.slug}
                  className="flex flex-col p-6 rounded-2xl bg-white border border-zinc-200 dark:bg-zinc-900/40 dark:border-zinc-800/80 hover:shadow-md transition-shadow"
                >
                  <span className="text-xs font-semibold text-zinc-400 dark:text-zinc-500">
                    {post.date}
                  </span>
                  <h3 className="mt-3 text-xl font-bold text-zinc-950 dark:text-zinc-50 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed flex-grow">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-6 flex items-center gap-1 text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
                  >
                    Read article <ArrowRight className="h-3 w-3" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

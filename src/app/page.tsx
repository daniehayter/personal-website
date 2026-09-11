import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { getSortedPostsData } from "@/lib/blog";
import {
  competencies,
  credentials,
  earlyCareer,
  experience,
  metrics,
  profile,
  tools,
  work,
} from "@/lib/resume";
import { LinkedInIcon } from "@/components/Footer";

const delay = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

function SectionHead({
  index,
  title,
  children,
}: {
  index: string;
  title: ReactNode;
  children?: ReactNode;
}) {
  return (
    <div className="grid gap-6 border-t border-line pt-6 lg:grid-cols-12">
      <p className="eyebrow lg:col-span-3">{index}</p>
      <div className="lg:col-span-9">
        <h2 className="font-serif text-4xl leading-[1.05] tracking-tight sm:text-6xl">{title}</h2>
        {children && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-2">{children}</p>
        )}
      </div>
    </div>
  );
}

/** +700% means 8× the starting value; the bars are drawn to that ratio. */
function EightfoldBars() {
  return (
    <div aria-hidden="true" className="flex shrink-0 flex-col items-end gap-1.5">
      <div className="flex h-14 items-end gap-1.5">
        <span className="grow-y block w-2.5 rounded-[2px] bg-muted/45" style={{ height: "12.5%", ...delay(500) }} />
        <span className="grow-y block w-2.5 rounded-[2px] bg-accent" style={{ height: "100%", ...delay(650) }} />
      </div>
      <span className="font-mono text-[10px] text-muted">1× → 8×</span>
    </div>
  );
}

export default function Home() {
  const posts = getSortedPostsData().slice(0, 3);
  const current = experience[0];

  return (
    <>
      {/* ---------------- Hero ---------------- */}
      <section className="mx-auto w-full max-w-6xl px-5 pb-16 pt-14 sm:px-8 sm:pb-20 sm:pt-24">
        <div className="rise flex flex-wrap items-center gap-x-5 gap-y-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-3 py-1 text-xs text-ink-2">
            <span className="pulse-dot relative inline-block h-2 w-2 rounded-full bg-emerald-500" />
            Available for new opportunities
          </span>
          <span className="eyebrow">Product Manager · in product since {profile.productSince}</span>
        </div>

        <h1
          className="rise mt-8 max-w-5xl font-serif text-[clamp(2.9rem,8.4vw,7.25rem)] leading-[0.96] tracking-[-0.02em]"
          style={delay(90)}
        >
          I build AI&#8209;powered SaaS that customers actually{" "}
          <em className="text-accent-ink">use.</em>
        </h1>

        <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-end">
          <p className="rise text-lg leading-relaxed text-ink-2 sm:text-xl lg:col-span-7" style={delay(180)}>
            Product Manager at <span className="font-medium text-ink">{current.company}</span> (formerly
            RFPIO). I run continuous discovery, growth experiments and enterprise integrations end to
            end — from customer conversations through development and UAT. Most recently: an
            AI-powered Trust Center builder that grew monthly platform engagement{" "}
            <span className="font-medium text-ink">700%</span>.
          </p>
          <div className="rise flex flex-wrap gap-2.5 sm:gap-3 lg:col-span-5 lg:justify-end" style={delay(260)}>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-3 text-sm font-medium text-paper sm:px-5 transition-transform hover:-translate-y-0.5"
            >
              Get in touch <ArrowUpRight className="h-4 w-4" />
            </a>
            <Link
              href="/experience"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-4 py-3 text-sm font-medium transition-colors hover:border-ink sm:px-5"
            >
              Experience <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="inline-flex items-center rounded-full border border-line bg-card px-3.5 py-3 transition-colors hover:border-ink"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </section>

      {/* ---------------- Impact ---------------- */}
      <section aria-label="Impact" className="border-y border-line bg-card">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-line lg:grid-cols-4 lg:border-x lg:border-line">
          {metrics.map((m, i) => (
            <div key={m.label} className="rise flex flex-col bg-card p-5 sm:p-8" style={delay(320 + i * 70)}>
              <div className="flex items-end justify-between gap-3">
                <p className="font-serif text-[2.6rem] leading-none tracking-tight sm:text-6xl">{m.value}</p>
                {i === 0 && <EightfoldBars />}
              </div>
              <p className="mt-4 text-sm font-medium leading-snug">{m.label}</p>
              <p className="mt-1.5 text-xs leading-snug text-muted">
                {m.context} · {m.company}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- Selected work ---------------- */}
      <section id="work" className="mx-auto w-full max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <SectionHead index="01 — Selected work" title={<>Outcomes, <em className="text-accent-ink">not output.</em></>}>
          Problems I&rsquo;ve owned end to end: what was in the way, what I did about it, and what
          moved.
        </SectionHead>

        <ol className="mt-14 grid overflow-hidden rounded-2xl border border-line bg-line gap-px sm:grid-cols-2 lg:grid-cols-3">
          {work.map((w, i) => (
            <li key={w.title} className="group flex flex-col bg-card p-6 transition-colors hover:bg-paper sm:p-7">
              <div className="flex items-center justify-between text-xs text-muted">
                <span className="font-mono">{String(i + 1).padStart(2, "0")}</span>
                <span>{w.company}</span>
              </div>
              <h3 className="mt-8 font-serif text-[1.9rem] leading-[1.1] tracking-tight">{w.title}</h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-2">{w.summary}</p>
              <div className="mt-auto pt-8">
                <p className="flex items-start gap-2 border-t border-line pt-4 text-sm font-medium">
                  <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  {w.outcome}
                </p>
                <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Areas">
                  {w.tags.map((t) => (
                    <li key={t} className="rounded-full border border-line px-2.5 py-0.5 text-[11px] text-muted">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* ---------------- Path ---------------- */}
      <section className="mx-auto w-full max-w-6xl px-5 pb-24 sm:px-8 sm:pb-32">
        <SectionHead index="02 — Path" title={<>From the support floor <em className="text-accent-ink">to product.</em></>}>
          Before product I spent four years in technical support, most recently leading global support
          operations at Namecheap — hands-on with domains, DNS and web infrastructure, and with using
          customer feedback and operational data to find recurring friction.
        </SectionHead>

        <ol className="mt-14 lg:ml-[25%]">
          {[...experience, ...earlyCareer.slice(0, 2)].map((r, i) => (
            <li
              key={r.company}
              className="grid gap-1 border-b border-line py-5 sm:grid-cols-[11rem_1fr] sm:gap-6"
            >
              <p className="font-mono text-xs uppercase tracking-wider text-muted sm:pt-1.5">
                {r.start} – {r.end}
              </p>
              <div className="flex items-baseline justify-between gap-4">
                <p>
                  <span className="font-serif text-2xl tracking-tight">{r.company}</span>
                  {r.note && <span className="ml-2 text-sm text-muted">({r.note})</span>}
                  <span className="mt-0.5 block text-sm text-ink-2">{r.title}</span>
                </p>
                {i === 0 && (
                  <span className="shrink-0 rounded-full bg-accent-soft px-2.5 py-0.5 text-[11px] font-medium text-accent-ink">
                    Now
                  </span>
                )}
              </div>
            </li>
          ))}
          <li className="grid gap-1 py-5 sm:grid-cols-[11rem_1fr] sm:gap-6">
            <p className="font-mono text-xs uppercase tracking-wider text-muted sm:pt-1">2013 – 2014</p>
            <p className="text-sm text-ink-2">
              Earlier: {earlyCareer.slice(2).map((r) => `${r.title}, ${r.company}`).join(" · ")}
            </p>
          </li>
        </ol>
        <div className="mt-8 lg:ml-[25%]">
          <Link href="/experience" className="group inline-flex items-center gap-2 text-sm font-medium">
            <span className="link-underline pb-0.5">Full experience</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      {/* ---------------- Toolkit ---------------- */}
      <section className="border-y border-line bg-card">
        <div className="mx-auto w-full max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
          <SectionHead index="03 — Toolkit" title={<>How I <em className="text-accent-ink">work.</em></>} />

          <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:ml-[25%]">
            {competencies.map((c) => (
              <div key={c.area}>
                <h3 className="text-sm font-semibold">{c.area}</h3>
                <ul className="mt-4 space-y-2 text-[0.95rem] text-ink-2">
                  {c.items.map((it) => (
                    <li key={it} className="flex gap-3">
                      <span className="mt-[0.7em] h-px w-3 shrink-0 bg-accent" aria-hidden="true" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 grid gap-10 border-t border-line pt-10 sm:grid-cols-2 lg:ml-[25%]">
            <div>
              <p className="eyebrow">Tools</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {tools.map((t) => (
                  <li key={t} className="rounded-full border border-line bg-paper px-3 py-1 text-sm">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="eyebrow">Credentials</p>
              <ul className="mt-4 space-y-3">
                {credentials.map((c) => (
                  <li key={c.title}>
                    <p className="text-sm font-medium">{c.title}</p>
                    <p className="text-sm text-muted">
                      {c.issuer}
                      {c.year && ` · ${c.year}`}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Elsewhere ---------------- */}
      <section className="mx-auto w-full max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <SectionHead index="04 — Elsewhere" title={<>Off the <em className="text-accent-ink">roadmap.</em></>} />

        <div className="mt-14 grid gap-5 lg:grid-cols-5">
          <a
            href="/games/"
            className="group relative isolate overflow-hidden rounded-2xl bg-[#05070c] p-7 text-[#e9f2ff] sm:p-9 lg:col-span-3"
          >
            <div
              aria-hidden="true"
              className="absolute -right-24 -top-24 -z-10 h-80 w-80 rounded-full opacity-70 blur-3xl transition-opacity group-hover:opacity-100"
              style={{ background: "radial-gradient(circle, rgba(255,61,139,.55), rgba(69,240,255,.25) 55%, transparent 70%)" }}
            />
            <svg aria-hidden="true" viewBox="0 0 200 200" className="absolute -right-6 bottom-[-3.5rem] -z-10 h-64 w-64 opacity-60 transition-transform duration-700 group-hover:rotate-45">
              <circle cx="100" cy="100" r="92" fill="none" stroke="#45f0ff" strokeOpacity=".35" strokeDasharray="4 7" />
              <circle cx="100" cy="100" r="62" fill="none" stroke="#45f0ff" strokeOpacity=".5" />
              <circle cx="100" cy="100" r="30" fill="#e9f2ff" fillOpacity=".92" />
              <circle cx="108" cy="96" r="13" fill="#ff3d8b" />
              <circle cx="110" cy="95" r="5" fill="#05070c" />
            </svg>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#8fa2bd]">Side project · Browser game</p>
            <p className="mt-10 bg-gradient-to-b from-white to-[#45f0ff] bg-clip-text text-5xl font-semibold uppercase tracking-[0.08em] text-transparent sm:text-6xl">
              God Machine
            </p>
            <p className="mt-4 max-w-md leading-relaxed text-[#b8c6da]">
              An arcade bullet-hell roguelite where every card you pick grows a new organ onto your
              creature — and changes how it fights. Plays on desktop and mobile.
            </p>
            <span className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#45f0ff] px-5 py-2.5 text-sm font-semibold text-[#04121a] transition-transform group-hover:-translate-y-0.5">
              Play in browser <ArrowUpRight className="h-4 w-4" />
            </span>
          </a>

          <div className="flex flex-col rounded-2xl border border-line bg-card p-7 sm:p-9 lg:col-span-2">
            <p className="eyebrow">Writing</p>
            <ul className="mt-6 flex-1 divide-y divide-line">
              {posts.length === 0 && <li className="py-4 text-sm text-muted">New writing soon.</li>}
              {posts.map((post) => (
                <li key={post.slug}>
                  <Link href={`/blog/${post.slug}`} className="group block py-4">
                    <p className="font-serif text-2xl leading-tight tracking-tight group-hover:text-accent-ink">
                      {post.title}
                    </p>
                    {post.excerpt && <p className="mt-1 text-sm text-ink-2">{post.excerpt}</p>}
                    <time dateTime={post.date} className="mt-2 block font-mono text-xs text-muted">
                      {post.date}
                    </time>
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/blog" className="group mt-6 inline-flex items-center gap-2 text-sm font-medium">
              <span className="link-underline pb-0.5">All writing</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

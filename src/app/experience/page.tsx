import type { Metadata } from "next";
import { Fragment } from "react";
import { Mail, MapPin } from "lucide-react";
import {
  competencies,
  credentials,
  earlyCareer,
  experience,
  profile,
  tools,
  type Role,
} from "@/lib/resume";
import { LinkedInIcon } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Product Manager at Responsive (formerly RFPIO), previously Associate Product Manager at Rently. Full experience, competencies and credentials.",
};

// Pull the hard numbers out of each bullet so they read at a glance.
function emphasize(text: string) {
  return text.split(/(\d+%|\$\d+M(?: MRR)?)/g).map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-semibold text-ink">
        {part}
      </strong>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    ),
  );
}

function RoleBlock({ role, compact = false }: { role: Role; compact?: boolean }) {
  return (
    <article className="grid gap-3 border-t border-line py-10 lg:grid-cols-12 lg:gap-8">
      <p className="font-mono text-xs uppercase tracking-wider text-muted lg:col-span-3 lg:pt-2">
        {role.start} – {role.end}
      </p>
      <div className="lg:col-span-9">
        <h3 className={`font-serif tracking-tight ${compact ? "text-2xl" : "text-3xl sm:text-4xl"}`}>
          {role.company}
          {role.note && <span className="ml-2 align-middle font-sans text-sm text-muted">({role.note})</span>}
        </h3>
        <p className="mt-1 text-ink-2">{role.title}</p>
        {role.bullets.length > 0 && (
          <ul className="mt-6 space-y-4">
            {role.bullets.map((b) => (
              <li key={b} className="flex gap-4 leading-relaxed text-ink-2">
                <span className="mt-[0.8em] h-px w-4 shrink-0 bg-accent" aria-hidden="true" />
                <span>{emphasize(b)}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}

export default function Experience() {
  const [withDetail, brief] = [
    earlyCareer.filter((r) => r.bullets.length > 0),
    earlyCareer.filter((r) => r.bullets.length === 0),
  ];

  return (
    <div className="mx-auto w-full max-w-6xl px-5 pb-24 pt-14 sm:px-8 sm:pt-24">
      <header className="grid gap-8 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-8">
          <p className="eyebrow rise">Experience</p>
          <h1 className="rise mt-6 font-serif text-6xl leading-[0.95] tracking-tight sm:text-8xl">
            {profile.name}
          </h1>
          <p className="rise mt-5 text-lg text-ink-2 sm:text-xl">
            {profile.role} · {profile.focus}
          </p>
        </div>
        <ul className="rise flex flex-col gap-2 text-sm text-ink-2 lg:col-span-4 lg:items-end">
          <li>
            <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 hover:text-ink">
              <Mail className="h-4 w-4" /> {profile.email}
            </a>
          </li>
          <li>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-ink">
              <LinkedInIcon /> LinkedIn
            </a>
          </li>
          <li className="inline-flex items-center gap-2 text-muted">
            <MapPin className="h-4 w-4" /> {profile.location}
          </li>
        </ul>
      </header>

      <section className="mt-20" aria-labelledby="pro">
        <h2 id="pro" className="eyebrow mb-2">Professional experience</h2>
        {experience.map((r) => (
          <RoleBlock key={r.company} role={r} />
        ))}
      </section>

      <section className="mt-16" aria-labelledby="early">
        <h2 id="early" className="eyebrow mb-2">Early career</h2>
        {withDetail.map((r) => (
          <RoleBlock key={r.company} role={r} compact />
        ))}
        <div className="grid gap-3 border-t border-line py-8 lg:grid-cols-12 lg:gap-8">
          <p className="font-mono text-xs uppercase tracking-wider text-muted lg:col-span-3 lg:pt-1">
            {brief[brief.length - 1]?.start} – {brief[0]?.end}
          </p>
          <ul className="space-y-1 text-ink-2 lg:col-span-9">
            {brief.map((r) => (
              <li key={r.company}>
                <span className="text-ink">{r.company}</span> — {r.title}{" "}
                <span className="text-sm text-muted">
                  ({r.start} – {r.end})
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-16 border-t border-line pt-10" aria-labelledby="comp">
        <div className="grid gap-8 lg:grid-cols-12">
          <h2 id="comp" className="eyebrow lg:col-span-3 lg:pt-1">Core competencies</h2>
          <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:col-span-9">
            {competencies.map((c) => (
              <div key={c.area}>
                <h3 className="text-sm font-semibold">{c.area}</h3>
                <p className="mt-2 leading-relaxed text-ink-2">{c.items.join(" · ")}</p>
              </div>
            ))}
            <div>
              <h3 className="text-sm font-semibold">Tools</h3>
              <p className="mt-2 leading-relaxed text-ink-2">{tools.join(" · ")}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-16 border-t border-line pt-10" aria-labelledby="edu">
        <div className="grid gap-8 lg:grid-cols-12">
          <h2 id="edu" className="eyebrow lg:col-span-3 lg:pt-1">Education & certification</h2>
          <ul className="grid gap-6 sm:grid-cols-2 lg:col-span-9">
            {credentials.map((c) => (
              <li key={c.title} className="rounded-xl border border-line bg-card p-5">
                <p className="font-serif text-2xl leading-tight tracking-tight">{c.title}</p>
                <p className="mt-2 text-sm text-muted">
                  {c.issuer}
                  {c.year && ` · ${c.year}`}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

import { ArrowUpRight, MapPin } from "lucide-react";
import { profile } from "@/lib/resume";

export function LinkedInIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-line bg-paper-2/60">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <p className="eyebrow">Contact</p>
        <h2 className="mt-5 max-w-3xl font-serif text-5xl leading-[1.02] tracking-tight sm:text-7xl">
          Let&rsquo;s build something customers{" "}
          <em className="text-accent-ink">come back to.</em>
        </h2>

        <div className="mt-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <a
            href={`mailto:${profile.email}`}
            className="group inline-flex items-center gap-3 text-2xl font-medium tracking-tight sm:text-3xl"
          >
            <span className="link-underline pb-1">{profile.email}</span>
            <ArrowUpRight className="h-6 w-6 text-accent transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </a>

          <div className="flex items-center gap-5 text-sm text-ink-2">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-ink"
            >
              <LinkedInIcon />
              LinkedIn
            </a>
            <span className="inline-flex items-center gap-1.5 text-muted">
              <MapPin className="h-4 w-4" />
              {profile.location}
            </span>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-2 border-t border-line pt-6 text-xs text-muted sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} {profile.name}</p>
          <p>Product Manager · AI-powered SaaS</p>
        </div>
      </div>
    </footer>
  );
}

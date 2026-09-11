"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { profile } from "@/lib/resume";

const nav = [
  { name: "Work", href: "/#work", match: "" },
  { name: "Experience", href: "/experience", match: "/experience" },
  { name: "Writing", href: "/blog", match: "/blog" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-paper/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <Link href="/" className="group flex items-baseline gap-2">
          <span className="font-serif text-2xl leading-none tracking-tight">
            {profile.name}
          </span>
          <span className="hidden text-xs text-muted transition-colors group-hover:text-accent-ink md:inline">
            / {profile.role}
          </span>
        </Link>

        <nav aria-label="Primary" className="flex items-center gap-1 text-sm">
          {nav.map((item) => {
            const active = item.match !== "" && pathname.startsWith(item.match);
            return (
              <Link
                key={item.name}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-full px-3 py-1.5 transition-colors ${
                  item.name === "Work" ? "hidden sm:inline-block " : ""
                }${active ? "bg-ink text-paper" : "text-ink-2 hover:bg-paper-2 hover:text-ink"}`}
              >
                {item.name}
              </Link>
            );
          })}
          {/* Plain anchor: /games/ is a static app, not a Next.js route. */}
          <a
            href="/games/"
            className="rounded-full px-3 py-1.5 text-ink-2 transition-colors hover:bg-paper-2 hover:text-ink"
          >
            Play
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="ml-2 hidden rounded-full bg-accent px-4 py-1.5 font-medium text-white transition-transform hover:-translate-y-px sm:inline-block"
          >
            Get in touch
          </a>
        </nav>
      </div>
    </header>
  );
}

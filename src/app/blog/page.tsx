import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { getSortedPostsData } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Writing",
  description: "Notes on product management, continuous discovery, growth and building with AI.",
};

export default function BlogList() {
  const posts = getSortedPostsData();

  return (
    <div className="mx-auto w-full max-w-6xl px-5 pb-24 pt-14 sm:px-8 sm:pt-24">
      <header className="max-w-3xl">
        <p className="eyebrow rise">Writing</p>
        <h1 className="rise mt-6 font-serif text-6xl leading-[0.95] tracking-tight sm:text-8xl">
          Notes from <em className="text-accent-ink">the work.</em>
        </h1>
        <p className="rise mt-6 text-lg leading-relaxed text-ink-2">
          Product management, continuous discovery, growth experiments and building with generative
          AI.
        </p>
      </header>

      <ul className="mt-16 border-t border-line">
        {posts.length === 0 && <li className="py-8 text-muted">New writing soon.</li>}
        {posts.map((post) => (
          <li key={post.slug} className="border-b border-line">
            <Link
              href={`/blog/${post.slug}`}
              className="group grid gap-2 py-8 sm:grid-cols-[11rem_1fr_auto] sm:items-baseline sm:gap-8"
            >
              <time dateTime={post.date} className="font-mono text-xs uppercase tracking-wider text-muted">
                {post.date}
              </time>
              <div>
                <h2 className="font-serif text-3xl leading-tight tracking-tight transition-colors group-hover:text-accent-ink sm:text-4xl">
                  {post.title}
                </h2>
                {post.excerpt && <p className="mt-2 text-ink-2">{post.excerpt}</p>}
              </div>
              <ArrowRight className="hidden h-5 w-5 text-muted transition-transform group-hover:translate-x-1 group-hover:text-accent sm:block" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

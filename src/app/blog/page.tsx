import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { getSortedPostsData } from "@/lib/blog";

export const metadata = {
  title: "Blog | Aron Daniel",
  description: "Writing about SaaS, Product Management methodology, Agile execution, and AI prototyping.",
};

export default function BlogList() {
  const posts = getSortedPostsData();

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="max-w-3xl border-b border-zinc-200 dark:border-zinc-800 pb-12">
        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 dark:text-indigo-400">
          <BookOpen className="h-4 w-4" />
          The Product & Tech Log
        </span>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
          Articles & Insights
        </h1>
        <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
          Thoughts on agile delivery, product design loops, rapid prototyping, and utilizing generative AI to build SaaS solutions.
        </p>
      </div>

      <div className="mt-16 max-w-3xl space-y-16">
        {posts.length === 0 ? (
          <p className="text-zinc-500 dark:text-zinc-400">No blog posts found. Add markdown files in `content/blog/` to publish articles.</p>
        ) : (
          posts.map((post) => (
            <article key={post.slug} className="group relative flex flex-col items-start">
              <time
                dateTime={post.date}
                className="text-xs font-semibold text-zinc-400 dark:text-zinc-500"
              >
                {post.date}
              </time>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                <Link href={`/blog/${post.slug}`}>
                  <span className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-900/40 sm:-inset-x-6 sm:rounded-2xl" />
                  <span className="relative z-10">{post.title}</span>
                </Link>
              </h2>
              <p className="relative z-10 mt-3 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {post.excerpt}
              </p>
              <div className="relative z-10 mt-4 flex items-center gap-1 text-sm font-semibold text-indigo-600 dark:text-indigo-400 group-hover:underline">
                Read article
                <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
              </div>
            </article>
          ))
        )}
      </div>
    </div>
  );
}

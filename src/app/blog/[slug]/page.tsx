import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { getPostData, getSortedPostsData } from "@/lib/blog";

export async function generateStaticParams() {
  return getSortedPostsData().map((post) => ({ slug: post.slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = await getPostData((await params).slug);
  return post ? { title: post.title, description: post.excerpt } : {};
}

export default async function BlogPost({ params }: PageProps) {
  const post = await getPostData((await params).slug);
  if (!post) notFound();

  return (
    <article className="mx-auto w-full max-w-3xl px-5 pb-24 pt-14 sm:px-8 sm:pt-20">
      <Link
        href="/blog"
        className="group inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-ink"
      >
        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
        All writing
      </Link>

      <header className="mt-10 border-b border-line pb-10">
        <h1 className="font-serif text-5xl leading-[1.02] tracking-tight sm:text-7xl">{post.title}</h1>
        <p className="mt-6 font-mono text-xs uppercase tracking-wider text-muted">
          <time dateTime={post.date}>{post.date}</time> · {post.author}
        </p>
      </header>

      <div className="prose mt-10" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
    </article>
  );
}

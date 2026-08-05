"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { blogPosts } from "@/data/portfolio";
import CardShell from "@/components/card-shell";
import SectionLabel from "@/components/section-label";
import { useTheme } from "@/context/theme-context";

export default function BlogsPageContent() {
  const { theme } = useTheme();

  return (
    <main className="mx-auto w-full max-w-4xl px-4 pb-10 pt-7 sm:px-6 lg:px-8 lg:pt-10">
      <Link
        href="/"
        className="mb-6 inline-flex items-center gap-2 text-sm text-zinc-500 transition hover:text-zinc-900 dark:hover:text-zinc-100"
      >
        <ArrowLeft size={16} />
        Back home
      </Link>

      <CardShell theme={theme} className="border-t-0 pt-0">
        <SectionLabel theme={theme}>Blog</SectionLabel>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-100">
          Writing & notes
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-600 sm:text-base dark:text-zinc-400">
          I occasionally write about building products, engineering systems, and
          the lessons I&apos;m learning along the way.
        </p>

        <div className="mt-8 border-t border-zinc-200 dark:border-zinc-800">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blogs/${post.slug}`}
              className="group flex items-start justify-between gap-5 border-b border-zinc-200 py-5 transition-colors hover:bg-zinc-100/70 dark:border-zinc-800 dark:hover:bg-white/[0.03] sm:px-2"
            >
              <div className="min-w-0">
                <h2 className="text-base font-medium text-zinc-900 transition-colors group-hover:text-violet-600 sm:text-lg dark:text-zinc-100 dark:group-hover:text-violet-300">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
                  {post.blurb}
                </p>
                <p className="mt-3 font-mono text-[11px] text-zinc-500 dark:text-zinc-400">
                  {post.tags.join(" · ")} · {post.readTime}
                </p>
              </div>
              <p className="shrink-0 pt-1 font-mono text-[11px] text-zinc-500 dark:text-zinc-400">
                {post.date}
              </p>
            </Link>
          ))}
        </div>
      </CardShell>
    </main>
  );
}

"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { blogPosts } from "@/data/portfolio";
import CardShell from "@/components/card-shell";
import SectionLabel from "@/components/section-label";
import { useTheme } from "@/context/theme-context";

export default function BlogsPageContent() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <main className="mx-auto w-full max-w-4xl px-4 pb-10 pt-7 sm:px-6 lg:px-8 lg:pt-10">
      <Link
        href="/"
        className="mb-6 inline-flex items-center gap-2 text-sm text-zinc-500 transition hover:text-zinc-900 dark:hover:text-zinc-100"
      >
        <ArrowLeft size={16} />
        Back home
      </Link>

      <CardShell theme={theme}>
        <SectionLabel theme={theme}>Blog</SectionLabel>
        <h1 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-100">
          Writing on engineering, design & ML
        </h1>
        <p
          className={`mt-3 text-sm leading-7 sm:text-base ${isDark ? "text-zinc-400" : "text-zinc-600"}`}
        >
          Notes from building products, learning machine learning, and surviving
          hackathon sprints.
        </p>

        <div className="mt-6 space-y-4">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blogs/${post.slug}`}
              className="group block rounded-2xl border border-zinc-200 bg-zinc-50/90 p-5 transition duration-300 hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-zinc-950/35"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs text-zinc-500">
                    {post.date} · {post.readTime}
                  </p>
                  <h2 className="mt-1 text-lg font-semibold text-zinc-900 group-hover:text-violet-600 dark:text-zinc-100 dark:group-hover:text-violet-400">
                    {post.title}
                  </h2>
                  <p
                    className={`mt-2 text-sm leading-7 ${isDark ? "text-zinc-400" : "text-zinc-600"}`}
                  >
                    {post.blurb}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-violet-100 px-2 py-0.5 text-[10px] font-medium text-violet-700 dark:bg-violet-500/15 dark:text-violet-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <ArrowUpRight
                  size={18}
                  className="shrink-0 text-zinc-400 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-violet-500"
                />
              </div>
            </Link>
          ))}
        </div>
      </CardShell>
    </main>
  );
}

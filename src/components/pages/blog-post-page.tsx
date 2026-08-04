"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { blogPosts, type BlogPost } from "@/data/portfolio";
import CardShell from "@/components/card-shell";
import { useTheme } from "@/context/theme-context";

export default function BlogPostContent({ post }: Readonly<{ post: BlogPost }>) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <main className="mx-auto w-full max-w-3xl px-4 pb-10 pt-7 sm:px-6 lg:px-8 lg:pt-10">
      <Link
        href="/blogs"
        className="mb-6 inline-flex items-center gap-2 text-sm text-zinc-500 transition hover:text-zinc-900 dark:hover:text-zinc-100"
      >
        <ArrowLeft size={16} />
        All posts
      </Link>

      <article>
        <p className="text-xs text-zinc-500">
          {post.date} · {post.readTime}
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-100">
          {post.title}
        </h1>
        <div className="mt-4 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-violet-100 px-2.5 py-0.5 text-xs font-medium text-violet-700 dark:bg-violet-500/15 dark:text-violet-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <CardShell theme={theme} className="mt-8">
          <div className="space-y-5">
            {post.content.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className={`text-sm leading-8 sm:text-base ${isDark ? "text-zinc-300" : "text-zinc-700"}`}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </CardShell>
      </article>

      <div className="mt-8">
        <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
          More to read
        </p>
        <div className="mt-3 space-y-2">
          {blogPosts
            .filter((item) => item.slug !== post.slug)
            .slice(0, 2)
            .map((item) => (
              <Link
                key={item.slug}
                href={`/blogs/${item.slug}`}
                className="group flex items-center justify-between rounded-xl border border-zinc-200 px-4 py-3 text-sm transition hover:-translate-y-0.5 dark:border-white/10"
              >
                {item.title}
                <ArrowUpRight
                  size={14}
                  className="text-zinc-400 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            ))}
        </div>
      </div>
    </main>
  );
}

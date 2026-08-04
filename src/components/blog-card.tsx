import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { blogPosts } from "@/data/portfolio";
import CardShell from "@/components/card-shell";
import SectionLabel from "@/components/section-label";

export default function BlogCard({
  theme,
}: Readonly<{ theme: "light" | "dark" }>) {
  const isDark = theme === "dark";

  return (
    <CardShell id="blog" theme={theme}>
      <div className="flex items-center justify-between gap-4">
        <SectionLabel theme={theme}>Blog</SectionLabel>
        <Link
          href="/blogs"
          className="text-xs font-medium text-violet-600 transition hover:text-violet-500 dark:text-violet-400"
        >
          All posts →
        </Link>
      </div>

      <div className="mt-3 space-y-3">
        {blogPosts.slice(0, 2).map((post) => (
          <Link
            key={post.slug}
            href={`/blogs/${post.slug}`}
            className="group block rounded-2xl border border-zinc-200 bg-zinc-50/90 p-4 transition duration-300 hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-zinc-950/35 sm:p-5"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs text-zinc-500">
                  {post.date} · {post.readTime}
                </p>
                <h3 className="mt-1 text-sm font-semibold tracking-tight text-zinc-900 group-hover:text-violet-600 sm:text-base dark:text-zinc-100 dark:group-hover:text-violet-400">
                  {post.title}
                </h3>
              </div>
              <ArrowUpRight
                size={16}
                className="shrink-0 text-zinc-400 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-violet-500"
              />
            </div>
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
          </Link>
        ))}
      </div>
    </CardShell>
  );
}

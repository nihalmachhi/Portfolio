import Link from "next/link";
import { blogPosts } from "@/data/portfolio";
import CardShell from "@/components/card-shell";
import SectionLabel from "@/components/section-label";

export default function BlogCard({
  theme,
}: Readonly<{ theme: "light" | "dark" }>) {
  return (
    <CardShell id="blog" theme={theme}>
      <div className="flex items-center justify-between gap-4">
        <SectionLabel theme={theme}>Blog</SectionLabel>
        <Link
          href="/blogs"
          className="font-mono text-xs text-zinc-500 transition hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white"
        >
          View archive →
        </Link>
      </div>

      <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-600 dark:text-zinc-400">
        Notes on engineering, design, and learning in public.
      </p>

      <div className="mt-5 border-t border-zinc-200 dark:border-zinc-800">
        {blogPosts.slice(0, 3).map((post) => (
          <Link
            key={post.slug}
            href={`/blogs/${post.slug}`}
            className="group flex items-start justify-between gap-4 border-b border-zinc-200 py-4 transition-colors hover:bg-zinc-100/70 dark:border-zinc-800 dark:hover:bg-white/[0.03] sm:items-center sm:px-2"
          >
            <div className="min-w-0">
              <h3 className="text-sm font-medium text-zinc-900 transition-colors group-hover:text-violet-600 sm:text-base dark:text-zinc-100 dark:group-hover:text-violet-300">
                {post.title}
              </h3>
              <p className="mt-1 line-clamp-1 text-sm text-zinc-500 dark:text-zinc-400">
                {post.blurb}
              </p>
            </div>
            <p className="shrink-0 pt-0.5 font-mono text-[11px] text-zinc-500 dark:text-zinc-400">
              {post.date}
            </p>
          </Link>
        ))}
      </div>
    </CardShell>
  );
}

import Link from "next/link";
import { heroProfile, socialLinks } from "@/data/portfolio";

export default function Footer({
  theme,
}: Readonly<{ theme: "light" | "dark" }>) {
  const isDark = theme === "dark";

  return (
    <footer
      className={`border-t px-4 py-8 sm:px-6 lg:px-8 ${isDark ? "border-white/10 bg-zinc-950" : "border-zinc-200 bg-zinc-50"}`}
    >
      <div className="mx-auto flex max-w-4xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
            {heroProfile.name}
          </p>
          <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
            Built with Next.js · {new Date().getFullYear()}
          </p>
        </div>

        <div className="flex flex-wrap gap-x-4 gap-y-2">
          {socialLinks.slice(0, 4).map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-zinc-500 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

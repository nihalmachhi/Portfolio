import Link from "next/link";
import { Sparkles } from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full px-4 py-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-zinc-200 bg-white/70 px-4 py-3 shadow-sm backdrop-blur sm:px-6 dark:border-white/10 dark:bg-zinc-900/70">
        <Link
          href="#home"
          className="flex items-center gap-2 text-sm font-semibold tracking-[0.25em] text-zinc-700 uppercase dark:text-zinc-200"
        >
          <Sparkles size={16} /> Nihal
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-zinc-600 md:flex dark:text-zinc-300">
          <Link
            href="#home"
            className="transition hover:text-black dark:hover:text-white"
          >
            Home
          </Link>
          <Link
            href="#blog"
            className="transition hover:text-black dark:hover:text-white"
          >
            Blog
          </Link>
          <Link
            href="#inspiration"
            className="transition hover:text-black dark:hover:text-white"
          >
            Inspiration
          </Link>
          <Link
            href="#connect"
            className="transition hover:text-black dark:hover:text-white"
          >
            Connect
          </Link>
        </nav>

        <Link
          href="#connect"
          className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100 dark:border-white/10 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700"
        >
          Let&apos;s talk
        </Link>
      </div>
    </header>
  );
}

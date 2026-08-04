import Link from "next/link";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { heroProfile, socialLinks } from "@/data/portfolio";
import CardShell from "@/components/card-shell";
import SectionLabel from "@/components/section-label";

export default function ConnectSection({
  theme,
}: Readonly<{ theme: "light" | "dark" }>) {
  const isDark = theme === "dark";

  return (
    <CardShell id="connect" theme={theme}>
      <SectionLabel theme={theme}>Let&apos;s Connect</SectionLabel>
      <h2 className="mt-2 text-lg font-semibold tracking-tight text-zinc-900 sm:text-xl dark:text-zinc-100">
        Reach out or follow along
      </h2>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <a
          href={`mailto:${heroProfile.email}`}
          className={`group flex items-center gap-3 rounded-2xl border p-4 transition duration-300 hover:-translate-y-0.5 hover:shadow-md ${
            isDark
              ? "border-white/10 bg-zinc-950/35 hover:border-violet-400/30"
              : "border-zinc-200 bg-zinc-50 hover:border-violet-200"
          }`}
        >
          <Mail size={18} className="text-violet-500" />
          <div className="min-w-0">
            <p className="text-xs uppercase tracking-wide text-zinc-500">Email</p>
            <p className="truncate text-sm font-medium">{heroProfile.email}</p>
          </div>
        </a>
        <a
          href={`tel:${heroProfile.phone.replace(/\s/g, "")}`}
          className={`group flex items-center gap-3 rounded-2xl border p-4 transition duration-300 hover:-translate-y-0.5 hover:shadow-md ${
            isDark
              ? "border-white/10 bg-zinc-950/35 hover:border-violet-400/30"
              : "border-zinc-200 bg-zinc-50 hover:border-violet-200"
          }`}
        >
          <Phone size={18} className="text-violet-500" />
          <div>
            <p className="text-xs uppercase tracking-wide text-zinc-500">Phone</p>
            <p className="text-sm font-medium">{heroProfile.phone}</p>
          </div>
        </a>
      </div>

      <div className="mt-4 grid gap-2 sm:grid-cols-2">
        {socialLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className={`group flex items-center justify-between rounded-xl border px-3 py-2.5 text-sm transition duration-300 hover:-translate-y-0.5 ${
              isDark
                ? "border-white/10 bg-zinc-950/35 text-zinc-300 hover:border-violet-400/30"
                : "border-zinc-200 bg-zinc-50 text-zinc-700 hover:border-violet-200"
            }`}
          >
            <span>
              <span className="font-medium">{link.label}</span>
              <span className="ml-2 text-zinc-500">@{link.handle}</span>
            </span>
            <ArrowUpRight
              size={14}
              className="opacity-50 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
            />
          </Link>
        ))}
      </div>
    </CardShell>
  );
}

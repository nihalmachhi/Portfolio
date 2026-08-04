import Link from "next/link";
import { hackathons } from "@/data/portfolio";
import CardShell from "@/components/card-shell";
import SectionLabel from "@/components/section-label";

export default function HackathonsCard({
  theme,
}: Readonly<{ theme: "light" | "dark" }>) {
  const isDark = theme === "dark";

  return (
    <CardShell id="hackathons" theme={theme}>
      <div className="flex items-center justify-between gap-4">
        <SectionLabel theme={theme}>Hackathons</SectionLabel>
        <Link
          href="/hackathons"
          className="text-xs font-medium text-violet-600 transition hover:text-violet-500 dark:text-violet-400"
        >
          View gallery →
        </Link>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {hackathons.map((item) => (
          <div
            key={item.name}
            className={`inline-flex flex-col rounded-2xl border px-3 py-2 transition duration-200 hover:-translate-y-0.5 hover:shadow-sm ${
              isDark
                ? "border-white/10 bg-zinc-950/35 text-zinc-300"
                : "border-zinc-200 bg-zinc-50 text-zinc-700"
            }`}
          >
            <span className="text-sm font-medium">{item.name}</span>
            <span className="text-xs text-zinc-500">{item.org}</span>
            {item.note ? (
              <span className="mt-1 text-[10px] text-violet-600 dark:text-violet-400">
                {item.note}
              </span>
            ) : null}
          </div>
        ))}
      </div>
    </CardShell>
  );
}

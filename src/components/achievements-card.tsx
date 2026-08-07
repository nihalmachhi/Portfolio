import { achievements, certifications } from "@/data/portfolio";
import CardShell from "@/components/card-shell";
import SectionLabel from "@/components/section-label";

export default function AchievementsCard({
  theme,
}: Readonly<{ theme: "light" | "dark" }>) {
  const isDark = theme === "dark";

  return (
    <CardShell id="achievements" theme={theme}>
      <SectionLabel theme={theme}>Achievements</SectionLabel>
      <ul className="mt-3 space-y-2">
        {achievements.map((item) => (
          <li
            key={item}
            className={`text-sm leading-7 sm:text-base ${isDark ? "text-zinc-400" : "text-zinc-600"}`}
          >
            • {item}
          </li>
        ))}
      </ul>

      <div className="mt-5">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
          Certifications
        </p>
        <div className="mt-2 flex flex-wrap gap-2">
          {certifications.map((cert) => (
            <a
              key={cert.name}
              href={cert.href}
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-sm ${
                isDark
                  ? "border-white/10 bg-zinc-950/35 text-zinc-300 hover:border-emerald-400/30"
                  : "border-zinc-200 bg-zinc-50 text-zinc-700 hover:border-emerald-200"
              }`}
            >
              {cert.name}
              <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-medium text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300">
                {cert.status}
              </span>
            </a>
          ))}
        </div>
      </div>
    </CardShell>
  );
}

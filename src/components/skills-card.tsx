import { skillGroups } from "@/data/portfolio";
import CardShell from "@/components/card-shell";
import SectionLabel from "@/components/section-label";

export default function SkillsCard({
  theme,
}: Readonly<{ theme: "light" | "dark" }>) {
  const isDark = theme === "dark";

  return (
    <CardShell theme={theme}>
      <SectionLabel theme={theme}>Skills</SectionLabel>
      <div className="mt-3 space-y-4">
        {skillGroups.map((group) => (
          <div key={group.label}>
            <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
              {group.label}
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className={`rounded-full border px-2.5 py-1 text-xs sm:text-sm ${
                    isDark
                      ? "border-white/10 bg-zinc-950/35 text-zinc-300"
                      : "border-zinc-200 bg-zinc-50 text-zinc-700"
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </CardShell>
  );
}

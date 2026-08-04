export default function SectionLabel({
  theme,
  children,
}: Readonly<{ theme: "light" | "dark"; children: React.ReactNode }>) {
  return (
    <p
      className={`text-xs font-semibold uppercase tracking-[0.3em] ${theme === "dark" ? "text-zinc-400" : "text-zinc-500"}`}
    >
      {children}
    </p>
  );
}

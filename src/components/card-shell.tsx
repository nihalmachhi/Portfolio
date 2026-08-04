import { cn } from "@/lib/utils";

export default function CardShell({
  id,
  theme,
  children,
  className,
}: Readonly<{
  id?: string;
  theme: "light" | "dark";
  children: React.ReactNode;
  className?: string;
}>) {
  const isDark = theme === "dark";

  return (
    <section
      id={id}
      className={cn(
        "rounded-[1.25rem] border p-4 shadow-sm backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-lg sm:p-5",
        isDark
          ? "border-white/10 bg-zinc-900/80"
          : "border-zinc-200 bg-white/90",
        className,
      )}
    >
      {children}
    </section>
  );
}

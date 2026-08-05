import { Quote } from "lucide-react";

export default function Footer({ theme }: Readonly<{ theme: "light" | "dark" }>) {
  const dark = theme === "dark";
  return <footer className={`mt-12 border-t bg-transparent ${dark ? "border-zinc-800 text-zinc-400" : "border-zinc-200 text-zinc-600"}`}>
    <div className="mx-auto max-w-4xl px-4 py-12 text-center sm:px-6">
      <Quote className={`mx-auto h-7 w-7 ${dark ? "text-zinc-700" : "text-zinc-300"}`} fill="currentColor" />
      <p className={`mx-auto mt-5 max-w-xl text-2xl italic leading-relaxed sm:text-3xl ${dark ? "text-zinc-200" : "text-zinc-800"}`}>“As long as I&apos;m alive, there are infinite chances!”</p>
      <div className="mx-auto mt-6 flex max-w-[280px] items-center gap-3"><span className={`h-px flex-1 ${dark ? "bg-zinc-800" : "bg-zinc-200"}`} /><span className="font-mono text-[10px] font-semibold uppercase tracking-[0.28em] text-zinc-500">Monkey D. Luffy</span><span className={`h-px flex-1 ${dark ? "bg-zinc-800" : "bg-zinc-200"}`} /></div>
    </div>
    <div className={`border-t border-dashed px-4 py-8 text-center text-sm leading-7 ${dark ? "border-zinc-800" : "border-zinc-200"}`}><p>Designed &amp; Developed by <span className={dark ? "font-semibold text-zinc-100" : "font-semibold text-zinc-900"}>Nihal</span></p><p>© {new Date().getFullYear()} All rights reserved.</p></div>
  </footer>;
}

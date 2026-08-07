"use client";

import { motion } from "motion/react";
import { FaJava, FaNodeJs, FaPython, FaReact, FaDocker, FaGitAlt, FaLinux } from "react-icons/fa";
import { SiC, SiCplusplus, SiDjango, SiExpress, SiFastapi, SiFirebase, SiFlask, SiGooglecloud, SiHuggingface, SiJavascript, SiMongodb, SiNextdotjs, SiOpencv, SiPino, SiPostgresql, SiPytorch, SiSupabase, SiTypescript, SiVercel } from "react-icons/si";
import { Braces, Database, Globe, Server, Terminal } from "lucide-react";
import { skillGroups } from "@/data/portfolio";
import CardShell from "@/components/card-shell";
import SectionLabel from "@/components/section-label";
import Tooltip from "@/components/tooltip";

const icons: Record<string, React.ComponentType<{ className?: string }>> = {
  C: SiC, "C++": SiCplusplus, Java: FaJava, Python: FaPython, JavaScript: SiJavascript, TypeScript: SiTypescript, SQL: Database,
  "React.js": FaReact, "Next.js": SiNextdotjs, "Node.js": FaNodeJs, "Express.js": SiExpress, Django: SiDjango, Flask: SiFlask, FastAPI: SiFastapi, "REST APIs": Braces,
  PyTorch: SiPytorch, "Hugging Face": SiHuggingface, LangChain: Braces, Pinecone: SiPino, OpenCV: SiOpencv, "Gemini API": Globe,
  MongoDB: SiMongodb, PostgreSQL: SiPostgresql, Firebase: SiFirebase, Firestore: SiFirebase, GCP: SiGooglecloud, Supabase: SiSupabase, Docker: FaDocker,
  "Git/GitHub": FaGitAlt, "Linux/Unix": FaLinux, Postman: Terminal, Vercel: SiVercel, Streamlit: Server,
};

const iconColors: Record<string, string> = {
  C: "text-[#a8b9cc]", "C++": "text-[#00599c]", Java: "text-[#f89820]", Python: "text-[#3776ab]", JavaScript: "text-[#f7df1e]", TypeScript: "text-[#3178c6]", SQL: "text-[#4479a1]",
  "React.js": "text-[#61dafb]", "Next.js": "text-zinc-900 dark:text-white", "Node.js": "text-[#5fa04e]", "Express.js": "text-zinc-800 dark:text-white", Django: "text-[#092e20] dark:text-[#44b78b]", Flask: "text-zinc-800 dark:text-white", FastAPI: "text-[#009688]", "REST APIs": "text-[#7c3aed]",
  PyTorch: "text-[#ee4c2c]", "Hugging Face": "text-[#ffcc4d]", LangChain: "text-[#1c3c3c] dark:text-[#75e6da]", Pinecone: "text-[#7c3aed]", OpenCV: "text-[#5c3ee8]", "Gemini API": "text-[#4285f4]",
  MongoDB: "text-[#47a248]", PostgreSQL: "text-[#4169e1]", Firebase: "text-[#ffca28]", Firestore: "text-[#ffca28]", GCP: "text-[#4285f4]", Supabase: "text-[#3ecf8e]", Docker: "text-[#2496ed]",
  "Git/GitHub": "text-[#f05032]", "Linux/Unix": "text-[#fcc624]", Postman: "text-[#ff6c37]", Vercel: "text-zinc-900 dark:text-white", Streamlit: "text-[#ff4b4b]",
};

export default function SkillsCard({ theme }: Readonly<{ theme: "light" | "dark" }>) {
  return (
    <CardShell id="skills" theme={theme}>
      <SectionLabel theme={theme}>Skills</SectionLabel>
      <h2 className="mt-3 text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">Tools I work with</h2>
      <div className="mt-5 space-y-5">
        {skillGroups.map((group) => (
          <div key={group.label} className="border-t border-zinc-200 pt-4 dark:border-zinc-800">
            <p className="font-mono text-[11px] uppercase tracking-wider text-zinc-500 dark:text-zinc-400">{group.label}</p>
            <div className="mt-3 flex flex-wrap gap-2.5">
              {group.items.map((skill, index) => {
                const Icon = icons[skill] ?? Braces;
                return <Tooltip key={skill} content={skill}><motion.button type="button" aria-label={skill} initial={{ opacity: 0, y: 5 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ y: -3, scale: 1.06 }} transition={{ duration: 0.18, delay: index * 0.02 }} className="flex h-11 w-11 items-center justify-center border border-zinc-200 bg-white shadow-sm transition-colors hover:border-violet-300 dark:border-zinc-800 dark:bg-zinc-950/40 dark:hover:border-violet-500/50"><Icon className={`h-5 w-5 ${iconColors[skill] ?? "text-violet-500"}`} /></motion.button></Tooltip>;
              })}
            </div>
          </div>
        ))}
      </div>
    </CardShell>
  );
}

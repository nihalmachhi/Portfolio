"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Copy, Check, Mail, Code2, Terminal, Globe } from "lucide-react";
import { heroProfile, profileImage, socialLinks } from "@/data/portfolio";
import Tooltip from "@/components/tooltip";

function XIcon({ className = "h-4 w-4 sm:h-[18px] sm:w-[18px]" }: Readonly<{ className?: string }>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedInIcon({ className = "h-4 w-4 sm:h-[18px] sm:w-[18px]" }: Readonly<{ className?: string }>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3v9zM6.5 8.75A1.75 1.75 0 118.3 7a1.75 1.75 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.38.86 3.38 3.66V19z" />
    </svg>
  );
}

function GithubIcon({ className = "h-4 w-4 sm:h-[18px] sm:w-[18px]" }: Readonly<{ className?: string }>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LeetCodeIcon({ className = "h-4 w-4 sm:h-[18px] sm:w-[18px]" }: Readonly<{ className?: string }>) {
  return <Code2 className={className} strokeWidth={1.75} />;
}

function CodeforcesIcon({ className = "h-4 w-4 sm:h-[18px] sm:w-[18px]" }: Readonly<{ className?: string }>) {
  return <Terminal className={className} strokeWidth={1.75} />;
}

function KaggleIcon({ className = "h-4 w-4 sm:h-[18px] sm:w-[18px]" }: Readonly<{ className?: string }>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
    </svg>
  );
}

export default function SiteHeader({
  email,
  copied,
  onCopy,
}: Readonly<{
  email: string;
  copied: boolean;
  onCopy: () => void;
}>) {
  const iconClass = "h-4 w-4 sm:h-[18px] sm:w-[18px]";

  const getSocialIcon = (label: string) => {
    switch (label.toLowerCase()) {
      case "x":
      case "twitter":
        return <XIcon className={iconClass} />;
      case "linkedin":
        return <LinkedInIcon className={iconClass} />;
      case "github":
        return <GithubIcon className={iconClass} />;
      case "leetcode":
        return <LeetCodeIcon className={iconClass} />;
      case "codechef":
      case "codeforces":
        return <CodeforcesIcon className={iconClass} />;
      case "hackerrank":
        return <Code2 className={iconClass} strokeWidth={1.75} />;
      case "kaggle":
        return <KaggleIcon className={iconClass} />;
      default:
        return <Globe className={iconClass} strokeWidth={1.75} />;
    }
  };

  return (
    <section className="flex flex-col pt-2 pb-4 sm:pt-4 sm:pb-6">
      <div className="flex items-start gap-3.5 sm:items-center sm:gap-5">
        <motion.div
          initial={{ scale: 0.92, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="relative h-[72px] w-[72px] shrink-0 overflow-hidden rounded-full border border-zinc-200 bg-zinc-100 sm:h-20 sm:w-20 dark:border-white/10 dark:bg-zinc-800"
        >
          <Image
            src={profileImage}
            alt={heroProfile.name}
            fill
            priority
            sizes="(max-width: 640px) 72px, 80px"
            className="object-cover"
          />
        </motion.div>

        <div className="min-w-0 flex-1 pt-0.5">
          <motion.h1
            initial={{ y: -4, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="text-xl font-bold tracking-tight text-zinc-900 sm:text-2xl lg:text-[1.75rem] dark:text-zinc-50"
          >
            {heroProfile.name}
          </motion.h1>

          <div className="mt-1 flex flex-wrap items-center gap-x-1.5 gap-y-0.5 text-[13px] sm:text-sm text-zinc-500 dark:text-zinc-400">
            <span>{heroProfile.role}</span>
            <span aria-hidden="true" className="text-zinc-300 dark:text-zinc-600">
              ·
            </span>
            <span className="capitalize">{heroProfile.descriptor}</span>
            <span aria-hidden="true" className="text-zinc-300 dark:text-zinc-600">
              ·
            </span>
            <span className="inline-flex min-w-0 items-center gap-1 text-zinc-600 dark:text-zinc-300">
              <span className="truncate">{email}</span>
              <Tooltip content={copied ? "Copied!" : "Copy email"} side="top">
                <button
                  type="button"
                  onClick={onCopy}
                  className="inline-flex shrink-0 items-center justify-center rounded p-0.5 text-zinc-400 transition-colors hover:text-zinc-700 dark:hover:text-zinc-200"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <Check size={14} className="text-emerald-500" />
                  ) : (
                    <Copy size={14} />
                  )}
                </button>
              </Tooltip>
            </span>
          </div>
        </div>
      </div>

      <p className="mt-4 text-[15px] leading-relaxed text-zinc-600 sm:mt-5 sm:text-base dark:text-zinc-300">
        {heroProfile.tagline}
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-x-3.5 gap-y-3 sm:mt-5 sm:gap-x-4">
        {socialLinks.map((link) => (
          <Tooltip key={link.label} content={`${link.label} (@${link.handle})`} side="bottom">
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.92 }} transition={{ duration: 0.15 }}>
              <Link
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={link.label}
                className="inline-flex items-center justify-center text-zinc-400 transition-colors duration-200 hover:text-zinc-800 dark:text-zinc-500 dark:hover:text-zinc-200"
              >
                {getSocialIcon(link.label)}
              </Link>
            </motion.div>
          </Tooltip>
        ))}
        <Tooltip content="Send email" side="bottom">
          <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.92 }} transition={{ duration: 0.15 }}>
            <a
              href={`mailto:${email}`}
              aria-label="Send email"
              className="inline-flex items-center justify-center text-zinc-400 transition-colors duration-200 hover:text-zinc-800 dark:text-zinc-500 dark:hover:text-zinc-200"
            >
              <Mail className={iconClass} strokeWidth={1.75} />
            </a>
          </motion.div>
        </Tooltip>
      </div>
    </section>
  );
}

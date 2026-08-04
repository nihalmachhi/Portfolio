"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Copy, Check, Mail, Code2, Terminal, Globe } from "lucide-react";
import { heroProfile, profileImage, socialLinks } from "@/data/portfolio";
import Tooltip from "@/components/tooltip";

function XIcon({ className = "w-4.5 h-4.5" }: Readonly<{ className?: string }>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedInIcon({ className = "w-4.5 h-4.5" }: Readonly<{ className?: string }>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3v9zM6.5 8.75A1.75 1.75 0 118.3 7a1.75 1.75 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.38.86 3.38 3.66V19z" />
    </svg>
  );
}

function GithubIcon({ className = "w-4.5 h-4.5" }: Readonly<{ className?: string }>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function YoutubeIcon({ className = "w-4.5 h-4.5" }: Readonly<{ className?: string }>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function InstagramIcon({ className = "w-4.5 h-4.5" }: Readonly<{ className?: string }>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
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
  const getSocialIcon = (label: string) => {
    switch (label.toLowerCase()) {
      case "x":
      case "twitter":
        return <XIcon className="h-4.5 w-4.5" />;
      case "linkedin":
        return <LinkedInIcon className="h-4.5 w-4.5" />;
      case "github":
        return <GithubIcon className="h-4.5 w-4.5" />;
      case "youtube":
        return <YoutubeIcon className="h-4.5 w-4.5" />;
      case "instagram":
        return <InstagramIcon className="h-4.5 w-4.5" />;
      case "leetcode":
        return <Code2 size={18} />;
      case "codechef":
      case "codeforces":
        return <Terminal size={18} />;
      default:
        return <Globe size={18} />;
    }
  };

  return (
    <section className="flex flex-col pt-4 pb-6 sm:pt-6 sm:pb-8">
      {/* Block 1: Top Header Row (Photo on Left + Name & Subtitle on Right) */}
      <div className="flex items-center gap-4 sm:gap-6">
        {/* Avatar Photo */}
        <Tooltip content={heroProfile.name} side="top">
          <motion.div
            initial={{ scale: 0.88, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border-3 border-zinc-200 bg-zinc-100 shadow-md sm:h-24 sm:w-24 lg:h-26 lg:w-26 dark:border-white/15 dark:bg-zinc-800"
          >
            <Image
              src={profileImage}
              alt={heroProfile.name}
              fill
              priority
              sizes="110px"
              className="object-cover"
            />
          </motion.div>
        </Tooltip>

        {/* Name and Polymath Subtitle Block */}
        <div className="flex flex-col gap-1 min-w-0">
          <motion.h1
            initial={{ y: -6, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="flex flex-wrap items-baseline gap-2 text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl lg:text-4xl dark:text-zinc-50"
          >
            <span>{heroProfile.name}</span>
            <Tooltip content="Follow on X (@nihalmachhi2006)" side="top">
              <Link
                href="https://x.com/nihalmachhi2006"
                target="_blank"
                rel="noreferrer"
                className="text-sm sm:text-base font-normal text-zinc-500 hover:text-violet-500 dark:text-zinc-400 dark:hover:text-violet-400 transition-colors"
              >
                aka {heroProfile.handle}
              </Link>
            </Tooltip>
          </motion.h1>

          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm sm:text-base font-normal text-zinc-500 dark:text-zinc-400">
            <span>{heroProfile.role}</span>
            <span aria-hidden="true" className="text-zinc-400 dark:text-zinc-600">
              ·
            </span>
            <span>{heroProfile.descriptor}</span>
            <span aria-hidden="true" className="text-zinc-400 dark:text-zinc-600">
              ·
            </span>
            <span className="inline-flex items-center gap-1.5 text-zinc-600 dark:text-zinc-300">
              <span className="break-all">{email}</span>
              <Tooltip content={copied ? "Copied!" : "Copy email"} side="top">
                <button
                  type="button"
                  onClick={onCopy}
                  className="inline-flex items-center justify-center rounded p-0.5 text-zinc-400 transition-all duration-200 hover:bg-zinc-200/60 hover:text-zinc-800 active:scale-95 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <Check size={15} className="text-emerald-500" />
                  ) : (
                    <Copy size={15} />
                  )}
                </button>
              </Tooltip>
            </span>
          </div>
        </div>
      </div>

      {/* Block 2: Full Width Next Line (Starts from Left under Photo) */}
      <div className="mt-5 flex flex-col gap-3">
        {/* Tagline */}
        <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 font-normal leading-relaxed">
          {heroProfile.tagline}
        </p>

        {/* Social Media Icons Bar */}
        <div className="mt-1 flex flex-wrap items-center gap-4 text-zinc-500 dark:text-zinc-400">
          {socialLinks.map((link) => (
            <Tooltip key={link.label} content={`${link.label} (@${link.handle})`} side="bottom">
              <motion.div
                whileHover={{ scale: 1.25, y: -2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.15 }}
              >
                <Link
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.label}
                  className="inline-flex items-center justify-center text-zinc-500 transition-colors duration-200 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                >
                  {getSocialIcon(link.label)}
                </Link>
              </motion.div>
            </Tooltip>
          ))}
          {/* Email Direct Link Tooltip */}
          <Tooltip content="Send Email" side="bottom">
            <motion.div
              whileHover={{ scale: 1.25, y: -2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.15 }}
            >
              <a
                href={`mailto:${email}`}
                aria-label="Send email"
                className="inline-flex items-center justify-center text-zinc-500 transition-colors duration-200 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
              >
                <Mail size={18} />
              </a>
            </motion.div>
          </Tooltip>
        </div>
      </div>
    </section>
  );
}

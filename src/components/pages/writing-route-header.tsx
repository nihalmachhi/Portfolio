"use client";

import Image from "next/image";
import Link from "next/link";
import { Moon, Sun } from "lucide-react";
import profilePhoto from "@/assets/profile.png";
import { useTheme } from "@/context/theme-context";

export default function WritingRouteHeader({
  currentPage,
}: Readonly<{ currentPage: "writing" | "article" }>) {
  const { theme, onToggleTheme } = useTheme();

  return (
    <header className="ref-header">
      <Link className="ref-avatar" href="/" aria-label="Nihal Machhi home">
        <Image src={profilePhoto} alt="" width={68} height={68} priority />
      </Link>
      <h1>Nihal Machhi <i>aka</i> @nihalmachhi</h1>
      <nav className="ref-nav ref-route-nav" aria-label="Portfolio pages">
        <Link className="ref-tab" href="/">Home</Link>
        <Link className={currentPage === "writing" ? "ref-tab is-active" : "ref-tab"} href="/blogs">Writing</Link>
        <button
          type="button"
          className="ref-theme-toggle"
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          onClick={onToggleTheme}
        >
          {theme === "dark" ? <Sun size={19} /> : <Moon size={19} />}
        </button>
      </nav>
    </header>
  );
}

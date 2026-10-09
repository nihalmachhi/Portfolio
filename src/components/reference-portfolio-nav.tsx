"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/context/theme-context";

export type PortfolioTab = "home" | "projects" | "writing" | "favorites";

const tabs: { id: PortfolioTab; label: string }[] = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "writing", label: "Writing" },
  { id: "favorites", label: "Favorites" },
];

export default function ReferencePortfolioNav({
  currentTab,
  onChange,
}: Readonly<{
  currentTab: PortfolioTab;
  onChange: (tab: PortfolioTab) => void;
}>) {
  const { theme, onToggleTheme } = useTheme();

  return (
    <nav className="ref-nav" aria-label="Portfolio pages">
      <div className="ref-tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={currentTab === tab.id ? "ref-tab is-active" : "ref-tab"}
            aria-current={currentTab === tab.id ? "page" : undefined}
            onClick={() => onChange(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <button
        id="th"
        type="button"
        className="ref-theme-toggle"
        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
        onClick={onToggleTheme}
      >
        {theme === "dark" ? <Sun size={19} /> : <Moon size={19} />}
      </button>
    </nav>
  );
}

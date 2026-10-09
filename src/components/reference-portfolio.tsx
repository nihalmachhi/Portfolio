"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { heroProfile } from "@/data/portfolio";
import profilePhoto from "@/assets/profile.png";
import ReferencePortfolioNav, { type PortfolioTab } from "@/components/reference-portfolio-nav";
import {
  DotDivider,
  HomeTab,
  ProjectsTab,
  WritingTab,
} from "@/components/reference-portfolio-sections";
import { FavoritesTab } from "@/components/favorites-page";
import { referenceSocials } from "@/data/reference-portfolio";

export default function ReferencePortfolio({ initialTab = "home" }: Readonly<{ initialTab?: PortfolioTab }>) {
  const [tab, setTab] = useState<PortfolioTab>(initialTab);
  const reduceMotion = useReducedMotion();

  const changeTab = (nextTab: PortfolioTab) => {
    setTab(nextTab);
    const url = new URL(window.location.href);
    if (nextTab === "home") url.searchParams.delete("tab");
    else url.searchParams.set("tab", nextTab);
    window.history.replaceState(null, "", `${url.pathname}${url.search}${url.hash}`);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  return (
    <main className="ref-wrap">
      <header className="ref-header">
        <div className="ref-avatar">
          <Image src={profilePhoto} alt="Nihal Machhi" width={68} height={68} priority />
        </div>
        <h1>Nihal Machhi <i>aka</i> @nihalmachhi</h1>
        <ReferencePortfolioNav currentTab={tab} onChange={changeTab} />
      </header>

      <motion.div
        className="ref-panels"
        key={tab}
        initial={reduceMotion ? false : { opacity: 0, filter: "blur(10px)", y: 5 }}
        animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        transition={{ duration: reduceMotion ? 0 : 0.38, ease: [0.22, 1, 0.36, 1] }}
      >
        {tab === "home" && <HomeTab />}
        {tab === "projects" && <ProjectsTab />}
        {tab === "writing" && <WritingTab />}
        {tab === "favorites" && <FavoritesTab />}
      </motion.div>

      <DotDivider />
      <footer className="ref-footer">
        <div className="ref-signature">Nihal&nbsp;&nbsp;Machhi</div>
        <div className="ref-small">
          {referenceSocials.map((social, index) => (
            <span key={social.label}>
              {index > 0 && " · "}
              <a href={social.href} target="_blank" rel="noreferrer">{social.label}</a>
            </span>
          ))}
        </div>
        <div className="ref-small">Designed &amp; Developed by {heroProfile.name.split(" ")[0]}</div>
        <div className="ref-small">© 2026 All rights reserved.</div>
      </footer>
    </main>
  );
}


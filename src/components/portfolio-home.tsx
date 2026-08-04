"use client";

import { useState } from "react";
import { heroProfile } from "@/data/portfolio";
import SiteHeader from "@/components/site-header";
import AboutSection from "@/components/about-section";
import GitHubActivityCard from "@/components/github-activity-card";
import ConnectSection from "@/components/connect-section";
import EducationCard from "@/components/education-card";
import ExperienceCard from "@/components/experience-card";
import ProjectsCard from "@/components/projects-card";
import HackathonsCard from "@/components/hackathons-card";
import BlogCard from "@/components/blog-card";
import AchievementsCard from "@/components/achievements-card";
import SkillsCard from "@/components/skills-card";
import SectionDivider from "@/components/section-divider";

export default function PortfolioHome({
  theme,
}: Readonly<{ theme: "light" | "dark" }>) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(heroProfile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="mx-auto flex w-full max-w-4xl flex-col gap-3 px-4 pb-10 pt-7 sm:px-6 lg:px-8 lg:pt-10">
      <SiteHeader
        email={heroProfile.email}
        copied={copied}
        onCopy={handleCopy}
      />
      <AboutSection theme={theme} />
      <SectionDivider />
      <GitHubActivityCard theme={theme} />
      <SectionDivider />
      <ConnectSection theme={theme} />
      <SectionDivider />
      <EducationCard theme={theme} />
      <SectionDivider />
      <ExperienceCard theme={theme} />
      <SectionDivider />
      <ProjectsCard theme={theme} />
      <SectionDivider />
      <SkillsCard theme={theme} />
      <SectionDivider />
      <AchievementsCard theme={theme} />
      <SectionDivider />
      <HackathonsCard theme={theme} />
      <SectionDivider />
      <BlogCard theme={theme} />
    </main>
  );
}

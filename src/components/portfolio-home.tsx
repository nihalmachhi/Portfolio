"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { heroProfile } from "@/data/portfolio";
import SiteHeader from "@/components/site-header";
import AboutSection from "@/components/about-section";
import GitHubActivityCard from "@/components/github-activity-card";
import EducationCard from "@/components/education-card";
import ExperienceCard from "@/components/experience-card";
import ProjectsCard from "@/components/projects-card";
import HackathonsCard from "@/components/hackathons-card";
import BlogCard from "@/components/blog-card";
import AchievementsCard from "@/components/achievements-card";
import SkillsCard from "@/components/skills-card";
import SectionDivider from "@/components/section-divider";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

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
    <motion.main
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="mx-auto flex w-full max-w-4xl flex-col gap-3 px-4 pb-10 pt-7 sm:px-6 lg:px-8 lg:pt-10"
    >
      <motion.div variants={itemVariants}>
        <SiteHeader
          email={heroProfile.email}
          copied={copied}
          onCopy={handleCopy}
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <AboutSection theme={theme} />
      </motion.div>

      <SectionDivider />

      <motion.div variants={itemVariants}>
        <GitHubActivityCard theme={theme} />
      </motion.div>

      <SectionDivider />

      <motion.div variants={itemVariants}>
        <EducationCard theme={theme} />
      </motion.div>

      <SectionDivider />

      <motion.div variants={itemVariants}>
        <ExperienceCard theme={theme} />
      </motion.div>

      <SectionDivider />

      <motion.div variants={itemVariants}>
        <ProjectsCard theme={theme} />
      </motion.div>

      <SectionDivider />

      <motion.div variants={itemVariants}>
        <SkillsCard theme={theme} />
      </motion.div>

      <SectionDivider />

      <motion.div variants={itemVariants}>
        <AchievementsCard theme={theme} />
      </motion.div>

      <SectionDivider />

      <motion.div variants={itemVariants}>
        <HackathonsCard theme={theme} />
      </motion.div>

      <SectionDivider />

      <motion.div variants={itemVariants}>
        <BlogCard theme={theme} />
      </motion.div>
    </motion.main>
  );
}

"use client";

import CardShell from "@/components/card-shell";
import HoverPreviewLink from "@/components/hover-preview-link";
import { aboutPreviewLinks, socialLinks } from "@/data/portfolio";

const paragraphClass =
  "text-[15px] sm:text-base lg:text-[17px] font-normal leading-[1.75] sm:leading-[1.8]";

export default function AboutSection({
  theme,
}: Readonly<{ theme: "light" | "dark" }>) {
  const isDark = theme === "dark";
  const textColor = isDark ? "text-zinc-300" : "text-zinc-700";

  const github = socialLinks.find((l) => l.label === "GitHub")!;
  const linkedin = socialLinks.find((l) => l.label === "LinkedIn")!;
  const xLink = socialLinks.find((l) => l.label === "X")!;

  return (
    <CardShell
      id="about"
      theme={theme}
      className="border-none bg-transparent p-0 shadow-none backdrop-blur-none hover:border-transparent hover:bg-transparent hover:shadow-none sm:p-0"
    >
      <div className={`flex flex-col gap-6 sm:gap-7 ${textColor}`}>
        <p className={paragraphClass}>
          I&apos;m a full-stack engineer and builder crafting{" "}
          <HoverPreviewLink
            href={aboutPreviewLinks.products.href}
            previewImage={aboutPreviewLinks.products.previewImage}
            previewTitle={aboutPreviewLinks.products.previewTitle}
            previewSubtitle={aboutPreviewLinks.products.previewSubtitle}
            external={aboutPreviewLinks.products.external}
          >
            {aboutPreviewLinks.products.label}
          </HoverPreviewLink>{" "}
          across web platforms and applied AI. Over the past few years, I&apos;ve
          focused on designing beautiful, high-performance software that solves
          real-world problems.
        </p>

        <p className={paragraphClass}>
          I regularly{" "}
          <HoverPreviewLink
            href={aboutPreviewLinks.write.href}
            previewImage={aboutPreviewLinks.write.previewImage}
            previewTitle={aboutPreviewLinks.write.previewTitle}
            previewSubtitle={aboutPreviewLinks.write.previewSubtitle}
          >
            {aboutPreviewLinks.write.label}
          </HoverPreviewLink>{" "}
          about my engineering experiments, system architecture, and hard-won
          lessons from my journey as a developer. These notes are my way of
          thinking through challenges and sharing what I&apos;ve learned along the
          way.
        </p>

        <p className={paragraphClass}>
          When I&apos;m not coding, I love exploring{" "}
          <HoverPreviewLink
            href={aboutPreviewLinks.appliedAi.href}
            previewImage={aboutPreviewLinks.appliedAi.previewImage}
            previewTitle={aboutPreviewLinks.appliedAi.previewTitle}
            previewSubtitle={aboutPreviewLinks.appliedAi.previewSubtitle}
            external={aboutPreviewLinks.appliedAi.external}
          >
            {aboutPreviewLinks.appliedAi.label}
          </HoverPreviewLink>
          , competing in hackathons, and contributing to open-source projects.
          There&apos;s something special about building systems from the ground up.
        </p>

        <p className={paragraphClass}>
          Always open to interesting conversations about software design, AI, and
          startup ideas.{" "}
          <HoverPreviewLink
            href={aboutPreviewLinks.sayHello.href}
            previewImage={aboutPreviewLinks.sayHello.previewImage}
            previewTitle={aboutPreviewLinks.sayHello.previewTitle}
            previewSubtitle={aboutPreviewLinks.sayHello.previewSubtitle}
            external
          >
            {aboutPreviewLinks.sayHello.label}
          </HoverPreviewLink>{" "}
          or follow me on{" "}
          <HoverPreviewLink
            href={github.href}
            previewImage={github.previewImage ?? github.href}
            previewTitle="GitHub"
            previewSubtitle={`@${github.handle}`}
            external
          >
            GitHub
          </HoverPreviewLink>
          ,{" "}
          <HoverPreviewLink
            href={linkedin.href}
            previewImage={linkedin.previewImage ?? linkedin.href}
            previewTitle="LinkedIn"
            previewSubtitle={`@${linkedin.handle}`}
            external
          >
            LinkedIn
          </HoverPreviewLink>
          , or{" "}
          <HoverPreviewLink
            href={xLink.href}
            previewImage={xLink.previewImage ?? xLink.href}
            previewTitle="X"
            previewSubtitle={`@${xLink.handle}`}
            external
          >
            X
          </HoverPreviewLink>
          .
        </p>

      </div>
    </CardShell>
  );
}

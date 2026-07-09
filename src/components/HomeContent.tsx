"use client";

import Link from "next/link";
import DiagonalPattern from "./DiagonalPattern";
import BannerSection from "./BannerSection";
import ProfileHeader from "./ProfileHeader";
import ContentSection from "./ContentSection";
import ContentParagraph from "./ContentParagraph";
import SectionBorder from "./SectionBorder";
import ExperienceContent from "./ExperienceContent";
import Reachout from "./Reachout";
import CallToAction from "./CallToAction";
import TechStackMarquee from "./TechStackMarquee";
import { Reveal } from "./Reveal";
import { projects } from "@/data/projects";
import { MasonryProjectCard } from "./MasonryProjectCard";
import AboutMe from "./AboutMe";
import { profileConfig } from "@/config/profile";

export default function NewHeroSection() {
  return (
    <div
      className="min-h-screen transition-colors duration-300 relative"
      style={{ fontFamily: "var(--font-hk-grotesk)" }}
    >
      <div className="relative mx-auto max-w-4xl">
        {/* Diagonal Patterns */}
        <DiagonalPattern side="left" />
        <DiagonalPattern side="right" />

        {/* Main Content */}
        <div className="mx-auto sm:w-[calc(100%-120px)] w-full max-w-4xl  flex flex-col gap-5 px-8">
          {/* Banner Section */}
          <Reveal delay={0.1}>
            <BannerSection />
          </Reveal>

          {/* Profile Header */}
          <Reveal delay={0.2}>
            <ProfileHeader
              name={profileConfig.name}
              age={profileConfig.age}
              title={profileConfig.title}
              profileImage={profileConfig.avatar}
              socialLinks={profileConfig.socials}
            />
          </Reveal>

          {/* Main content */}
          <div className="prose dark:prose-invert max-w-none  ">
            <div className="text-base space-y-5">
              {/* Current Role subtitle  */}
              <Reveal delay={0.1}>
                <ContentSection subtitle={profileConfig.role} title="">
                  <div></div>
                </ContentSection>
              </Reveal>

              <Reveal delay={0.05}>
                <SectionBorder />
              </Reveal>

              {/* Bio Section */}
              <Reveal delay={0.1}>
                <ContentSection className="">
                  <ContentParagraph className="text-base sm:text-lg">
                    <span className="font-medium dark:text-white text-black">
                      Hey there 👋 , my name is Sian and I am a full-stack
                      engineer,
                    </span>{" "}
                    {profileConfig.intro}
                  </ContentParagraph>
                </ContentSection>
              </Reveal>

              <Reveal delay={0.05}>
                <SectionBorder className="" />
              </Reveal>

              {/* Experience Section */}
              <Reveal delay={0.1}>
                <div className="space-y-5 py-7">
                  <h2 className="text-base sm:text-xl opacity-60  font-[family-name:var(--font-instrument-serif)]">
                    Professional Experience
                  </h2>
                  <div className="">
                    <ExperienceContent />
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.05}>
                <SectionBorder className="" />
              </Reveal>

              {/* Projects / Works */}
              <Reveal delay={0.1}>
                <div className="space-y-5 py-7">
                  <h2 className="text-base sm:text-xl opacity-60 font-[family-name:var(--font-instrument-serif)]">
                    Projects / Works
                  </h2>
                  <div className="">
                    <div className="grid grid-cols-1 gap-4 sm:gap-3 sm:grid-cols-2 group">
                      {projects.slice(0, 6).map((project) => (
                        <MasonryProjectCard
                          key={project.id}
                          project={project}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-center pt-3 sm:pt-4">
                    <Link
                      href="/projects"
                      className="inline-flex items-center justify-center gap-1 rounded-full border border-neutral-300 bg-neutral-100 px-4 py-2 text-xs font-medium text-neutral-800 transition-colors hover:bg-neutral-200 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 dark:hover:bg-neutral-700 sm:text-sm"
                    >
                      View All
                      <span>→</span>
                    </Link>
                  </div>

                  {/* About Me Section */}
                  <div className="py-7">
                    <AboutMe />
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.05}>
                <SectionBorder className="" />
              </Reveal>

              {/* Tech Stack Section */}
              <Reveal delay={0.1}>
                <div className="py-7">
                  <TechStackMarquee className="w-full" />
                </div>
              </Reveal>

              <Reveal delay={0.05}>
                <SectionBorder className="" />
              </Reveal>

              {/* call to action*/}
              <Reveal delay={0.1}>
                <div className="py-7">
                  <CallToAction />
                </div>
              </Reveal>

              <Reveal delay={0.05}>
                <SectionBorder className="" />
              </Reveal>

              {/* Reachout Section */}
              <Reveal delay={0.1}>
                <div className="">
                  <Reachout
                    title="Let's connect"
                    subtitle="Find me on these platforms"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

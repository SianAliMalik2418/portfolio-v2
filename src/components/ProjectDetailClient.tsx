"use client";

import { ProjectCard } from "@/components/ProjectCard";
import FadeIn from "@/components/FadeIn";
import { FadeInUp } from "@/components/ui/PageTransitions";
import DiagonalPattern from "@/components/DiagonalPattern";
import PageNavigation from "@/components/Navigation";
import { Project } from "@/types/project";

interface ProjectDetailClientProps {
  project: Project;
  allProjects: Project[];
}

export default function ProjectDetailClient({
  project,
  allProjects,
}: ProjectDetailClientProps) {
  return (
    <div
      className="min-h-screen transition-colors duration-300 relative overflow-x-hidden"
      style={{ fontFamily: "var(--font-hk-grotesk)" }}
    >
      <div className="relative mx-auto max-w-4xl">
        <DiagonalPattern side="left" topOffset="0" />
        <DiagonalPattern side="right" topOffset="0" />

        <div className="mx-auto sm:w-[calc(100%-120px)] w-full max-w-4xl px-5 sm:px-8">
          <div className="prose dark:prose-invert max-w-none">
            <div className="text-base">
              <FadeIn delay={0.1} duration={0.5}>
                <div className="pt-4 sm:pt-6 mb-4 sm:mb-6">
                  <PageNavigation
                    breadcrumbs={[
                      { label: 'Projects', href: '/projects' },
                      { label: project.title },
                    ]}
                  />
                </div>
              </FadeIn>
              <FadeInUp delay={0.4}>
                <ProjectCard
                  project={project}
                  isDetailed
                  allProjects={allProjects}
                />
              </FadeInUp>
              <div className="pb-16 sm:pb-20" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

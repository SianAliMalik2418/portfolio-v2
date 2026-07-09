"use client";

import { Project } from "@/types/project";
import { MasonryProjectCard } from "./MasonryProjectCard";

interface MasonryGridProps {
  projects: Project[];
  className?: string;
}

export const MasonryGrid = ({ projects, className = "" }: MasonryGridProps) => {
  return (
    <div className={`w-full ${className}`}>
      <div className="flex flex-col gap-4 sm:py-6 lg:py-8">
        {projects.map((project) => (
          <MasonryProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

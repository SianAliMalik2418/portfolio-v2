"use client";

import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import { FiArrowUpRight } from "react-icons/fi";
import { Project } from "@/types/project";
import { SkillIcon } from "@/components/SkillIcon";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";

interface MasonryProjectCardProps {
  project: Project;
  className?: string;
}

const techIcons: Record<
  string,
  { name: string; icon: string; darkIcon?: string }
> = {
  Vite: { name: "Vite", icon: "/tech-icons/vite.svg" },
  TypeScript: { name: "TypeScript", icon: "/tech-icons/typescript.svg" },
  Express: {
    name: "Express",
    icon: "/skills/express.svg",
    darkIcon: "/skills/express-dark.svg",
  },
  MongoDB: { name: "MongoDB", icon: "/tech-icons/mongodb.svg" },
  "Next.js": {
    name: "Next.js",
    icon: "/tech-icons/nextjs.svg",
    darkIcon: "/tech-icons/nextjs-dark.svg",
  },
  PostgreSQL: { name: "PostgreSQL", icon: "/tech-icons/postgresql.svg" },
  Prisma: {
    name: "Prisma",
    icon: "/skills/prisma.svg",
    darkIcon: "/skills/prisma-dark.svg",
  },
  "TanStack Start": { name: "TanStack Start", icon: "/skills/tanstack.svg" },
  React: { name: "React", icon: "/tech-icons/react.svg" },
  "Cloudflare Workers": {
    name: "Cloudflare Workers",
    icon: "/skills/cloudflare-workers.svg",
  },
  R2: { name: "Cloudflare R2", icon: "/skills/cloudflare-workers.svg" },
  "Tailwind CSS": { name: "Tailwind CSS", icon: "/tech-icons/tailwind.svg" },
};

export const MasonryProjectCard = ({
  project,
  className = "",
}: MasonryProjectCardProps) => {
  const projectTech = project.tags.map((tag) => techIcons[tag]).filter(Boolean);

  return (
    <article
      className={`group/item overflow-hidden rounded-[10px] border border-black/10 bg-white p-2 transition-all duration-300 ease-out hover:border-black/20 hover:shadow-lg hover:shadow-black/5 dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-white/20 dark:hover:shadow-black/20 sm:p-3 ${className}`}
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-5">
        <Link
          href={`/projects/${project.id}`}
          className="block shrink-0 touch-manipulation sm:w-[43%]"
          style={{
            WebkitTapHighlightColor: "transparent",
            WebkitTouchCallout: "none",
            WebkitUserSelect: "none",
            userSelect: "none",
          }}
        >
          <div className="relative aspect-4/3 w-full overflow-hidden rounded-md border border-black/5 bg-black/10 transition-all duration-300 group-hover/item:border-black/10 dark:border-white/5 dark:bg-white/10 dark:group-hover/item:border-white/10">
            {project.image ? (
              <Image
                src={project.image}
                alt={`${project.title} project cover`}
                width={1200}
                height={900}
                className="h-full w-full rounded-md object-cover transition-transform duration-300 group-hover/item:scale-105"
                sizes="(max-width: 640px) 100vw, 340px"
                quality={80}
                priority
              />
            ) : (
              <div className="h-full w-full rounded-md bg-gradient-to-br from-neutral-100 via-neutral-200 to-neutral-300 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-700" />
            )}
          </div>
        </Link>

        <div className="flex min-w-0 flex-1 flex-col gap-3 px-1 pb-2 sm:px-0 sm:pb-0">
          <div className="flex items-start justify-between gap-3">
            <Link
              href={`/projects/${project.id}`}
              className="min-w-0 text-base sm:text-xl font-semibold leading-tight text-black transition-colors hover:text-black/70 dark:text-white dark:hover:text-white/75"
            >
              {project.title}
            </Link>

            <div className="flex shrink-0 items-center mb-1 gap-2">
              {project.liveLink && (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-7 w-7  sm:h-8 sm:w-8 items-center justify-center rounded-md border border-black/15 bg-black/[0.04] text-black/75 transition-colors hover:bg-black/10 dark:border-white/15 dark:bg-white/10 dark:text-white/80 dark:hover:bg-white/15"
                      aria-label={`View ${project.title} live`}
                    >
                      <FiArrowUpRight className="size-4" />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>Live</TooltipContent>
                </Tooltip>
              )}

              {project.githubLink && (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-md border border-black/15 bg-black/[0.04] text-black/75 transition-colors hover:bg-black/10 dark:border-white/15 dark:bg-white/10 dark:text-white/80 dark:hover:bg-white/15"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <FaGithub className="size-4" />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>GitHub</TooltipContent>
                </Tooltip>
              )}
            </div>
          </div>

          <p className="text-sm leading-6 text-black/55 dark:text-white/50 sm:text-base">
            {project.description}
          </p>

          <div className="flex items-end justify-between gap-3 pt-1">
            {projectTech.length > 0 && (
              <div className="grid grid-cols-4 gap-2">
                {projectTech.map((tech) => (
                  <Tooltip key={tech.name}>
                    <TooltipTrigger asChild>
                      <div className="flex size-9 items-center justify-center rounded-md border border-black/10 bg-black/[0.03] transition-colors hover:bg-black/[0.07] dark:border-white/10 dark:bg-white/[0.06] dark:hover:bg-white/[0.1]">
                        <SkillIcon
                          skill={tech}
                          width={22}
                          height={22}
                          className="size-5"
                          imageClassName="h-full w-full"
                        />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>{tech.name}</TooltipContent>
                  </Tooltip>
                ))}
              </div>
            )}

            <Link
              href={`/projects/${project.id}`}
              className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-black/12 bg-black/[0.04] px-3 py-1.5 text-xs font-medium text-black/70 transition-all hover:bg-black/[0.08] dark:border-white/12 dark:bg-white/[0.06] dark:text-white/70 dark:hover:bg-white/[0.12]"
            >
              View case study
              <span className="transition-transform duration-200 group-hover/item:translate-x-0.5">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

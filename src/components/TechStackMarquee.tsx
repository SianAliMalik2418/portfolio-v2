"use client";

import { SkillIcon } from "@/components/SkillIcon";
import type { Skill } from "@/data/skills";

type StackItem = Pick<Skill, "name" | "icon" | "darkIcon">;

type StackGroup = {
  label: string;
  items: StackItem[];
};

const stackGroups: StackGroup[] = [
  {
    label: "Language",
    items: [
      { name: "TypeScript", icon: "/tech-icons/typescript.svg" },
      { name: "JavaScript", icon: "/tech-icons/javascript.svg" },
    ],
  },
  {
    label: "Frontend",
    items: [
      { name: "React", icon: "/tech-icons/react.svg" },
      {
        name: "Next.js",
        icon: "/tech-icons/nextjs.svg",
        darkIcon: "/tech-icons/nextjs-dark.svg",
      },
      { name: "TanStack Start", icon: "/skills/tanstack.svg" },
      { name: "Tailwind CSS", icon: "/tech-icons/tailwind.svg" },
      {
        name: "Shadcn UI",
        icon: "/skills/shadcn-ui.svg",
        darkIcon: "/skills/shadcn-ui-dark.svg",
      },
      { name: "Framer Motion", icon: "/skills/framer.svg", darkIcon: "/skills/framer-dark.svg" },
    ],
  },
  {
    label: "Backend & Database",
    items: [
      { name: "Node.js", icon: "/tech-icons/nodejs.svg" },
      { name: "Express", icon: "/skills/express.svg", darkIcon: "/skills/express-dark.svg" },
      { name: "MongoDB", icon: "/tech-icons/mongodb.svg" },
      { name: "PostgreSQL", icon: "/tech-icons/postgresql.svg" },
      { name: "Prisma", icon: "/skills/prisma.svg", darkIcon: "/skills/prisma-dark.svg" },
      { name: "Drizzle", icon: "/skills/drizzle.svg", darkIcon: "/skills/drizzle-dark.svg" },
    ],
  },
  {
    label: "Workflow & Cloud",
    items: [
      { name: "Git", icon: "/tech-icons/Git.svg" },
      { name: "AWS EC2", icon: "/tech-icons/AWS.svg" },
      { name: "DigitalOcean", icon: "/tech-icons/digitalocean.svg" },
      { name: "Cloudflare Workers", icon: "/skills/cloudflare-workers.svg" },
    ],
  },
  {
    label: "Libraries",
    items: [
      { name: "Zod", icon: "/skills/zod.svg" },
      { name: "React Hook Form", icon: "/skills/react.svg" },
      { name: "TanStack Query", icon: "/skills/tanstack.svg" },
    ],
  },
];

interface TechStackMarqueeProps {
  className?: string;
}

export default function TechStackMarquee({
  className = "",
}: TechStackMarqueeProps) {
  return (
    <div className={`w-full ${className}`}>
      <div className="mb-4">
        <h2 className="text-base font-medium font-[family-name:var(--font-instrument-serif)] sm:text-xl opacity-90 -tracking-[0.01em]">
          Stack I use
        </h2>
        <p className="mt-2 text-sm sm:text-base text-black/55 dark:text-white/50">
          Technologies I use to build full-stack products and production
          workflows
        </p>
      </div>

      <div className="overflow-hidden rounded-[10px] border border-black/10 dark:border-white/10">
        {stackGroups.map((group, index) => (
          <div
            key={group.label}
            className="grid gap-3 border-b border-black/10 px-4 py-4 last:border-b-0 dark:border-white/10 sm:grid-cols-[170px_1fr] sm:gap-5 sm:px-5"
          >
            <div className="flex items-center gap-2 text-sm text-black/45 dark:text-white/40 sm:text-base">
              <span className="font-mono text-black/35 dark:text-white/30">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span>{group.label}</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <div
                  key={skill.name}
                  className="group/stack inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-black/10 bg-black/[0.03] px-2.5 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm text-black/75 transition-colors hover:bg-black/[0.07] dark:border-white/10 dark:bg-white/[0.06] dark:text-white/80 dark:hover:bg-white/[0.1]"
                >
                  <SkillIcon
                    skill={skill}
                    width={16}
                    height={16}
                    className="size-3.5 sm:size-4"
                    imageClassName="h-full w-full grayscale opacity-70 transition-all duration-300 group-hover/stack:grayscale-0 group-hover/stack:opacity-100"
                  />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

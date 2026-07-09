export type Skill = {
  name: string;
  category: "frontend" | "backend" | "library" | "tool" | "database" | "language";
  icon: string;
  darkIcon?: string;
  color?: string;
};

export const skills: Skill[] = [
  { name: "JavaScript", category: "language", icon: "/tech-icons/javascript.svg" },
  { name: "TypeScript", category: "language", icon: "/tech-icons/typescript.svg" },
  { name: "React.js", category: "frontend", icon: "/tech-icons/react.svg" },
  { name: "Next.js", category: "frontend", icon: "/tech-icons/nextjs.svg", darkIcon: "/tech-icons/nextjs-dark.svg" },
  { name: "TanStack Start", category: "frontend", icon: "/skills/tanstack.svg" },
  { name: "Node.js", category: "backend", icon: "/tech-icons/nodejs.svg" },
  { name: "Express", category: "backend", icon: "/skills/express.svg", darkIcon: "/skills/express-dark.svg" },
  { name: "MongoDB", category: "database", icon: "/tech-icons/mongodb.svg" },
  { name: "PostgreSQL", category: "database", icon: "/tech-icons/postgresql.svg" },
  { name: "Prisma", category: "database", icon: "/skills/prisma.svg", darkIcon: "/skills/prisma-dark.svg" },
  { name: "Drizzle", category: "database", icon: "/skills/drizzle.svg", darkIcon: "/skills/drizzle-dark.svg" },
  { name: "Tailwind CSS", category: "library", icon: "/tech-icons/tailwind.svg" },
  { name: "Shadcn UI", category: "library", icon: "/skills/shadcn-ui.svg", darkIcon: "/skills/shadcn-ui-dark.svg" },
  { name: "Zod", category: "library", icon: "/skills/zod.svg" },
  { name: "React Hook Form", category: "library", icon: "/skills/react.svg" },
  { name: "TanStack Query", category: "library", icon: "/skills/tanstack.svg" },
  { name: "Framer Motion", category: "library", icon: "/skills/framer.svg", darkIcon: "/skills/framer-dark.svg" },
  { name: "Git", category: "tool", icon: "/tech-icons/Git.svg" },
  { name: "AWS EC2", category: "tool", icon: "/tech-icons/AWS.svg" },
  { name: "DigitalOcean", category: "tool", icon: "/tech-icons/digitalocean.svg" },
  { name: "Cloudflare Workers", category: "tool", icon: "/skills/cloudflare-workers.svg" },
];

export const featuredSkills = skills.slice(0, 12);

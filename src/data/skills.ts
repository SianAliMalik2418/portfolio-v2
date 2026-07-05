export type Skill = {
  name: string;
  category: "frontend" | "backend" | "library" | "tool" | "database" | "language";
  icon: string;
  color?: string;
};

export const skills: Skill[] = [
  { name: "JavaScript", category: "language", icon: "/tech-icons/javascript.svg" },
  { name: "TypeScript", category: "language", icon: "/tech-icons/typescript.svg" },
  { name: "React.js", category: "frontend", icon: "/tech-icons/react.svg" },
  { name: "Next.js", category: "frontend", icon: "/tech-icons/nextjs.svg" },
  { name: "TanStack Start", category: "frontend", icon: "/tech-icons/react.svg" },
  { name: "Node.js", category: "backend", icon: "/tech-icons/nodejs.svg" },
  { name: "Express", category: "backend", icon: "/tech-icons/express.svg" },
  { name: "MongoDB", category: "database", icon: "/tech-icons/mongodb.svg" },
  { name: "PostgreSQL", category: "database", icon: "/tech-icons/postgresql.svg" },
  { name: "Prisma", category: "database", icon: "/skills/prisma.svg" },
  { name: "Drizzle", category: "database", icon: "/tech-icons/sql.svg" },
  { name: "Tailwind CSS", category: "library", icon: "/tech-icons/tailwind.svg" },
  { name: "Shadcn UI", category: "library", icon: "/skills/react.svg" },
  { name: "Zod", category: "library", icon: "/skills/typescript.svg" },
  { name: "React Hook Form", category: "library", icon: "/skills/react.svg" },
  { name: "TanStack Query", category: "library", icon: "/skills/react.svg" },
  { name: "Framer Motion", category: "library", icon: "/skills/javascript.svg" },
  { name: "Git", category: "tool", icon: "/tech-icons/Git.svg" },
  { name: "AWS EC2", category: "tool", icon: "/tech-icons/AWS.svg" },
  { name: "DigitalOcean", category: "tool", icon: "/tech-icons/docker.svg" },
  { name: "Cloudflare Workers", category: "tool", icon: "/tech-icons/javascript.svg" },
];

export const featuredSkills = skills.slice(0, 12);


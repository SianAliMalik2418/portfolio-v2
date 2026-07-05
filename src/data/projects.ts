import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "attendance-management-system",
    title: "Attendance Management System",
    description:
      "A full HR suite with admin and employee portals for attendance, leaves, work-from-home, hybrid scheduling, working hours, events, posts, documents, and employee management.",
    longDescription:
      "Full HR Suite\n\nBuilt a complete HR platform with separate admin and employee portals covering attendance, leaves, work-from-home, hybrid scheduling, working hours, events, posts, documents, and employee management.\n\nDesigned role-based access control to separate admin and employee permissions across the system.\n\nImplemented complex scheduling and time-tracking logic to handle hybrid work, working hours, and leave calculations.\n\nStarted as the sole frontend and backend developer, then onboarded and mentored two junior backend developers and led their work through delivery.",
    image: "/images/project-attendance.svg",
    tags: ["Vite", "TypeScript", "Express", "MongoDB", "RBAC"],
    date: "2025",
  },
  {
    id: "pinzak",
    title: "Pinzak",
    description:
      "An AI performance marketing platform with a marketing site and client dashboard for campaign analytics and reporting.",
    longDescription:
      "AI Performance Marketing Platform\n\nBuilt both the marketing website and the client dashboard for a performance marketing platform end to end.\n\nIntegrated third-party APIs from Google, Meta, and TikTok to pull campaign and analytics data into a unified dashboard.\n\nDeveloped data visualizations and reporting views to surface campaign performance metrics for clients.",
    liveLink: "https://pinzak.com",
    image: "/images/project-pinzak.svg",
    tags: ["Next.js", "TypeScript", "Express", "PostgreSQL", "Prisma"],
    date: "2025",
  },
  {
    id: "nearo",
    title: "Nearo",
    description:
      "A Semantle-style daily word-guessing game using GloVe word embeddings to score guesses by semantic similarity.",
    longDescription:
      "Daily Word-Guessing Game\n\nBuilt a Semantle-style daily word game using GloVe word embeddings to score guesses by semantic similarity.\n\nDesigned an offline preprocessing pipeline in Python to precompute static score files, keeping the live game fast and fully client-side.\n\nServed puzzle data from Cloudflare R2 and ran a lightweight Workers backend, with game state persisted in localStorage.",
    liveLink: "https://portlyy.com/games/nearo",
    image: "/images/project-nearo.svg",
    tags: ["TanStack Start", "React", "Vite", "Cloudflare Workers", "R2", "Tailwind CSS"],
    date: "2025",
  },
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find((project) => project.id === id);
};

export const getAllProjects = (): Project[] => {
  return projects;
};

export type ExperienceItem = {
  company: string;
  position: string;
  duration: string;
  location?: string;
  description: string;
  achievements?: string[];
  href?: string;
  logoUrl?: string;
};

export const experiences: ExperienceItem[] = [
  {
    company: "Whitebox",
    position: "Software Engineer",
    duration: "Dec. 2024 - Present",
    location: "On-site, Lahore, Pakistan",
    description:
      "Building and shipping full-stack client products and internal tools with React, Next.js, TypeScript, Node.js, and Express.",
    achievements: [
      "Built and shipped 10+ full-stack client projects and 2 internal tools, working both solo and with small teams.",
      "Owned projects end to end from architecture to deployment on AWS EC2 and DigitalOcean.",
      "Integrated APIs from TikTok, Google, Meta, Shopify, Walmart, and Amazon for analytics and reporting workflows.",
      "Implemented Stripe payment flows, JWT/OAuth authentication, and reliable REST APIs.",
      "Built an internal operations tool for attendance tracking and reporting, reducing manual HR coordination.",
    ],
  },
];

export const education = {
  school: "NCBA&E University",
  degree: "Bachelor of Science in Computer Science",
  status: "4th Year, In Progress",
  cgpa: "3.80 / 4.0",
  location: "Lahore, Pakistan",
} as const;


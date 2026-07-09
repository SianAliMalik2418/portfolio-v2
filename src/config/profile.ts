export const profileConfig = {
  name: "Sian Malik",
  legalName: "Sian Ali Malik",
  shortName: "Sian",
  phone: "+92 302-0010-923",
  email: "sianalimalik2418@gmail.com",
  age: "",
  title: "Software Engineer",
  role: "Full-stack web apps, dashboards, and SaaS MVPs",
  location: "Lahore, Pakistan",
  avatar: "/images/sian-avatar.png",
  bannerImage: "/images/sian-banner.svg",
  aboutImage: "/images/sian-avatar.png",
  heroQuote:
    "Building full-stack products from idea to launch.",
  bio: "Software engineer who builds full-stack applications with JavaScript, TypeScript, React, and Next.js, backed by Node.js, Express, MongoDB, and Postgres. Focused on writing clean, maintainable code and delivering products that scale.",
  intro:
    "I build production-ready web apps, dashboards, and MVPs with Next.js, TypeScript, Node.js, and databases. I can handle frontend, backend, integrations, auth, payments, and deployment.",
  socials: {
    github: "https://github.com/SianAliMalik2418",
    githubUsername: "SianAliMalik2418",
    linkedin: "https://www.linkedin.com/in/sianalimalik/",
    twitter: "https://x.com/SianAliMalik",
    mail: "mailto:sianalimalik2418@gmail.com",
    resume: "/sian-ali-malik-resume.pdf",
    calendar: "",
    sponsor: "",
  },
  cta: {
    preText:
      "Need a full-stack developer for a web app, dashboard, MVP, or internal tool?",
    linkText: "Email Me",
    linkUrl: "mailto:sianalimalik2418@gmail.com",
    quote: "Focused execution turns complex product work into shipped systems.",
    quoteSource: "Sian Malik",
  },
  footer: {
    credit: "Designed and developed by Sian",
  },
} as const;

export const socialLinks = profileConfig.socials;

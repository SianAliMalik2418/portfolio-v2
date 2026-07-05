export const siteConfig = {
  name: "Sian Malik",
  legalName: "Sian Ali Malik",
  shortName: "Sian",
  baseUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://sianalimalik.com",
  description:
    "Software engineer building full-stack products with TypeScript, React, Next.js, Node.js, Express, MongoDB, and PostgreSQL.",
  ogImage: "/images/sian-open-graph.svg",
  locale: "en_US",
  copyrightYear: 2026,
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
  },
  analytics: {
    databuddyClientId: process.env.NEXT_PUBLIC_DATABUDDY_CLIENT_ID || "",
  },
} as const;

import { profileConfig } from "@/config/profile";

export const githubConfig = {
  username: profileConfig.socials.githubUsername,
  portfolioRepo: {
    owner: profileConfig.socials.githubUsername,
    repo: "portfolio-v2",
  },
  contributionLimit: 50,
} as const;


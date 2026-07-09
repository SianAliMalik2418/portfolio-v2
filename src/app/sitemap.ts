import type { MetadataRoute } from "next"
import { siteConfig } from "@/config/site"
import { projects } from "@/data/projects"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.baseUrl

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${base}/projects`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ]

  const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${base}/projects/${project.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }))

  return [...staticRoutes, ...projectRoutes]
}

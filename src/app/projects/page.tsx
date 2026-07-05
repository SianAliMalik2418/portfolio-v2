import { projects } from '@/data/projects'
import ProjectsListClient from '@/components/ProjectsListClient'
import { siteConfig } from '@/config/site'

export const metadata = {
  title: `Projects | ${siteConfig.legalName}`,
  description: 'Showcase of my projects and work',
}

export default function ProjectsPage() {
  return <ProjectsListClient projects={projects} />
}

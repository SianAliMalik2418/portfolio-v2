import { blogs } from '@/data/blogs'
import BlogsListClient from '@/components/BlogsListClient'
import { siteConfig } from '@/config/site'

export const metadata = {
  title: `Blog | ${siteConfig.legalName}`,
  description: 'Technical writings and notes on full-stack engineering.',
}

export default function BlogsPage() {
  return <BlogsListClient blogs={blogs} />
}

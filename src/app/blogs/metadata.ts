import { Metadata } from 'next'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: `Blog | ${siteConfig.legalName}`,
  description: 'Technical writings and notes on full-stack engineering.',
  openGraph: {
    title: `Blog | ${siteConfig.legalName}`,
    description: 'Technical writings and notes on full-stack engineering.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Blog | ${siteConfig.legalName}`,
    description: 'Technical writings and notes on full-stack engineering.',
  }
} 

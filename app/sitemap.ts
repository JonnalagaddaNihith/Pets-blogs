import { MetadataRoute } from 'next'
import { allPets, allGuides } from 'contentlayer/generated'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_APP_BASE_URL
  
  const petUrls = allPets.map((pet) => ({
    url: `${baseUrl}${pet.url}`,
    lastModified: new Date(pet.publishedAt).toISOString().split('T')[0],
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  const guideUrls = allGuides.map((guide) => ({
    url: `${baseUrl}${guide.url}`,
    lastModified: new Date(guide.date).toISOString().split('T')[0],
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  const staticRoutes = [
    '',
    '/dogs',
    '/cats',
    '/care-guides',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'daily' as const,
    priority: 1.0,
  }))

  return [...staticRoutes, ...petUrls, ...guideUrls]
} 
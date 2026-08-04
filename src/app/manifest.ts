import { MetadataRoute } from 'next'
import { SITE_CONFIG } from '@/lib/site-config'

export const dynamic = 'force-static'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_CONFIG.title,
    short_name: 'Budi Portfolio',
    description: SITE_CONFIG.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#E5E7EB',
    theme_color: '#023047',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}

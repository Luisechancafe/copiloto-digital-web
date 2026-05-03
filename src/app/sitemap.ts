import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();

  const routes = [
    { path: '/', priority: 1.0, change: 'weekly' as const },
    { path: '/precios', priority: 0.9, change: 'monthly' as const },
    { path: '/sobre-nosotros', priority: 0.7, change: 'monthly' as const },
    { path: '/contacto', priority: 0.8, change: 'monthly' as const },
    { path: '/casos-de-uso/peluquerias', priority: 0.8, change: 'monthly' as const },
    { path: '/casos-de-uso/clinicas-dentales', priority: 0.8, change: 'monthly' as const },
    { path: '/casos-de-uso/inmobiliarias', priority: 0.8, change: 'monthly' as const },
    { path: '/casos-de-uso/gestorias', priority: 0.8, change: 'monthly' as const },
    { path: '/legal/privacidad', priority: 0.3, change: 'yearly' as const },
    { path: '/legal/terminos', priority: 0.3, change: 'yearly' as const }
  ];

  return routes.map(({ path, priority, change }) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: change,
    priority
  }));
}

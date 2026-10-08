import { SERVICES_DATA } from '../src/data/servicesData';

export default function sitemap() {
  const baseUrl = 'https://sss-associate.vercel.app';
  const lastModified = new Date();

  const staticRoutes = [
    '',
    '/about',
    '/services',
    '/contact',
    '/privacy',
    '/terms',
    '/disclaimer',
    '/refund',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));

  const serviceRoutes = SERVICES_DATA.map((srv) => ({
    url: `${baseUrl}/services/${srv.id}`,
    lastModified,
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  return [...staticRoutes, ...serviceRoutes];
}

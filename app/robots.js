export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
      {
        userAgent: ['Googlebot', 'Bingbot', 'PerplexityBot', 'Applebot', 'GPTBot'],
        allow: '/',
      },
    ],
    sitemap: 'https://sss-associate.vercel.app/sitemap.xml',
    host: 'https://sss-associate.vercel.app',
  };
}

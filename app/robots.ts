import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/admin-login'],
      },
    ],
    sitemap: 'https://bdrtr.github.io/sitemap.xml',
  };
}


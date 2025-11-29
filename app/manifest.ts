import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Bedir Tuğra Karaabalı - Software Engineer',
    short_name: 'BDRTR',
    description: 'Full-stack web developer and software engineer portfolio',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#10151a',
    icons: [
      {
        src: '/favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  };
}


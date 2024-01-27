import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://myoast.vercel.app/',
      lastModified: new Date(),
    },
    {
      url: 'https://myoast.vercel.app/list',
      lastModified: new Date(),
    },
    {
      url: 'https://myoast.vercel.app/latest',
      lastModified: new Date(),
    },
    {
      url: 'https://myoast.vercel.app/about',
      lastModified: new Date(),
    },
    {
      url: 'https://myoast.vercel.app/devinfo',
      lastModified: new Date(),
    },
  ];
}

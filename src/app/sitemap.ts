import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://myoast.vercel.app/',
    },
    {
      url: 'https://myoast.vercel.app/list',
    },
    {
      url: 'https://myoast.vercel.app/latest',
    },
    {
      url: 'https://myoast.vercel.app/about',
    },
    {
      url: 'https://myoast.vercel.app/devinfo',
    },
  ];
}

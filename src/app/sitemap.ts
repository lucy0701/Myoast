import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://mongbit-fe.vercel.app/',
      lastModified: new Date(),
    },
    {
      url: 'https://mongbit-fe.vercel.app/list',
      lastModified: new Date(),
    },
    {
      url: 'https://mongbit-fe.vercel.app/latest',
      lastModified: new Date(),
    },
    {
      url: 'https://mongbit-fe.vercel.app/about',
      lastModified: new Date(),
    },
    {
      url: 'https://mongbit-fe.vercel.app/devinfo',
      lastModified: new Date(),
    },
  ];
}

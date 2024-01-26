import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://mongbit-fe.vercel.app/sitemap.xml',
      lastModified: new Date(),
    },
    {
      url: 'https://mongbit-fe.vercel.app/list/sitemap.xml',
      lastModified: new Date(),
    },
    {
      url: 'https://mongbit-fe.vercel.app/latest/sitemap.xml',
      lastModified: new Date(),
    },
    {
      url: 'https://mongbit-fe.vercel.app/about/sitemap.xml',
      lastModified: new Date(),
    },
    {
      url: 'https://mongbit-fe.vercel.app/devinfo/sitemap.xml',
      lastModified: new Date(),
    },
  ];
}

import { MetadataRoute } from 'next';

export default function robot(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://mongbit-fe.vercel.app/sitemap.xml',
  };
}

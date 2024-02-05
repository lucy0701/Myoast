import { MetadataRoute } from 'next';

import { DOMAIN_BE_PROD } from '@/constants/constant';
import { TestCover } from '@/types/test';
import { getHeaders } from '@/utils/util';

export const getTests = () => {
  const headers = getHeaders();
  return fetch(`${DOMAIN_BE_PROD}/api/v1/tests`, { headers })
    .then((res) => {
      if (!res.ok) {
        return Promise.reject();
      }
      return res.json();
    })
    .catch(() => []);
};

export const Sitemap = async ():  Promise<MetadataRoute.Sitemap> => {
  const tests: TestCover[] = await getTests();

  const myoastTests = tests.map((test)=> ({
    url: `https://myoast.vercel.app/test/main/${test.id}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: 'https://myoast.vercel.app',
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
    ...myoastTests,
  ];
}
export default Sitemap;

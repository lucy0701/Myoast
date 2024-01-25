import { notFound } from 'next/navigation';

import TestMain from '@/containers/testMain';
import { getRandomTestAPI } from '@/services/test';
import { DOMAIN } from '@/constants/constant';

export async function generatMetadata() {
  const url = `${DOMAIN}/main`;
  const title = '몽빗[MongBit]';
  let description = 'MBTI 심리테스트 공작소';
  let imageUrl = `${DOMAIN}/common/opengraph-image`;

  return {
    title,
    description,
    openGraph: {
      description,
      type: 'website',
      title,
      url,
      images: [
        {
          url: imageUrl,
          alt: 'og_image',
        },
      ],
    },
  };
}

export default async function Page() {
  const testData = await getRandomTestAPI()
    .then(async (res) => res.data)
    .catch((err) => err);
  if (!testData) return notFound;
  return <TestMain testData={testData} />;
}

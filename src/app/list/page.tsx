import { notFound } from 'next/navigation';

import TestList from '@/containers/testList';
import { getTestListAPI } from '@/services/test';
import { DOMAIN } from '@/constants/constant';

export async function generateMetadata() {
  const url = `${DOMAIN}/list`;
  const title = '몽빗 [무료 | MBTI 심리테스트]';
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
  const testData = await getTestListAPI()
    .then((res) => res.data);
  if (!testData) return notFound;
  return <TestList testData={testData} />;
}

import { notFound } from 'next/navigation';

import TestLatest from '@/containers/testLatest';
import { getLatestListAPI } from '@/services/test';
import { DOMAIN } from '@/constants/constant';

export async function generateMetadata() {
  const url = `${DOMAIN}/latest`;
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
  const testLatestData = await getLatestListAPI('0','5').then((res) => res.data.testCoverDTOList);
  if (!testLatestData) return notFound;
  return <TestLatest testLatestData={testLatestData} />;
}

import { notFound } from 'next/navigation';

import TestMain from '@/containers/testMain';
import { getTestAPI } from '@/services/test';
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

interface Props {
  params: {
    testId: string;
  };
}
export default async function Page({ params: { testId } }: Props) {
  const testData = await getTestAPI(testId).then(async (res) => res.data);
  if (!testData) return notFound;
  return <TestMain testData={testData} />;
}

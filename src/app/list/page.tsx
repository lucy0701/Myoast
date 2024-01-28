import TestList from '@/containers/testList';
import { DOMAIN, DOMAIN_BE_PROD } from '@/constants/constant';
import { getHeaders } from '@/utils/util';
import { TestCover } from '@/types/test';

export async function generateMetadata() {
  const url = `${DOMAIN}/list`;
  const title = '묘스트 [무료 | MBTI 심리테스트]';
  let description = '묘스트와 함께 하는 MBTI 심리테스트';
  let imageUrl = `${DOMAIN}/list/opengraph-image`;

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
  const headers = getHeaders();
  const testListData = await fetch(`${DOMAIN_BE_PROD}/api/v1/tests`, { headers }).then((res) => res.json() as Promise<TestCover[]>);
  return <TestList testData={testListData} />;
}

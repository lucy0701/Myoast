import TestList from '@/containers/testList';
import { DOMAIN, DOMAIN_BE_PROD } from '@/constants/constant';
import { getHeaders } from '@/utils/util';
import { TestCover } from '@/types/test';

export async function generateMetadata() {
  const url = `${DOMAIN}/list`;
  const title = '묘스트';
  let description = '묘스트의 모든 테스트는 여기에!';
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
  try {
    const headers = getHeaders();
    const testListData = await fetch(`${DOMAIN_BE_PROD}/api/v1/tests`, { headers })
      .then((res) => res.json() as Promise<TestCover[]>)
      .catch((error) => {
        console.error('Error fetching test list:', error);
        return [];
      });

    return <TestList testData={testListData} title="전체 테스트 🥰" content={`묘스트의 모든 테스트가 있어요! (${testListData.length}개)`} backPage="/list" />;
  } catch (error) {
    console.error('Error fetching test list:', error);
    return <div>테스트 목록을 불러오는 중 오류가 발생했습니다.</div>;
  }
}

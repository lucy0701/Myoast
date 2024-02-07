import {
  DOMAIN,
  DOMAIN_BE_PROD,
  LATEST_PAGE,
  LATEST_SIZE,
} from '@/constants/constant';
import { getHeaders } from '@/utils/util';
import { TestCover, TestCoverResponse } from '@/types/test';
import Main from '@/containers/main';

export async function generateMetadata() {
  const url = `${DOMAIN}/`;
  const title = '묘스트(MYOAST)';
  let description = '묘스트와 함께하는 MBTI검사와 심리테스트!';
  let imageUrl = `${DOMAIN}/main/opengraph-image`;

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
    const testListData = await fetch(`${DOMAIN_BE_PROD}/api/v1/tests`, {
      headers,
    }).then((res) => res.json() as Promise<TestCover[]>);
    const latestListData = await fetch(
      `${DOMAIN_BE_PROD}/api/v1/tests/${LATEST_PAGE}/${LATEST_SIZE}`,
      { headers },
    ).then((res) => res.json() as Promise<TestCoverResponse>);
    return (
      <Main
        testListData={testListData}
        latestListData={latestListData.testCoverDTOList}
      />
    );
  } catch (error) {
    console.error('Error fetching data:', error);
    return <div>데이터를 불러오는 중 오류가 발생했습니다.</div>;
  }
}

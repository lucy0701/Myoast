import { DOMAIN, DOMAIN_BE_PROD, LATEST_PAGE, LATEST_SIZE } from '@/constants/constant';
import { getHeaders } from '@/utils/util';
import { TestCover, TestCoverResponse } from '@/types/test';

import Main from '../containers/main';

export async function generateMetadata() {
  const url = `${DOMAIN}/`;
  const title = '묘스트';
  let description = 'MBTI검사, 심리테스트! 묘스트에서 즐겨요!';
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
  const headers = getHeaders();
  const testListData = await fetch(`${DOMAIN_BE_PROD}/api/v1/tests`, { headers }).then(
    (res) => res.json() as Promise<TestCover[]>,
  );
  const latestListData = await fetch(`${DOMAIN_BE_PROD}/api/v1/tests/${LATEST_PAGE}/${LATEST_SIZE}`, { headers }).then(
    (res) => res.json() as Promise<TestCoverResponse>,
  );
  return <Main testListData={testListData} latestListData={latestListData.testCoverDTOList} />;
}

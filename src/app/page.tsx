import { DOMAIN, DOMAIN_BE_PROD, LATEST_PAGE, LATEST_SIZE } from '@/constants/constant';
import { getHeaders } from '@/utils/util';
import { TestCover, TestCoverResponse } from '@/types/test';

import Main from '../containers/main';

export async function generateMetadata() {
  const url = `${DOMAIN}`;
  const title = '묘스트 [무료 | MBTI 심리테스트]';
  let description = '묘스트의 MBTI 심리테스트';
  let imageUrl = `${DOMAIN}/opengraph-image`;

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

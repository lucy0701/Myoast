import { DOMAIN, DOMAIN_BE_PROD, LATEST_PAGE, LATEST_SIZE } from '@/constants/constant';
import { getHeaders } from '@/utils/util';
import { TestCoverResponse } from '@/types/test';
import TestList from '@/containers/testList';

export async function generateMetadata() {
  const url = `${DOMAIN}/latest`;
  const title = '묘스트';
  let description = '묘스트의 신규 테스트';
  let imageUrl = `${DOMAIN}/latest/opengraph-image`;

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
  const latestListData = await fetch(`${DOMAIN_BE_PROD}/api/v1/tests/${LATEST_PAGE}/${LATEST_SIZE}`, { headers }).then(
    (res) => res.json() as Promise<TestCoverResponse>,
  );
  return (
    <TestList
      testData={latestListData.testCoverDTOList}
      title="최신 테스트 🐥"
      content="따끈 따끈한 갓 구운 테스트!"
      backPage="/latest"
    />
  );
}

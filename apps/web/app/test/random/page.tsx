import TestMain from '@/containers/testMain';
import { getHeaders } from '@/utils/util';
import { Test } from '@/types/test';
import { DOMAIN_BE_PROD } from '@/constants/constant';

export default async function Page() {
  try {
    const headers = getHeaders();
    const randomTestData = await fetch(
      `${DOMAIN_BE_PROD}/api/v1/tests/random`,
      { headers },
    ).then((res) => res.json() as Promise<Test>);
    return <TestMain testData={randomTestData} />;
  } catch (error) {
    console.error('Error fetching data:', error);
    return <div>데이터를 불러오는 중 오류가 발생했습니다.</div>;
  }
}

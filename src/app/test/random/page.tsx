import TestMain from '@/containers/testMain';
import { getHeaders } from '@/utils/util';
import { Test } from '@/types/test';
import { DOMAIN_BE_PROD } from '@/constants/constant';

export default async function Page() {
  const headers = getHeaders();
  const randomTestData = await fetch(`${DOMAIN_BE_PROD}/api/v1/tests/random`, { headers }).then((res) => res.json() as Promise<Test>);
  return <TestMain testData={randomTestData} />;
}

import { DOMAIN_BE_PROD } from '@/constants/constant';
import TestMain from '@/containers/testMain';
import { MbtiTestCover } from '@/types/test';
import { getHeaders } from '@/utils/util';

interface Props {
  params: {
    testId: string;
  };
}
export default async function Page({ params: { testId } }: Props) {
  const headers = getHeaders();
  const testData = await fetch(
    `${DOMAIN_BE_PROD}/api/v1/tests/test/${testId}`,
    { headers },
  ).then((res) => res.json() as Promise<MbtiTestCover>);

  return <TestMain testData={testData.test} />;
}

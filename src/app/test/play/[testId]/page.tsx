// import { notFound } from 'next/navigation';

import TestPlay from '@/containers/testPlay';
import { getTestAPI } from '@/services/test';

interface Props {
  params: {
    testId: string;
  };
}
export default async function Page({ params: { testId } }: Props) {
  const testData = await getTestAPI(testId)
    .then(async (res) => res.data.questions)
    .catch((err) => err);
  // if (!testData) return notFound;
  return <TestPlay testData={testData} />;
}

import { notFound } from 'next/navigation';

import TestMain from '@/containers/testMain';
import { getTestAPI } from '@/services/test';

interface Props {
  params: {
    testId: string;
  };
}
export default async function Page({ params: { testId } }: Props) {
  const testData = await getTestAPI(testId).then(async (res) => res.data);
  if (!testData) return notFound;
  return <TestMain testData={testData} />;
}

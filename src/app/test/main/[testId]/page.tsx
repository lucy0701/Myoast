import { notFound } from 'next/navigation';

import TestMain from '@/containers/testMain';
import { apiBe } from '@/services';
import { Test } from '@/types/test';
import { getHeaders } from '@/utils/util';

interface Props {
  params: {
    testId: string;
  };
}
export default async function Page({ params: { testId } }: Props) {
  const headers = getHeaders();
  const testData = await apiBe<Test>(`/v1/tests/test/${testId}`, { headers }).then(async (res) => {
    if (!res.data) {
      return null;
    }
    return { ...res.data };
  });
  if (!testData) return notFound;
  return <TestMain testData={testData} />;
}

import { notFound } from 'next/navigation';

import { apiBe } from '@/services';
import { Test } from '@/types/test';
import { getHeaders } from '@/utils/util';
import TestMain from '@/containers/testMain';

export default async function Page() {
  const headers = getHeaders();
  const testData = await apiBe<Test>(`v1/tests/random`, { headers }).then(async (res) => {
    if (!res.data) {
      return null;
    }
    return { ...res.data };
  });
  if (!testData) return notFound;
  return <TestMain testData={testData} />;
}

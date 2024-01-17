import { notFound } from 'next/navigation';

import TestMain from '@/containers/testMain';
import { getRandomTestAPI } from '@/services/test';

export default async function Page() {
  const testData = await getRandomTestAPI().then(async (res) => res.data).catch((err)=> err);
  if (!testData) return notFound;
  return <TestMain testData={testData} />;
}

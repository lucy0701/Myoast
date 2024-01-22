import { notFound } from 'next/navigation';

import TestList from '@/containers/TestList';
import { getTestListAPI } from '@/services/test';

export default async function Page() {
  const testData = await getTestListAPI()
    .then((res) => res.data);
  if (!testData) return notFound;
  return <TestList testData={testData} />;
}

import { notFound } from 'next/navigation';

import TestList from '@/containers/testList';
import { getTestListAPI } from '@/services/test';

export default async function Page() {
  const testListData = await getTestListAPI()
    .then((res) => res.data)
    .catch((error) => error);
  if (!testListData) return notFound;
  return <TestList testListData={testListData} />;
}

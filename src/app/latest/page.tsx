import { notFound } from 'next/navigation';

import TestLatest from '@/containers/TestLatest';
import { getLatestListAPI } from '@/services/test';

export default async function Page() {
  const testLatestData = await getLatestListAPI('0','5').then((res) => res.data.testCoverDTOList);
  if (!testLatestData) return notFound;
  return <TestLatest testLatestData={testLatestData} />;
}

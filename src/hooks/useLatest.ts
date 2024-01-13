import { useState } from 'react';

import { getLatestListAPI } from '@/services/latest';
import { TestAll } from '@/types/test';

export const useLatest = () => {
  const [latestList, setLatestList] = useState<TestAll[]>();

  const getLatestList = async (id: string) => {
    try {
      const response = await getLatestListAPI(id);
      if (response) {
        setLatestList(response.data.testCoverDTOList);
      }
    } catch (error) {
      alert(error);
    }
  };

  return {
    getLatestList,
    latestList,
  };
};

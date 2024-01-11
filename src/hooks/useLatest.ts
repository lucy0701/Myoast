import { useState } from 'react';

import { TestArr } from '@/types/testArr';
import { getLatestsAPI } from '@/services/latest';

export const useLatest = () => {
  const [latests, setLatest] = useState<TestArr[]>();

  const getLatests = async (id: string) => {
    try {
      const response = await getLatestsAPI(id);
      if (response) {
        setLatest(response.data.testCoverDTOList);
      }
    } catch (error) {
      alert(error);
    }
  };

  return {
    getLatests,
    latests
  };
};

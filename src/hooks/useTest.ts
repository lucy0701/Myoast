import { useEffect, useState } from 'react';

import { TestArr } from '@/types/testArr';
import { getTestAPI, getTestsAPI } from '@/services/test';

export const useTest = () => {
  const [tests, setTests] = useState<TestArr[]>();

  const getTestList = async () => {
    try {
      const response = await getTestsAPI();
      if (response) {
        setTests(response.data);
      }
    } catch (error) {
      alert(error);
    }
  };

  const getTests = async (id:string) => {
    try {
      const response = await getTestAPI(id);
      if (response) {
        setTests([response.data]);
      }
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    getTestList();
  }, []);
  return {
    tests,
    getTests
  };
};

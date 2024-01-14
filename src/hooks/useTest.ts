'use client';

import { useState } from 'react';

import { Test, TestAll } from '@/types/test';
import { getLatestListAPI, getTestAPI } from '@/services/test';

export const useTest = () => {
  const [tsetData, setTestData] = useState<Test>();
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

  const getTest = async (testid: string) => {
    try {
      const res = await getTestAPI(testid);
      if (res) {
        setTestData(res.data);
      }
    } catch (errer) {
      alert(errer);
    }
  };

  return {
    getTest,
    tsetData,
    getLatestList,
    latestList,
  };
};

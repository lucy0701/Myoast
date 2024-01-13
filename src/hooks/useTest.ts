'use client';

import { useEffect, useState } from 'react';

import { Questions, TestAll } from '@/types/test';
import { getTestAPI, getTestListAPI } from '@/services/test';

export const useTest = () => {
  const [testList, setTestList] = useState<TestAll[]>();
  const [questions, setQuestions] = useState<Questions[]>();


  const getTestList = async () => {
    try {
      const response = await getTestListAPI();
      if (response) {
        setTestList(response.data);
      }
    } catch (error) {
      alert(error);
    }
  };

  const getQuestions =async (testid:string) => {
    try {
      const response = await getTestAPI(testid);
      if(response) {
        setQuestions(response.data.questions);
      }
    }catch (errer) {
      alert(errer)
    }
  }

  useEffect(() => {
    getTestList();
  }, []);

  return {
    testList,
    getQuestions,
    questions
  };
};

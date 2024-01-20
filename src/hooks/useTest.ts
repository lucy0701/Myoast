import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { Test, TestCover, TestResultData } from '@/types/test';
import {
  getLatestListAPI,
  getTestAPI,
  postTestResultAPI,
  postMemberTestResultAPI,
  getTestResultAPI,
} from '@/services/test';

export const useTest = () => {
  const [tsetData, setTestData] = useState<Test>();
  const [latestList, setLatestList] = useState<TestCover[]>();
  const [testResultData, setTestResultData] = useState<TestResultData>();

  const router = useRouter();

  const getLatestListData = async (page: string, size:string) => {
    try {
      const res = await getLatestListAPI(page,size);
      if (res) {
        setLatestList(res.data.testCoverDTOList);
      }
    } catch (err) {
      alert(err);
    }
  };

  const getTestData = async (testId: string) => {
    try {
      const res = await getTestAPI(testId);
      if (res) {
        setTestData(res.data);
      }
    } catch (err) {
      alert(err);
    }
  };

  const postTestResultData = async (testId: string, score: number[]) => {
    try {
      const res = await postTestResultAPI(testId, score);
      if (res) {
        setTestResultData(res.data);
      }
    } catch (err) {
      alert(err);
      router.push('/login');
    }
  };

  const getTestResultData = async (testId: string, testResultId: string) => {
    try {
      const res = await getTestResultAPI(testId, testResultId);
      if (res) {
        setTestResultData(res.data);
      }
    } catch (err) {
      alert(err);
      router.push('/login');
    }
  };

  const postMemberTestResultData = async (testId: string, memberId: string, score: number[]) => {
    try {
      const res = await postMemberTestResultAPI(testId, memberId, score);
      if (res) {
        setTestResultData(res.data);
      }
    } catch (err) {
      alert(err);
      router.push('/login');
    }
  };

  return {
    getTestData,
    tsetData,
    getLatestListData,
    latestList,
    postTestResultData,
    postMemberTestResultData,
    testResultData,
    getTestResultData,
  };
};

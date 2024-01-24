import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import { Test, TestCover, TestResultData } from '@/types/test';
import {
  getLatestListAPI,
  getTestAPI,
  postTestResultAPI,
  postMemberTestResultAPI,
  getTestResultAPI,
  getTestListAPI,
} from '@/services/test';
import SessionStorage from '@/utils/SessionStorage';
import { TEST_RESULT_ID, TEST_SCORE } from '@/constants/sessionStorage';

export const useTest = () => {
  const [tsetData, setTestData] = useState<Test>();
  const [latestList, setLatestList] = useState<TestCover[]>();
  const [testTestList, setTestList] = useState<TestCover[]>();
  const [testResultData, setTestResultData] = useState<TestResultData>();

  const router = useRouter();

  const getTestListData = async () => {
    try {
      const res = await getTestListAPI();
      if (res) {
        setTestList(res.data);
      }
    } catch (err) {
      alert(err);
    }
  };

  const getLatestListData = async (page: string, size: string) => {
    try {
      const res = await getLatestListAPI(page, size);
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

  const postTestResultData = async (testId: string, score: number[]) => {
    try {
      const res = await postTestResultAPI(testId, score);
      if (res) {
        setTestResultData(res.data);
        SessionStorage.removeItem(TEST_SCORE);
        SessionStorage.setItem(TEST_RESULT_ID, res.data.id);
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
        SessionStorage.removeItem(TEST_SCORE);
        SessionStorage.setItem(TEST_RESULT_ID, res.data.id);
      }
    } catch (err) {
      alert(err);
      router.push('/login');
    }
  };


  return {
    getTestListData,
    testTestList,
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

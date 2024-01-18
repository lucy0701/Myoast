import { useState } from 'react';

import { memberTestResultData } from '@/types/mypage';
import { getMemberTestResultAPI } from '@/services/mypage';
import { MypageData } from '@/types/mypage';

export const useMypage = () => {
  const [testResultList, setTestResultList] = useState<memberTestResultData>({
    memberTestResultDTOList: [
      {
        testId: '',
        testResultId: '',
        testDate: '',
        title: '',
        content: '',
        imageUrl: '',
      },
    ],
    hasNextPage: 0,
  });
  const getMemberTestResult = async (memberId: string, data: MypageData) => {
    try {
      const res = await getMemberTestResultAPI(memberId, data);
      if (res) {
        setTestResultList((prev) => ({
          ...prev,
          memberTestResultDTOList: res.data.memberTestResultDTOList,
          hasNextPage: res.data.hasNextPage,
        }));
      }
    } catch (err) {
      alert(err);
    }
  };
  return {
    testResultList,
    getMemberTestResult,
  };
};

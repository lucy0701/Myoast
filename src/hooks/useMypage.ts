import { useState } from 'react';

import { MemberTestResultDTOList, memberTestResultData } from '@/types/mypage';
import { getMemberTestResultAPI } from '@/services/mypage';

export const useMypage = () => {
  const [testResultList, setTestResultList] = useState<MemberTestResultDTOList[]>([]);
  const [isNextPage, setIsNextPage] = useState(0);
  const getMemberTestResult = async (memberId: string, page: number) => {
    const data = {
      page: page,
      size: 10,
    };
    try {
      const res = await getMemberTestResultAPI(memberId, data);
      if (res) {
        // setTestResultList(res.data.memberTestResultDTOList);
        setTestResultList((prev) => [...prev, ...res.data.memberTestResultDTOList]);
        setIsNextPage(res.data.hasNextPage);
      }
    } catch (err) {
      alert(err);
    }
  };
  return {
    testResultList,
    isNextPage,
    getMemberTestResult,
  };
};

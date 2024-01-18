'use client';

import { useEffect, useState } from 'react';

import { TYPE_MY_TEST_CARD } from '@/constants/constant';
import SessionStorage from '@/utils/SessionStorage';
import { MEMBER_ID, REGIST_DATA, THUMBNAIL, USER_INFO, USER_NAME } from '@/constants/sessionStorage';
import { useMypage } from '@/hooks/useMypage';
import { MypageData } from '@/types/mypage';

import Footer from '@/components/layout/Footer';
import styles from './index.module.css';
import { TestCard } from '@/components/layout/TestCard';
import Title from '@/components/common/Title';

export default function Mypage() {
  const { testResultList, getMemberTestResult } = useMypage();

  const [memberId, setMemberId] = useState<string | null>();
  const [userName, setUserName] = useState<string | null>();
  const [thumbnail, setThumbnail] = useState<string | null>();
  const [registDate, setRegistDate] = useState<string | null>();

  const mypageData: MypageData = {
    page: 0,
    size: 10,
  };

  useEffect(() => {
    setMemberId(SessionStorage.getItem(USER_INFO + MEMBER_ID));
    setUserName(SessionStorage.getItem(USER_INFO + USER_NAME));
    setThumbnail(SessionStorage.getItem(USER_INFO + THUMBNAIL));
    setRegistDate(SessionStorage.getItem(USER_INFO + REGIST_DATA));
  }, []);

  useEffect(() => {
    if (memberId) getMemberTestResult(memberId, mypageData);
  }, [memberId]);
  return (
    <div className={styles.wrap}>
      <Title title={'마이 페이지'} />
      <div className={styles.user}>이름 등등</div>
      {testResultList &&
        testResultList.memberTestResultDTOList &&
        testResultList.memberTestResultDTOList.map((ts, i) => (
          <div key={i} className={styles.cardList}>
            <TestCard
              testId={ts.testId}
              testResultId={ts.testResultId}
              testTitle={ts.title}
              imgUrl={ts.imageUrl}
              testResult={ts.content}
              type={TYPE_MY_TEST_CARD}
            />
          </div>
        ))}
      <Footer />
    </div>
  );
}

'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import {
  TYPE_MORE_BTN,
  TYPE_MY_TEST_CARD,
  TYPE_START_BTN,
} from '@/constants/commonType';
import SessionStorage from '@/utils/SessionStorage';
import {
  BACK_PAGE,
  BACK_PAGE_TEST,
  MEMBER_ID,
  REGIST_DATE,
  THUMBNAIL,
  USER_INFO,
  USER_NAME,
} from '@/constants/sessionStorage';
import { useMypage } from '@/hooks/useMypage';
import { dateSplit } from '@/utils/dateSplit';
import { decodeToken } from '@/utils/util';

import styles from './index.module.css';
import { TestCard } from '@/components/layout/TestCard';
import Title from '@/components/common/Title';
import Button from '@/components/common/Button';
import Image from 'next/image';

export default function Mypage() {
  const { testResultList, getMemberTestResult, isNextPage } = useMypage();

  const [memberId, setMemberId] = useState<string | null>();
  const [userName, setUserName] = useState<string | null>();
  const [thumbnail, setThumbnail] = useState<string | null>();
  const [registDate, setRegistDate] = useState<string | null>();
  const [page, setPage] = useState(0);
  const [isLogin, setIsLogin] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMemberId(SessionStorage.getItem(USER_INFO + MEMBER_ID));
    setUserName(SessionStorage.getItem(USER_INFO + USER_NAME));
    setThumbnail(SessionStorage.getItem(USER_INFO + THUMBNAIL));
    setRegistDate(SessionStorage.getItem(USER_INFO + REGIST_DATE));
  }, []);

  useEffect(() => {
    setIsLogin(decodeToken().state);
  }, [decodeToken().state]);

  useEffect(() => {
    if (memberId) {
      getMemberTestResult(memberId, page);
      setPage(page + 1);
    }
    if (registDate) setRegistDate(dateSplit(registDate));
    SessionStorage.setItem(BACK_PAGE, `/mypage/${memberId}`);
    SessionStorage.setItem(BACK_PAGE_TEST, '');
  }, [memberId]);

  const onClickMoreBtn = () => {
    if (memberId) getMemberTestResult(memberId, page);
    setPage(page + 1);
  };

  if (memberId && userName && thumbnail && registDate)
    return (
      <main className={styles.wrap}>
        <Title title={`${userName}님의 결과 모음`} />
        <div className={styles.userWrap}>
          <Image
            src={thumbnail}
            alt='thumbnail'
            className={styles.thumbnail}
            width={50}
            height={50}
          />
          <div className={styles.userinfoWrap}>
            <span className={styles.name}>{userName}</span>
            <span className={styles.date}>{registDate}</span>
          </div>
        </div>
        {testResultList ? (
          testResultList.map((ts, i) => (
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
          ))
        ) : (
          <div className={styles.noTest}>
            <span>테스트 결과가 없어요!</span>
            <Button
              onClick={() => router.push('/test/random')}
              skin={TYPE_START_BTN}>
              아무거나 시작
            </Button>
            <Button onClick={() => router.push('/list')} skin={TYPE_START_BTN}>
              전체 보기
            </Button>
          </div>
        )}
        <div className={isNextPage ? styles.btnWrap : styles.display_none}>
          <Button skin={TYPE_MORE_BTN} onClick={onClickMoreBtn}>
            더보기
          </Button>
        </div>
      </main>
    );
  if (!isLogin)
    return (
      <main className={styles.wrap}>
        <div className={styles.loginDisabled}>
          <div className={styles.loginDisabledTextBox}>
            <span>로그인이 되어 있지 않아요 🥲</span>
            <span>로그인 하고</span>
            <span>나의 결과 기록 하기</span>
          </div>
          <Button onClick={() => router.push('/login')} skin={TYPE_START_BTN}>
            로그인 하러 가기
          </Button>
        </div>
      </main>
    );
}

'use client';

import { useEffect, useState } from 'react';

import { TYPE_MORE_BTN, TYPE_MY_TEST_CARD, TYPE_START_BTN } from '@/constants/commonType';
import SessionStorage from '@/utils/SessionStorage';
import { BACK_PAGE, MEMBER_ID, REGIST_DATE, THUMBNAIL, USER_INFO, USER_NAME } from '@/constants/sessionStorage';
import { useMypage } from '@/hooks/useMypage';
import { dateSplit } from '@/utils/dateSplit';
import { decodeToken } from '@/utils/util';

import styles from './index.module.css';
import { TestCard } from '@/components/layout/TestCard';
import Title from '@/components/common/Title';
import Button from '@/components/common/Button';

export default function Mypage() {
  const { testResultList, getMemberTestResult, isNextPage } = useMypage();

  const [memberId, setMemberId] = useState<string | null>();
  const [userName, setUserName] = useState<string | null>();
  const [thumbnail, setThumbnail] = useState<string | null>();
  const [registDate, setRegistDate] = useState<string | null>();
  const [page, setPage] = useState(0);
  const [isLogin, setIsLogin] = useState(false);

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

  }, [memberId]);

  const onClickMoreBtn = () => {
    if (memberId) getMemberTestResult(memberId, page);
    setPage(page + 1);
  };

  if (memberId && userName && thumbnail && registDate)
    return (
      <div className={styles.wrap}>
        <Title title={`${userName}님의 결과 모음`} />
        <div className={styles.userWrap}>
          <img src={thumbnail} alt="thumbnail" className={styles.thumbnail} />
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
            <Button link={'/test/random'} skin={TYPE_START_BTN}>
              아무거나 시작
            </Button>
            <Button link={'/list'} skin={TYPE_START_BTN}>
              전체 보기
            </Button>
          </div>
        )}
        <div className={isNextPage ? styles.btnWrap : styles.display_none}>
          <Button skin={TYPE_MORE_BTN} onClick={onClickMoreBtn}>
            더보기
          </Button>
        </div>
      </div>
    );
  if (!isLogin)
    return (
      <div className={styles.wrap}>
        <div className={styles.loginDisabled}>
          <div className={styles.loginDisabledTextBox}>
            <span>로그인이 되어 있지 않아요 🥲</span>
            <span>로그인 하고</span>
            <span>나의 결과 저장 하기</span>
          </div>
          <Button link={'/login'} skin={TYPE_START_BTN}>
            로그인 하러 가기
          </Button>
        </div>
      </div>
    );
}

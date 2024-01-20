'use client';

import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';

import { TYPE_MORE_BTN, TYPE_MY_TEST_CARD, TYPE_START_BTN } from '@/constants/commonType';
import SessionStorage from '@/utils/SessionStorage';
import { MEMBER_ID, REGIST_DATA, THUMBNAIL, USER_INFO, USER_NAME } from '@/constants/sessionStorage';
import { useMypage } from '@/hooks/useMypage';
import { userInfo } from '@/states/sessionStorageEffect';

import Footer from '@/components/layout/Footer';
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

  useEffect(() => {
    setMemberId(SessionStorage.getItem(USER_INFO + MEMBER_ID));
    setUserName(SessionStorage.getItem(USER_INFO + USER_NAME));
    setThumbnail(SessionStorage.getItem(USER_INFO + THUMBNAIL));
    setRegistDate(SessionStorage.getItem(USER_INFO + REGIST_DATA));
  }, []);

  useEffect(() => {
    if (memberId) {
      getMemberTestResult(memberId, page);
      setPage(page + 1);
    }
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
        <Footer />
      </div>
    );
}

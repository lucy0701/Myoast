'use client';

import { useEffect, useState } from 'react';
import cx from 'classnames';

import { MAIN_PAGE_TEST_IMG, MAIN_PAGE_TEST_TITLE, OG_MBTI_TEST_IMAGE } from '@/constants/constant';
import { TEST_CARD_SIZE_L, TEST_CARD_SIZE_M, TYPE_START_BTN, TYPE_TEST_CARD } from '@/constants/commonType';
import { useTest } from '@/hooks/useTest';
import { BACK_PAGE, BACK_PAGE_TEST } from '@/constants/sessionStorage';
import SessionStorage from '@/utils/SessionStorage';

import Button from '@/components/common/Button';
import styles from './index.module.css';
import Title from '@/components/common/Title';
import { TestCard } from '@/components/layout/TestCard';

export default function Main() {
  const { latestList, getLatestListData } = useTest();
  // const [index, setIndex] = useState(0);
  // const totalSlides = testTestList?.length || 0;

  useEffect(() => {
    SessionStorage.setItem(BACK_PAGE, '/');
    SessionStorage.setItem(BACK_PAGE_TEST, '');
    getLatestListData('0', '6');
  }, []);

  // const autoSlide = () => {
  //   setIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  // };

  // useEffect(() => {
  //   const intervalId = setInterval(autoSlide, 3000);
  //   return () => clearInterval(intervalId);
  // }, [index, totalSlides]);

  return (
    <div className={styles.wrap}>
      <Title title="MBTI 검사" />
      <div className={styles.slideBox}>
        {/* <div className={styles.slideWrap} style={{ transform: `translateX(-${index * 100}%)` }}> */}
        <div className={styles.slideWrap}>
          {/* {testTestList?.map((t, i) => ( */}
          <div className={styles.slideItem}>
            <TestCard
              // testId={t.id}
              // testTitle={t.title}
              // imgUrl={t.imageUrl}
              testId={MAIN_PAGE_TEST_IMG}
              testTitle={MAIN_PAGE_TEST_TITLE}
              imgUrl={OG_MBTI_TEST_IMAGE}
              size={TEST_CARD_SIZE_L}
            />
          </div>
          {/* ))} */}
        </div>
      </div>
      <div className={styles.randomTast}>
        <Title title="랜덤 심리테스트" contents="일단 시작 하자" />
        <Button link="/test/random" skin={TYPE_START_BTN}>
          아무거나 시작
        </Button>
      </div>
      <Title title="최신 심테" />
      <div className={styles.newTestWrap}>
        {latestList?.map((t) => (
          // TODO: key에 index 쓰지말기
          <TestCard
            key={t.id}
            testId={t.id}
            testTitle={t.title}
            imgUrl={t.imageUrl}
            playCount={t.playCount}
            size={TEST_CARD_SIZE_M}
            type={TYPE_TEST_CARD}
          />
        ))}
      </div>
      <Button link="/list" skin={TYPE_START_BTN}>
        전체 보기
      </Button>
    </div>
  );
}

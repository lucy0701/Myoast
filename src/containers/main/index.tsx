'use client';

import { useEffect } from 'react';

import {
  OG_MBTI_TEST_IMAGE,
  TEST_CARD_SIZE_L,
  TEST_CARD_SIZE_M,
  TYPE_START_BTN,
  TYPE_TEST_CARD,
} from '@/constants/constant';
import { useTest } from '@/hooks/useTest';

import Button from '@/components/common/Button';
import styles from './index.module.css';
import Footer from '@/components/layout/Footer';
import Title from '@/components/common/Title';
import { TestCard } from '@/components/layout/TestCard';

export default function Main() {
  const { latestList, getLatestList } = useTest();

  useEffect(() => {
    getLatestList('6');
  }, []);

  return (
    <div className={styles.wrap}>
      <Title title={'MBTI 검사'} />
      <div className={styles.mbtiTast}>
        <TestCard
          testId={'649a7bccaa04db61384808c5'}
          testTitle={'신속하고 아마도 정확한 퀵 MBTI!'}
          imgUrl={OG_MBTI_TEST_IMAGE}
          size={TEST_CARD_SIZE_L}
        />
      </div>
      <div className={styles.randomTast}>
        <Title title={'랜덤 심리테스트'} contents={'일단 시작 하자'} />
        <Button link={'/test/random'} skin={TYPE_START_BTN}>
          아무거나 시작
        </Button>
      </div>
      <Title title={'최신 심테'} />
      <div className={styles.newTestWrap}>
        {latestList &&
          latestList.map((t, i) => (
            <TestCard
              key={i}
              testId={t.id}
              testTitle={t.title}
              imgUrl={t.imageUrl}
              playCount={t.playCount}
              size={TEST_CARD_SIZE_M}
              type={TYPE_TEST_CARD}
            />
          ))}
      </div>
      <Button link={'/list'} skin={TYPE_START_BTN}>
        전체 보기
      </Button>
      <Footer />
    </div>
  );
}

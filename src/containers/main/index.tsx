'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { MAIN_PAGE_TEST_IMG, MAIN_PAGE_TEST_TITLE, OG_MBTI_TEST_IMAGE } from '@/constants/constant';
import { TEST_CARD_SIZE_L, TEST_CARD_SIZE_M, TYPE_START_BTN, TYPE_TEST_CARD } from '@/constants/commonType';
import { BACK_PAGE, BACK_PAGE_TEST } from '@/constants/sessionStorage';
import SessionStorage from '@/utils/SessionStorage';
import { TestCover } from '@/types/test';

import Button from '@/components/common/Button';
import styles from './index.module.css';
import Title from '@/components/common/Title';
import { TestCard, TestMainBanner } from '@/components/layout/TestCard';

interface Props {
  testListData: TestCover[];
  latestListData: TestCover[];
}

export default function Main({ testListData, latestListData }: Props) {
  const router = useRouter();

  useEffect(() => {
    SessionStorage.setItem(BACK_PAGE, '/');
    SessionStorage.setItem(BACK_PAGE_TEST, '');
  }, []);

  return (
    <main className={styles.wrap}>
      <Swiper
        className={styles.slideWrap}
        modules={[Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        slidesPerGroup={1}
        speed={2000}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
      >
        {testListData.map((t, i) => (
          <SwiperSlide key={i} className={styles.slideItem}>
            <TestMainBanner testId={t.id} testTitle={t.title} imgUrl={t.imageUrl} size={TEST_CARD_SIZE_L} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.contentsWrap}>
        <Title title="쉽고 빠르게 ⚡️ MBTI 검사" contents="MBTI 궁금한데..귀찮지?! 그래서 준비했어!✨" />
        <div className={styles.mbtiTest}>
          <TestCard
            testId={MAIN_PAGE_TEST_IMG}
            testTitle={MAIN_PAGE_TEST_TITLE}
            imgUrl={OG_MBTI_TEST_IMAGE}
            size={TEST_CARD_SIZE_L}
          />
        </div>
        <div className={styles.randomTast}>
          <Title title="당신... 운명을 믿으시나요?" contents="🐣 어떤 테스트가 나올까?!" />
          <Button onClick={() => router.push('/test/random')} skin={TYPE_START_BTN}>
            오늘의 심리테스트
          </Button>
        </div>
        <Title title="NEW 🌈" />
        <div className={styles.newTestWrap}>
          {latestListData.map((t) => (
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
        <Button onClick={() => router.push('/list')} skin={TYPE_START_BTN}>
          묘스트의 모든 테스트
        </Button>
      </div>
    </main>
  );
}

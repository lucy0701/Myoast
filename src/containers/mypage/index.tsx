'use client';

import { TYPE_MY_TEST_CARD } from '@/constants/constant';

import Footer from '@/components/layout/Footer';
import styles from './index.module.css';
import TestCard from '@/components/common/TestCard';
import Title from '@/components/common/Title';

export default function Mypage() {
  return (
    <div className={styles.wrap}>
      <Title title={'마이 페이지'} />
      <div className={styles.user}>이름 등등</div>
      <div className={styles.cardList}>
        <TestCard
          link={'/'}
          type={TYPE_MY_TEST_CARD}
          testTitle={'리리 귀여1워111111111111111111'}
          testResult={'122222'}
        >
          <img src="/images/test/card.jpeg" alt={'MBTI'} />
        </TestCard>
        <TestCard link={'/'} type={TYPE_MY_TEST_CARD} testTitle={'리리 귀여1워111111111111111111'} testResult={'123'}>
          <img src="/images/test/card.jpeg" alt={'MBTI'} />
        </TestCard>
        <TestCard link={'/'} type={TYPE_MY_TEST_CARD} testTitle={'리리 귀여1워111111111111111111'} testResult={'123'}>
          <img src="/images/test/card.jpeg" alt={'MBTI'} />
        </TestCard>
      </div>

      <Footer />
    </div>
  );
}

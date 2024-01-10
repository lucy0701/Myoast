'use client';

import { TEST_CARD_SIZE_L } from '@/constants/constant';

import Footer from '@/components/layout/Footer';
import styles from './index.module.css';
import TestCard from '@/components/common/TestCard';
import Title from '@/components/common/Title';

export default function TestLatest() {
  return (
    <div className={styles.wrap}>
      <Title title={'최신 테스트'} contents={'신규 테스트는 여기에'} />
      <div className={styles.cardList}>
        <div className={styles.card}>
          <TestCard link={'/'} size={TEST_CARD_SIZE_L} testTitle={'리리 귀여워'}>
            <img src="/images/test/card.jpeg" alt={'MBTI'} />
          </TestCard>
          <span>123123</span>
        </div>
        <div className={styles.card}>
          <TestCard link={'/'} size={TEST_CARD_SIZE_L} testTitle={'리리 귀여워'}>
            <img src="/images/test/card.jpeg" alt={'MBTI'} />
          </TestCard>
          <span>123123</span>
        </div>
        <div className={styles.card}>
          <TestCard link={'/'} size={TEST_CARD_SIZE_L} testTitle={'리리 귀여워'}>
            <img src="/images/test/card.jpeg" alt={'MBTI'} />
          </TestCard>
          <span>123123</span>
        </div>
      </div>
      <Footer />
    </div>
  );
}

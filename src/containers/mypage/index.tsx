'use client';

import { TYPE_MY_TEST_CARD } from '@/constants/constant';
import { testData1 } from '@/utils/testData';

import Footer from '@/components/layout/Footer';
import styles from './index.module.css';
import { TestCard } from '@/components/common/TestCard';
import Title from '@/components/common/Title';

export default function Mypage() {
  return (
    <div className={styles.wrap}>
      <Title title={'마이 페이지'} />
      <div className={styles.user}>이름 등등</div>
      <div className={styles.cardList}>
        <TestCard
          link={'/test/result'}
          testTitle={testData1.testTitle}
          imgUrl={testData1.imgUrl}
          playCount={testData1.playCount}
          testResult={testData1.testResult}
          type={TYPE_MY_TEST_CARD}
        ></TestCard>
      </div>
      <Footer />
    </div>
  );
}

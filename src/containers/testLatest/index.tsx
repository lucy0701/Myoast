'use client';
import { testData1 } from'@/utils/testData';

import Footer from '@/components/layout/Footer';
import styles from './index.module.css';
import Title from '@/components/common/Title';
import TestCardList from '@/components/layout/TestCardList';

export default function TestLatest() {
  return (
    <div className={styles.wrap}>
      <Title title={'최신 테스트'} contents={'신규 테스트는 여기에'} />
      <TestCardList
        link={'/'}
        testTitle={testData1.testTitle}
        imgUrl={testData1.imgUrl}
        playCount={testData1.playCount}
        likeCount={testData1.likeCount}
        commentCount={testData1.commentCount}
      />
      <Footer />
    </div>
  );
}

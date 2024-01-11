'use client';
import { TEST_CARD_SIZE_L, TYPE_START_BTN } from '@/constants/constant';
import { testData1 } from '@/utils/testData';

import Button from '@/components/common/Button';
import styles from './index.module.css';
import Footer from '@/components/layout/Footer';
import Title from '@/components/common/Title';
import NewTests from './Latest';
import { TestCard } from '@/components/common/TestCard';

export default function Main() {
  return (
    <div className={styles.wrap}>
      <Title title={'MBTI 검사'} />
      <div className={styles.mbtiTast}>
        <TestCard
          link={'/test/main'}
          testTitle={testData1.testTitle}
          imgUrl={testData1.imgUrl}
          size={TEST_CARD_SIZE_L}
        />
      </div>
      <div className={styles.randomTast}>
        <Title title={'랜덤 심리테스트'} contents={'일단 시작 하자'} />
        <Button skin={TYPE_START_BTN}>아무거나 하기</Button>
      </div>
      <NewTests
        link={'/test/main'}
        testTitle={testData1.testTitle}
        imgUrl={testData1.imgUrl}
        playCount={testData1.playCount}
      />
      <Button link={'/test/list'} skin={TYPE_START_BTN}>
        전체 보기
      </Button>
      <Footer />
    </div>
  );
}

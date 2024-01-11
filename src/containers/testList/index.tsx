'use client';

import { TYPE_BOTTOM_BTN } from '@/constants/constant';
import { testData1 } from '@/utils/testData';

import styles from './index.module.css';
import Title from '@/components/common/Title';
import Button from '@/components/common/Button';
import TestCardList from '@/components/layout/TestCardList';

export default function TestList() {
  return (
    <div className={styles.wrap}>
      <Title title={'전체 테스트'} contents={'모든 테스트가 있어요!'} />
      <TestCardList
        link={'/'}
        testTitle={testData1.testTitle}
        imgUrl={testData1.imgUrl}
        playCount={testData1.playCount}
        likeCount={testData1.likeCount}
        commentCount={testData1.commentCount}
      />
      <Button link={'/'} skin={TYPE_BOTTOM_BTN}>
        아무거나 시작
      </Button>
    </div>
  );
}

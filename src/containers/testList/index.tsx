'use client';

import { useEffect } from 'react';

import { TYPE_BOTTOM_BTN } from '@/constants/commonType';
import { TestCover } from '@/types/test';
import SessionStorage from '@/utils/SessionStorage';
import { BACK_PAGE, BACK_PAGE_TEST } from '@/constants/sessionStorage';

import styles from './index.module.css';
import Title from '@/components/common/Title';
import Button from '@/components/common/Button';
import TestCardList from '@/components/layout/TestCardList';

interface Props {
  testData: TestCover[];
}
export default function TestList({ testData }: Props) {

  useEffect(() => {
    SessionStorage.setItem(BACK_PAGE, '/list');
    SessionStorage.setItem(BACK_PAGE_TEST, '');
  }, []);

  return (
    <div className={styles.wrap}>
      <Title title={'전체 테스트 🥰'} contents={'묘스트의 모든 테스트가 있어요!'} />
      <div className={styles.cardList}>
        {testData?.map((t) => (
          <TestCardList
            key={t.id}
            testId={t.id}
            testTitle={t.title}
            imgUrl={t.imageUrl}
            playCount={t.playCount}
            likeCount={t.likeCount}
            commentCount={t.commentCount}
          />
        ))}
      </div>
      <Button link="/test/random" skin={TYPE_BOTTOM_BTN}>
        아무거나 시작
      </Button>
    </div>
  );
}

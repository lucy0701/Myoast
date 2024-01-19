'use client';

import { TYPE_BOTTOM_BTN } from '@/constants/commonType';
import { TestCover } from '@/types/test';

import styles from './index.module.css';
import Title from '@/components/common/Title';
import Button from '@/components/common/Button';
import TestCardList from '@/components/layout/TestCardList';

interface Props {
  testData: TestCover[];
}
export default function TestList(props: Props) {
  const { testData } = props;
  return (
    <div className={styles.wrap} >
      <Title title={'전체 테스트'} contents={'모든 테스트가 있어요!'} />
      <div className={styles.cardList}>
        {testData &&
          testData.map((t, i) => (
            <TestCardList
              key={i}
              testId={t.id}
              testTitle={t.title}
              imgUrl={t.imageUrl}
              playCount={t.playCount}
              likeCount={t.likeCount}
              commentCount={t.commentCount}
            />
          ))}
      </div>
      <Button link={'/test/random'} skin={TYPE_BOTTOM_BTN} >
        아무거나 시작
      </Button>
    </div>
  );
}

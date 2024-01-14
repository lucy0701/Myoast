'use client';

import { TYPE_BOTTOM_BTN } from '@/constants/constant';
import { TestAll } from '@/types/test';

import styles from './index.module.css';
import Title from '@/components/common/Title';
import TestCardList from '@/components/layout/TestCardList';
import Button from '@/components/common/Button';

interface Props {
  testLatestData: [TestAll];
}

export default function TestLatest(props: Props) {
  const { testLatestData } = props;

  return (
    <div className={styles.wrap}>
      <Title title={'최신 테스트'} contents={'신규 테스트는 여기에'} />
      <div className={styles.cardList}>
        {testLatestData &&
          testLatestData.map((t, i) => (
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
      <Button link={'/test/random'} skin={TYPE_BOTTOM_BTN}>
        아무거나 시작
      </Button>
    </div>
  );
}

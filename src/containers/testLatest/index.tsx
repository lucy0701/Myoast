'use client';
import { useEffect } from 'react';

import { useLatest } from '@/hooks/useLatest';
import { TYPE_BOTTOM_BTN } from '@/constants/constant';

import styles from './index.module.css';
import Title from '@/components/common/Title';
import TestCardList from '@/components/layout/TestCardList';
import Button from '@/components/common/Button';

export default function TestLatest() {
  const { latestList, getLatestList } = useLatest();
  useEffect(() => {
    getLatestList('5');
  }, []);

  return (
    <div className={styles.wrap}>
      <Title title={'최신 테스트'} contents={'신규 테스트는 여기에'} />
      <div className={styles.cardList}>
        {latestList &&
          latestList.map((t, i) => (
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

'use client';
import { useEffect } from 'react';

import { useLatest } from '@/hooks/useLatest';
import { TYPE_BOTTOM_BTN } from '@/constants/constant';

import styles from './index.module.css';
import Title from '@/components/common/Title';
import TestCardList from '@/components/layout/TestCardList';
import Button from '@/components/common/Button';

export default function TestLatest() {
  const { latests, getLatests } = useLatest();
  useEffect(() => {
    getLatests('5');
  }, []);
  return (
    <div className={styles.wrap}>
      <Title title={'최신 테스트'} contents={'신규 테스트는 여기에'} />
      <div className={styles.cardList}>
        {latests &&
          latests.map((t, i) => (
            <TestCardList
              key={i}
              link={'/'}
              testTitle={t.title}
              imgUrl={t.imageUrl}
              playCount={t.playCount}
              likeCount={t.likeCount}
              commentCount={t.commentCount}
            />
          ))}
      </div>
      <Button link={'/'} skin={TYPE_BOTTOM_BTN}>
        아무거나 시작
      </Button>
    </div>
  );
}

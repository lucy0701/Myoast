'use client';

import { TYPE_BOTTOM_BTN } from '@/constants/constant';
import { useTest } from '@/hooks/useTest';

import styles from './index.module.css';
import Title from '@/components/common/Title';
import Button from '@/components/common/Button';
import TestCardList from '@/components/layout/TestCardList';

export default function TestList() {
  const { testList } = useTest();

  return (
    <div className={styles.wrap}>
      <Title title={'전체 테스트'} contents={'모든 테스트가 있어요!'} />
      <div className={styles.cardList}>
        {testList &&
          testList.map((t, i) => (
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
      <Button link={'/'} skin={TYPE_BOTTOM_BTN}>
        아무거나 시작
      </Button>
    </div>
  );
}

'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { TYPE_BOTTOM_BTN } from '@/constants/commonType';
import { TestCover, TestCoverResponse } from '@/types/test';
import { BACK_PAGE, BACK_PAGE_TEST } from '@/constants/sessionStorage';
import SessionStorage from '@/utils/SessionStorage';

import styles from './index.module.css';
import Title from '@/components/common/Title';
import TestCardList from '@/components/layout/TestCardList';
import Button from '@/components/common/Button';

interface Props {
  testLatestData: TestCover[];
}

export default function TestLatest({ testLatestData }: Props) {
  const router = useRouter();

  useEffect(() => {
    SessionStorage.setItem(BACK_PAGE, '/latest');
    SessionStorage.setItem(BACK_PAGE_TEST, '');
  }, []);

  return (
    <main className={styles.wrap}>
      <Title title="최신 테스트 🐥" contents="묘스트 신규 테스트" />
      <div className={styles.cardList}>
        {testLatestData.map((t) => (
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
      <Button onClick={() => router.push('/test/random')} skin={TYPE_BOTTOM_BTN}>
        아무거나 시작
      </Button>
    </main>
  );
}

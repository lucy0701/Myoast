'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

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
  title: string;
  content: string;
  backPage: string;
}
export default function TestList({ testData, title, content, backPage }: Props) {
  const router = useRouter();

  useEffect(() => {
    SessionStorage.setItem(BACK_PAGE, backPage);
    SessionStorage.setItem(BACK_PAGE_TEST, '');
  }, []);

  return (
    <main className={styles.wrap}>
      <Title title={title} contents={content} />
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
      <Button onClick={() => router.push('/test/random')} skin={TYPE_BOTTOM_BTN}>
        아무거나 시작
      </Button>
    </main>
  );
}

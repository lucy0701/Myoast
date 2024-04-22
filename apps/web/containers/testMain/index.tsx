'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { TYPE_PLAY_CNT, TYPE_START_BTN, TYPE_TEST_MAIN } from '@/constants/commonType';
import { Test } from '@/types/test';
import { useComment } from '@/hooks/useComment';
import SessionStorage from '@/utils/SessionStorage';
import { BACK_PAGE, BACK_PAGE_TEST } from '@/constants/sessionStorage';
import { contentArr } from '@/utils/textArr';

import { MainTestCard } from '@/components/layout/TestCard';
import CountIcon from '@/components/common/Count';
import Button from '@/components/common/Button';
import CountBtn from '@/components/layout/CountBtn';
import AddComment from '@/components/layout/AddComment';
import Comments from '@/components/layout/Comments';
import styles from './index.module.css';

interface Props {
  testData: Test;
}

export default function TestMain({ testData }: Props) {
  const { commentListData, commentCount, getCommentCount } = useComment();
  const content = contentArr(testData.content);
  const router = useRouter();

  useEffect(() => {
    SessionStorage.setItem(BACK_PAGE, '/test/main/');
    SessionStorage.setItem(BACK_PAGE_TEST, testData.id);
    getCommentCount(testData.id);
  }, []);

  if (commentListData) {
    return (
      <main className={styles.wrap}>
        <div className={styles.testCardImg}>
          <MainTestCard testTitle={testData.title} imgUrl={testData.imageUrl} />
          <CountIcon playCount={testData.playCount} type={TYPE_PLAY_CNT} />
        </div>
        <div className={styles.textBox}>
          {content.map((text, i) => (
            <p key={i}>{text}</p>
          ))}
        </div>
        <Button onClick={() => router.push(`/test/play/${testData.id}`)} skin={TYPE_START_BTN}>
          테스트 시작
        </Button>
        <CountBtn testId={testData.id} testData={testData} type={TYPE_TEST_MAIN} />
        <AddComment testId={testData.id} commentCount={commentCount} />
        <Comments testId={testData.id} />
      </main>
    );
  }
}

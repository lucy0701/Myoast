'use client';

import { useEffect } from 'react';

import { TYPE_PLAY_CNT, TYPE_START_BTN } from '@/constants/commonType';
import { Test } from '@/types/test';
import { useComment } from '@/hooks/useComment';

import { MainTestCard } from '@/components/layout/TestCard';
import CountIcon from '@/components/common/Count';
import Button from '@/components/common/Button';
import CountBtn from '@/components/layout/CountBtn';
import AddComment from '@/components/layout/AddComment';
import Comments from '@/components/layout/Comments';
import Footer from '@/components/layout/Footer';
import styles from './index.module.css';

interface Props {
  testData: Test;
}
export default function TestMain(props: Props) {
  const { testData } = props;
  const { commentList, getCommentList, commentCount, getCommentCount } = useComment();

  useEffect(() => {
    getCommentList(testData.id, '0');
    getCommentCount(testData.id);
  }, []);

  if (commentList) {
    return (
      <div className={styles.wrap}>
        <div>
          <MainTestCard testTitle={testData.title} imgUrl={testData.imageUrl} />
          <CountIcon playCount={testData.playCount} type={TYPE_PLAY_CNT} />
        </div>
        <div className={styles.textBox}>
          <p>{testData.content}</p>
        </div>
        <Button link={`/test/play/${testData.id}`} skin={TYPE_START_BTN}>
          테스트 시작
        </Button>
        <CountBtn testId={testData.id} testData={testData} type={'testMain'} />
        <AddComment testId={testData.id} commentCount={commentCount} />
        <Comments commentList={commentList} />
        <Footer />
      </div>
    );
  }
}

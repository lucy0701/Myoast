'use client';

import { useParams } from 'next/navigation';
import { useEffect } from 'react';

import { TYPE_BOTTOM_BTN } from '@/constants/constant';
import { useComment } from '@/hooks/useComment';
import { useTest } from '@/hooks/useTest';

import Button from '@/components/common/Button';
import CountBtn from '@/components/layout/CountBtn';
import AddComment from '@/components/layout/AddComment';
import styles from './index.module.css';
import Comments from '@/components/layout/Comments';

export default function TestResultRecord() {
  const params = useParams();
  const { testResultData, getTestResultData } = useTest();
  const { commentList, getCommentList, commentCount, getCommentCount } = useComment();

  useEffect(() => {
    getTestResultData(params.testId, params.testResultId);
    getCommentList(params.testId, '0');
    getCommentCount(params.testId);
  }, []);

  if (testResultData && commentList) {
    return (
      <div className={styles.wrap}>
        <div className={styles.resultImg}>
          <img src={testResultData.imageUrl} alt="test" />
        </div>
        <h2 className={styles.tsetTitle}>{testResultData.title}</h2>
        <div className={styles.textBox}>
          <p>{testResultData.content}</p>
        </div>
        <CountBtn testId={params.testId} type={'tsetResult'} />
        <AddComment testId={params.testId} commentCount={commentCount} />
        <Comments commentList={commentList} />
        <Button skin={TYPE_BOTTOM_BTN}>테스트 결과 공유하기</Button>
      </div>
    );
  }
}

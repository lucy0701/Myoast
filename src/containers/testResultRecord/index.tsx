'use client';

import { useParams } from 'next/navigation';
import { useEffect } from 'react';

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
  const { commentListData, getCommentList, commentCount, getCommentCount } = useComment();

  useEffect(() => {
    getTestResultData(params.testId, params.testResultId);
    getCommentList(params.testId, '0');
    getCommentCount(params.testId);
  }, []);

  if (testResultData && commentListData) {
    return (
      <div className={styles.wrap}>
        <div className={styles.resultImg}>
          <img src={testResultData.imageUrl} alt="test" />
        </div>
        <h2 className={styles.tsetTitle}>{testResultData.title}</h2>
        <div className={styles.textBox}>
          <p>{testResultData.content}</p>
        </div>
        <CountBtn testData={testResultData} testId={params.testId} type={'tsetResult'} />
        <AddComment testId={params.testId} commentCount={commentCount} />
        <Comments testId={params.testId} />
      </div>
    );
  }
}

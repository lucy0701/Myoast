'use client';

import { useParams } from 'next/navigation';
import { useEffect } from 'react';

import { useComment } from '@/hooks/useComment';
import { useTest } from '@/hooks/useTest';
import { contentArr } from '@/utils/textArr';
import { TYPE_TEST_RESULT } from '@/constants/commonType';

import CountBtn from '@/components/layout/CountBtn';
import AddComment from '@/components/layout/AddComment';
import styles from './index.module.css';
import Comments from '@/components/layout/Comments';

export default function TestResultRecord() {
  const params = useParams<{ [key: string]: string }>();
  const { testResultData, getTestResultData } = useTest();
  const { commentListData, getCommentList, commentCount, getCommentCount } =
    useComment();
  const content = contentArr(testResultData ? testResultData.content : '');

  useEffect(() => {
    getTestResultData(params.testId, params.testResultId);
    getCommentList(params.testId, '0');
    getCommentCount(params.testId);
  }, []);

  if (testResultData && commentListData) {
    return (
      <main className={styles.wrap}>
        <div className={styles.resultWrap}>
          <div className={styles.resultImg}>
            <img src={testResultData.imageUrl} alt='TestResultImage' />
          </div>
          <div className={styles.titleWrap}>
            <h2 className={styles.tsetTitle}>{testResultData.title}</h2>
          </div>
          <div className={styles.textWrap}>
            {content.map((text, i) => (
              <div key={i} className={styles.textBox}>
                <div className={styles.circle} />
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
        <CountBtn
          testData={testResultData}
          testId={params.testId}
          resultId={params.testResultId}
          type={TYPE_TEST_RESULT}
        />
        <div className={styles.resultWrap_botton}>
          <AddComment testId={params.testId} commentCount={commentCount} />
          <Comments testId={params.testId} />
        </div>
      </main>
    );
  }
}

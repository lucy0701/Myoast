'use client';

import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import { decodeToken } from '@/utils/util';
import { useComment } from '@/hooks/useComment';
import { useTest } from '@/hooks/useTest';
import { MEMBER_ID, USER_INFO } from '@/constants/sessionStorage';
import SessionStorage from '@/utils/SessionStorage';

import CountBtn from '@/components/layout/CountBtn';
import AddComment from '@/components/layout/AddComment';
import styles from './index.module.css';
import Comments from '@/components/layout/Comments';

export default function TestResult() {
  const params = useParams();
  const { commentList, getCommentList, commentCount, getCommentCount } = useComment();
  const { postTestResultData, postMemberTestResultData, testResultData } = useTest();

  const [memberId, setMemberId] = useState<string | null>(null);

  useEffect(() => {
    setMemberId(SessionStorage.getItem(USER_INFO + MEMBER_ID));
    getCommentList(params.testId, '0');
    getCommentCount(params.testId);
  }, []);

  useEffect(() => {
    const storedScore = SessionStorage.getItem('mbScore');
    const score = storedScore !== null ? JSON.parse(storedScore) : null;

    if (decodeToken().state && memberId) {
      postMemberTestResultData(params.testId, memberId, score);
    } else if (!decodeToken().state) {
      postTestResultData(params.testId, score);
    }
  }, [memberId]);

  if (testResultData && commentList) {
    return (
      <div className={styles.wrap}>
        <div className={styles.resultWrap}>
          <div className={styles.resultImg}>
            <img src={testResultData.imageUrl} alt="test" />
          </div>
          <h2 className={styles.tsetTitle}>{testResultData.title}</h2>
          <div className={styles.textBox}>
            <p>{testResultData.content}</p>
          </div>
        </div>
        <CountBtn testData={testResultData} testId={params.testId} type={'tsetResult'} />
        <div className={styles.resultWrap_botton}>
          <AddComment testId={params.testId} commentCount={commentCount} />
          <Comments commentList={commentList} />
        </div>
      </div>
    );
  }
}

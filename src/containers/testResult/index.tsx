'use client';

import { useParams } from 'next/navigation';
import { useEffect } from 'react';

import { TYPE_BOTTOM_BTN } from '@/constants/constant';
import { decodeToken } from '@/utils/util';
import { useComment } from '@/hooks/useComment';
import { useLike } from '@/hooks/useLike';
import { useTest } from '@/hooks/useTest';
import { MEMBER_ID, USER_INFO } from '@/constants/sessionStorage';

import Button from '@/components/common/Button';
import { ResultCountBtn } from '@/components/layout/CountBtn';
import AddComment from '@/components/layout/AddComment';
import styles from './index.module.css';
import Comments from '@/components/layout/Comments';

export default function TestResult() {
  const params = useParams();
  const { getLikeCount, likeCount } = useLike();
  const { commentList, getCommentList, commentCount, getCommentCount } = useComment();
  const { postTestResultData, postMemberTestResultData, testResultData } = useTest();

  const memberId = sessionStorage.getItem(USER_INFO + MEMBER_ID);
  const storedScore = sessionStorage.getItem('mbScore');
  const score = storedScore !== null ? JSON.parse(storedScore) : null;

  useEffect(() => {
    if (decodeToken().state && memberId) {
      postMemberTestResultData(params.testId, memberId, score);
    } else {
      postTestResultData(params.testId, score);
    }
    getLikeCount(params.testId);
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
        <ResultCountBtn likeCount={likeCount} />
        <AddComment testId={params.testId} commentCount={commentCount} />
        <Comments commentList={commentList} />
        <Button skin={TYPE_BOTTOM_BTN}>테스트 결과 공유하기</Button>
      </div>
    );
  }
}

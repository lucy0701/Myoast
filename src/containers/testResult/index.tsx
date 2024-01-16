'use client';

import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import axios from 'axios';

import { DOMAIN_BE_PROD, TYPE_BOTTOM_BTN } from '@/constants/constant';
import { decodeToken, getHeaders } from '@/utils/util';
import { TestResultData } from '@/types/test';
import { useComment } from '@/hooks/useComment';
import { useLike } from '@/hooks/useLike';

import Button from '@/components/common/Button';
import { ResultCountBtn } from '@/components/layout/CountBtn';
import AddComment from '@/components/layout/AddComment';
import styles from './index.module.css';
import Comments from '@/components/layout/Comments';

export default function TestResult() {
  const router = useRouter();
  const params = useParams();
  const { getLikeCount, likeCount } = useLike();
  const { commentList, getCommentList, commentCount, getCommentCount } = useComment();

  const [testData, setTestData] = useState<TestResultData>();

  const storedScore = sessionStorage.getItem('mbScore');
  const score = storedScore !== null ? JSON.parse(storedScore) : null;
  const headers = getHeaders();

  useEffect(() => {
    if (decodeToken().state) {
      axios
        .post(
          `${DOMAIN_BE_PROD}/api/v1/member-test-result/${params.testId}/${sessionStorage.getItem('mongBitmemeberId')}`,
          score,
          { headers },
        )
        .then((res) => {
          setTestData(res.data);
          // sessionStorage.removeItem('mbScore');
          // sessionStorage.setItem('mbResultId', res.data.id);
        })
        .catch((err) => {
          alert(err.response.data);
          router.push('/login');
        });
    } else {
      axios
        .post(`${DOMAIN_BE_PROD}/api/v1/member-test-result/${params.testId}`, score, { headers })
        .then((res) => {
          setTestData(res.data);
          // sessionStorage.removeItem('mbScore');
          // sessionStorage.setItem('mbResultId', res.data.id);
        })
        .catch((err) => {
          alert(err.response.data);
          router.push('/login');
        });
    }
  }, []);

  useEffect(() => {
      getLikeCount(params.testId);
      getCommentList(params.testId, '0');
      getCommentCount(params.testId);
  }, [testData]);

  if (testData && commentList) {
    return (
      <div className={styles.wrap}>
        <div className={styles.resultImg}>
          <img src={testData.imageUrl} alt="test" />
        </div>
        <h2 className={styles.tsetTitle}>{testData.title}</h2>
        <div className={styles.textBox}>
          <p>{testData.content}</p>
        </div>
        <ResultCountBtn likeCount={likeCount}></ResultCountBtn>
        <AddComment commentCount={commentCount} />
        <Comments commentList={commentList} />
        <Button skin={TYPE_BOTTOM_BTN}>테스트 결과 공유하기</Button>
      </div>
    );
  }
}

'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import cx from 'classnames';

import { useComment } from '@/hooks/useComment';
import { useTest } from '@/hooks/useTest';
import { BACK_PAGE, BACK_PAGE_TEST, MEMBER_ID, TEST_SCORE, USER_INFO } from '@/constants/sessionStorage';
import SessionStorage from '@/utils/SessionStorage';
import { decodeToken } from '@/utils/util';
import { contentArr } from '@/utils/textArr';

import CountBtn from '@/components/layout/CountBtn';
import AddComment from '@/components/layout/AddComment';
import styles from './index.module.css';
import Comments from '@/components/layout/Comments';
import ResultLoading from '@/components/layout/ResultLoading';

export default function TestResult() {
  const params = useParams();
  const { commentListData, getCommentList, commentCount, getCommentCount } = useComment();
  const { postTestResultData, postMemberTestResultData, testResultData } = useTest();
  const [memberId, setMemberId] = useState<string | null>(null);
  const content = contentArr(testResultData ? testResultData.content : '');
  const [loading, setLoding] = useState(true);

  useEffect(() => {
    SessionStorage.setItem(BACK_PAGE, '/result/');
    SessionStorage.setItem(BACK_PAGE_TEST, params.testId);
    setMemberId(SessionStorage.getItem(USER_INFO + MEMBER_ID));
    getCommentList(params.testId, '0');
    getCommentCount(params.testId);
  }, []);

  useEffect(() => {
    const storedScore = SessionStorage.getItem(TEST_SCORE);
    const score = storedScore !== null ? JSON.parse(storedScore) : null;
    if (decodeToken().state && memberId) {
      postMemberTestResultData(params.testId, memberId, score);
    } else if (!decodeToken().state) {
      postTestResultData(params.testId, score);
    }
    const timer = setTimeout (()=> {
      setLoding(false);
    },3000);

    return () => {
      clearTimeout(timer);
    };
  }, [memberId]);

  if (testResultData && commentListData) {
    return (
      <div className={styles.wrap}>
        {loading && <ResultLoading />}
        <div className={cx({ [styles.displayNone]: loading })}>
          <div className={cx(styles.resultWrap, { [styles.displayNone]: loading })}>
            <div className={styles.resultImg}>
              <img src={testResultData.imageUrl} alt="test" />
            </div>
            <div className={styles.titleWrap}>
              <h2 className={styles.tsetTitle}>{testResultData.title}</h2>
            </div>
            <div className={styles.textWrap}>
              {content.map((text, i) => (
                <div key={i} className={styles.textBox}>
                  <p> * </p>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
          <CountBtn testData={testResultData} testId={params.testId} type={'tsetResult'} />
          <div className={styles.resultWrap_botton}>
            <AddComment testId={params.testId} commentCount={commentCount} />
            <Comments testId={params.testId} />
          </div>
        </div>
      </div>
    );
  }
}

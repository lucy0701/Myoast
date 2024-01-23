'use client';

import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import cx from 'classnames';
import { useRecoilState } from 'recoil';

import { useComment } from '@/hooks/useComment';
import { useTest } from '@/hooks/useTest';
import {
  BACK_PAGE,
  BACK_PAGE_TEST,
  COUPANG_VISIT,
  MEMBER_ID,
  TEST_RESULT_ID,
  TEST_SCORE,
  USER_INFO,
} from '@/constants/sessionStorage';
import SessionStorage from '@/utils/SessionStorage';
import { decodeToken } from '@/utils/util';
import { contentArr } from '@/utils/textArr';
import { isCoupangState } from '@/states/isCoupangState';
import { TYPE_TEST_RESULT } from '@/constants/commonType';

import CountBtn from '@/components/layout/CountBtn';
import AddComment from '@/components/layout/AddComment';
import styles from './index.module.css';
import Comments from '@/components/layout/Comments';
import ResultLoading from '@/components/layout/ResultLoading';
import CoupangBanner_1 from '@/components/lib/CoupangBanner_1';
import CoupangPage from '@/components/lib/CoupangPage';

export default function TestResult() {
  const params = useParams();
  const router = useRouter();

  const { commentListData, getCommentList, commentCount, getCommentCount } = useComment();
  const { postTestResultData, postMemberTestResultData, testResultData } = useTest();
  const [memberId, setMemberId] = useState<string | null>(null);
  const content = contentArr(testResultData ? testResultData.content : '');
  const [isloading, setIsLoding] = useState(true);
  const [isCoupang, setIsCoupang] = useRecoilState(isCoupangState);

  useEffect(() => {
    SessionStorage.setItem(BACK_PAGE, '/result/');
    SessionStorage.setItem(BACK_PAGE_TEST, params.testId);
    setMemberId(SessionStorage.getItem(USER_INFO + MEMBER_ID));
    getCommentList(params.testId, '0');
    getCommentCount(params.testId);
    checkCoupangSiteVisit();
  }, []);

  useEffect(() => {
    const storedScore = SessionStorage.getItem(TEST_SCORE);
    const score = storedScore !== null ? JSON.parse(storedScore) : null;

    if (!score) {
      return router.push(`/record/${params.testId}/${SessionStorage.getItem(TEST_RESULT_ID)}`);
    }
    if (decodeToken().state && memberId && !testResultData) {
      postMemberTestResultData(params.testId, memberId, score);
    } else if (!decodeToken().state && !testResultData) {
      postTestResultData(params.testId, score);
    }
    const timer = setTimeout(() => {
      setIsLoding(false);
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [memberId]);

  function isWithin12Hours(date1: number, date2: number) {
    const oneDay = 12 * 60 * 60 * 1000;
    const diff = Math.abs(date1 - date2);
    return diff < oneDay;
  }
  function checkCoupangSiteVisit() {
    const coupangVisitData = localStorage.getItem(COUPANG_VISIT);
    if (!coupangVisitData) {
      setIsCoupang(true);
      return;
    }
    const coupangVisitDate = new Date(coupangVisitData);
    const currentDate = new Date();
    if (!isWithin12Hours(coupangVisitDate.getTime(), currentDate.getTime())) setIsCoupang(true);
  }

  if (testResultData && commentListData) {
    return (
      <div className={styles.wrap}>
        {isloading && <ResultLoading />}
        {isCoupang && (
          <div className={cx(styles.coupangWrap, { [styles.displayNone]: isloading })}>
            <CoupangPage />
          </div>
        )}
        <div className={cx({ [styles.displayNone]: isloading }, { [styles.resultWrap_height]: isCoupang })}>
          <div className={styles.resultWrap}>
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
          <div className={cx({ [styles.displayNone]: isCoupang })}>
            <CountBtn testData={testResultData} testId={params.testId} resultId={testResultData.id} type={TYPE_TEST_RESULT} />
          </div>
          <div>
            <CoupangBanner_1 />
          </div>
          <div className={styles.resultWrap_botton}>
            <AddComment testId={params.testId} commentCount={commentCount} />
            <Comments testId={params.testId} />
          </div>
        </div>
      </div>
    );
  }
}

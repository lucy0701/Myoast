'use client';
import cx from 'classnames';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import { TYPE_ANSWER_BTN } from '@/constants/commonType';
import { Question } from '@/types/test';
import SessionStorage from '@/utils/SessionStorage';
import { TEST_SCORE } from '@/constants/sessionStorage';

import Button from '@/components/common/Button';
import styles from './index.module.css';

interface Props {
  testData: [Question];
}

export default function TestPlay({ testData } : Props) {
  const router = useRouter();
  const params = useParams();

  const arryLength = testData.length;
  const initialArray = Array(arryLength).fill(0);
  const [putArr, setPutArr] = useState(initialArray);

  const [qstStageIndex, setQstStageIndex] = useState(0);
  const [score, setScore] = useState([0, 0, 0, 0]);

  const [testDone, setTestDone] = useState({
    state: false,
    lastClick: false,
  });

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (testDone.lastClick) {
      timer = setTimeout(() => {
        setTestDone((prev) => ({ ...prev, state: true }));
      }, 1000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [testDone.lastClick]);

  useEffect(() => {
    if (testDone.state) {
      SessionStorage.setItem(TEST_SCORE, JSON.stringify(score));
      router.push(`/result/${params.testId}`);
    }
  }, [testDone.state]);

  function makeScore() {
    setTestDone((prve) => ({ ...prve, lastClick: true }));
    const calculate = (start: number, end: number) => putArr.slice(start, end).reduce((acc, value) => acc + value, 0);
    const score = [0, 1, 2, 3].map((index) => calculate(index * 3, (index + 1) * 3));
    setScore(score);
  }

  const handleOnClick = () => {
    if (testData && qstStageIndex !== arryLength - 1) {
      setQstStageIndex(qstStageIndex + 1);
    } else if (qstStageIndex === arryLength - 1) {
      makeScore();
    }
  };

  const onClickPlusBtn = () => {
    putArr[qstStageIndex] = 1;
    setPutArr([...putArr]);
    handleOnClick();
  };
  const onClickMinusBtn = () => {
    putArr[qstStageIndex] = -1;
    setPutArr([...putArr]);
    handleOnClick();
  };
  const calculateWidth = (index: number) => {
    const percentage = ((index + 1) / arryLength) * 100;
    return `${percentage}%`;
  };

  if (testData) {
    return (
      <main className={styles.wrap}>
        <div className={styles.playWrap}>
          <div className={styles.progressBarWrap}>
            <div className={styles.barWrap}>
              <div className={styles.gaugeBar} style={{ width: calculateWidth(qstStageIndex) }} />
            </div>
            <p>
              질문<span>{Math.min(qstStageIndex + 1, arryLength)}</span>/{arryLength}
            </p>
          </div>
          {testData.map(
            (q) =>
              qstStageIndex === q.index && (
                <div key={q.index} className={cx(styles.contentWarp, { [styles.contentWarpNone]: false })}>
                  <div className={styles.questionWrap}>
                    <p>{q.question}</p>
                  </div>
                  <div className={styles.answerWrap}>
                    <Button skin={TYPE_ANSWER_BTN} onClick={onClickPlusBtn}>
                      {q.answerPlus}
                    </Button>
                    <Button skin={TYPE_ANSWER_BTN} onClick={onClickMinusBtn}>
                      {q.answerMinus}
                    </Button>
                  </div>
                </div>
              ),
          )}
        </div>
      </main>
    );
  }
}

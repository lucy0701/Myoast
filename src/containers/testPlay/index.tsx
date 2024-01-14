'use client';
import cx from 'classnames';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import { TYPE_ANSWER_BTN } from '@/constants/constant';
import { Questions } from '@/types/test';

import Button from '@/components/common/Button';
import Footer from '@/components/layout/Footer';
import styles from './index.module.css';

interface Props {
  testData: [Questions];
}

export default function TestPlay(props:Props) {
  const router = useRouter();
  const { testData } = props;
  const { ...params } = useParams();
  const initialArray = Array(12).fill(0);

  const [testDone, setTestDone] = useState({
    state: false,
    lastClick: false,
  });

  const [score, setScore] = useState([0, 0, 0, 0]);
  const [qstStageIndex, setQstStageIndex] = useState(0);
  const [putArr, setPutArr] = useState(initialArray);


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
      sessionStorage.setItem('mbScore', JSON.stringify(score));
      sessionStorage.setItem('mbTestDone', JSON.stringify(true));
      return router.push(`/result/${params.testId}`);
    }
  }, [testDone.state]);

  function makeScore() {
    setTestDone((prve) => ({ ...prve, lastClick: true }));
    const part_1 = putArr[0] + putArr[1] + putArr[2];
    const part_2 = putArr[3] + putArr[4] + putArr[5];
    const part_3 = putArr[6] + putArr[7] + putArr[8];
    const part_4 = putArr[9] + putArr[10] + putArr[11];
    setScore([part_1, part_2, part_3, part_4]);
  }

  const hendleOnClick = () => {
    if (testData && qstStageIndex <= testData.length - 1) {
      setQstStageIndex(qstStageIndex + 1);
    } else if (testData && qstStageIndex === testData.length) {
      makeScore();
    }
  };

  const onClickYesBtn = () => {
    hendleOnClick();
    putArr[qstStageIndex] = 1;
    setPutArr([...putArr]);
  };
  const onClickNoBtn = () => {
    hendleOnClick();
    putArr[qstStageIndex] = -1;
    setPutArr([...putArr]);
  };
  const calculateWidth = (index: number) => {
    const percentage = ((index + 1) / initialArray.length) * 100;
    return `${percentage}%`;
  };

  if (testData) {
    return (
      <div className={styles.wrap}>
        <div className={styles.playWrap}>
          <div className={styles.progressBarWrap}>
            <div className={styles.barWrap}>
              <div className={styles.gaugeBar} style={{ width: calculateWidth(qstStageIndex) }} />
            </div>
            <p>
              질문<span>{qstStageIndex + 1}</span>/{testData.length}
            </p>
          </div>
          {testData.map(
            (q, i) =>
              qstStageIndex === q.index && (
                <div key={i} className={cx(styles.contentWarp, { [styles.contentWarpNone]: false })}>
                  <div className={styles.questionWrap}>
                    <p>{q.question}</p>
                  </div>
                  <div className={styles.answerWrap}>
                    <Button skin={TYPE_ANSWER_BTN} onClick={onClickYesBtn}>
                      {q.answerPlus}
                    </Button>
                    <Button skin={TYPE_ANSWER_BTN} onClick={onClickNoBtn}>
                      {q.answerMinus}
                    </Button>
                  </div>
                </div>
              ),
          )}
        </div>
        <Footer />
      </div>
    );
  }
}

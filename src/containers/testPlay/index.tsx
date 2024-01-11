'use client';

import Button from '@/components/common/Button';
import Footer from '@/components/layout/Footer';
import { TYPE_ANSWER_BTN } from '@/constants/constant';
import styles from './index.module.css';

export default function TestPlay() {
  return (
    <div className={styles.wrap}>
      <div className={styles.playWrap}>
        <div className={styles.progressBarWrap}>
          <div className={styles.barWrap}>
            <div className={styles.gaugeBar} />
          </div>
          <p>질문<span>1</span>/11</p>
        </div>
        <div className={styles.questionWrap}>
          <p>질문qweqweqweq1Assaddasdsdfdsfqwe</p>
        </div>
        <div className={styles.answerWrap}>
          <Button skin={TYPE_ANSWER_BTN}>네</Button>
          <Button skin={TYPE_ANSWER_BTN}>아니요</Button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

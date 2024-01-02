'use client';

import styles from './index.module.css';

export default function Main() {
  return (
    <div className={styles.containerWrap}>
      <p>title : 👀 랜덤 심리테스트</p>
      <p>button : 아무거나 시작</p>
      <div className={styles.testWrap}>
        <p>title : 🌟 심테의 근본, MBTI 검사</p>
        <p>TestCard : 신속하고 아마도 정확한 퀵 MBTI!</p>
        <div className={styles.miniTestWrap}>
          <p>title : 💙 최신 심테</p>
          <div className={styles.latesCardWrap}>
            <p>TestCard : 총 6개</p>
          </div>
        </div>
      </div>
    </div>
  );
}

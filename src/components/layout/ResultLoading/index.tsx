import Lottie from 'lottie-web';
import { useEffect, useRef } from 'react';

import animationData from './loadingIcon.json';
import styles from './index.module.css';

export default function ResultLoading() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const anim = Lottie.loadAnimation({
      container: containerRef.current as Element,
      renderer: 'svg',
      animationData: animationData,
      loop: true,
      autoplay: true,
    });

    return () => {
      anim.destroy();
    };
  }, [containerRef]);

  return (
    <div className={styles.wrap}>
      <div className={styles.banner}>배너자리</div>
      <div className={styles.content}>
        <span>결과 계산 중...!</span>
        <span>잠깐만 기다려 주셈!</span>
      </div>
      <div>
        <div ref={containerRef} className={styles.loadImg}></div>
      </div>
      <div className={styles.banner}>배너자리</div>
    </div>
  );
}

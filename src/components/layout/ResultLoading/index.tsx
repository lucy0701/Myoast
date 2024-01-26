import Lottie from 'lottie-web';
import { useEffect, useRef } from 'react';

import animationData from './loadingIcon.json';
import styles from './index.module.css';
import CoupangBanner_1 from '../../lib/CoupangBanner_1';
import CoupangBanner_2 from '@/components/lib/CoupangBanner_2';

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
      <CoupangBanner_1 />
      <div className={styles.contentWrap}>
        <div className={styles.content}>
          <span>결과 계산 중...!</span>
          <span>잠깐만 기다려 주셈!</span>
        </div>
        <div>
          <div ref={containerRef} className={styles.loadImg} />
        </div>
      </div>
      <CoupangBanner_2 />
      {/* <Footer /> */}
    </div>
  );
}

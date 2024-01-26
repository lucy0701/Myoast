'use client';
// import { useEffect, useRef } from 'react';
// import Lottie from 'lottie-web';

import styles from './index.module.css';
// import animationData from './loadingIcon.json';

export default function Loading() {
  // const containerRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const anim = Lottie.loadAnimation({
  //     container: containerRef.current as Element,
  //     renderer: 'svg',
  //     animationData: animationData,
  //     loop: true,
  //     autoplay: true,
  //   });
  //   return () => {
  //     anim.destroy();
  //   };
  // }, []);

  return (
    <div className={styles.wrap}>
      {/* <div ref={containerRef} className={styles.loadImg} /> */}
      <p>Loding...</p>
    </div>
  );
}

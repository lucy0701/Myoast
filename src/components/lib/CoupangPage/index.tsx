'use client';
import { useEffect, useRef, useState } from 'react';
import { useSetRecoilState } from 'recoil';

import { isCoupangState } from '@/states/isCoupangState';

import styles from './index.module.css';
import CoupangBanner_result from '../CoupangBanner_result';

export default function CoupangPage() {
  const setIsCoupang = useSetRecoilState(isCoupangState);
  const coupangBtnRef = useRef<HTMLButtonElement>(null);
  const [count, setCount] = useState(7);

  useEffect(() => {
    const onClickCoupangBtn = () => {
      const link = 'https://link.coupang.com/a/2s6aq';
      window.open(link, '_blank');
    };
    if (typeof window !== 'undefined' && coupangBtnRef.current) {
      coupangBtnRef.current.addEventListener('click', onClickCoupangBtn);
    }

    return () => {
      if (typeof window !== 'undefined' && coupangBtnRef.current) {
        coupangBtnRef.current.removeEventListener('click', onClickCoupangBtn);
      }
    };
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);

    return () => {
      // clearInterval: 시간 간격으로 콜백
      clearInterval(intervalId);
    };
  }, []);

  const onClickCloseBtn = () => {
    setIsCoupang(false);
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.contentsWrap}>
        <button ref={coupangBtnRef} id="coupangBtn" className={styles.button}>
          쿠팡 다녀와서 결과 확인 하기
        </button>
        <div className={styles.bannerWrap}>
          <button className={styles.closeBtn} onClick={onClickCloseBtn} disabled={count > 0}>
            {count > 0 ? `${count}` : 'X'}
          </button>
          <CoupangBanner_result />
        </div>
        <div className={styles.textBox}>
          <p>쿠팡 다녀오면</p>
          <p>12시간 동안 광고 없이 무제한 이용</p>
        </div>
      </div>
    </div>
  );
}

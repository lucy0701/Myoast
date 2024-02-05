'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import setKakaoLogin from '@/services/kakaoLogin';
import { decodeToken } from '@/utils/util';
import { BACK_PAGE, BACK_PAGE_TEST } from '@/constants/sessionStorage';
import SessionStorage from '@/utils/SessionStorage';

import styles from './index.module.css';

export default function Login() {
  const router = useRouter();
  const backPage = SessionStorage.getItem(BACK_PAGE);
  const backPageTest = SessionStorage.getItem(BACK_PAGE_TEST);

  useEffect(() => {
    if (decodeToken().state && backPage) {
      return router.push(backPage + backPageTest);
    } else if (decodeToken().state) {
      return router.push('/');
    }
  }, []);

  return (
    <main className={styles.wrap}>
      <div className={styles.contentsWrap}>
        <div className={styles.text}>
          <p>3초만에 로그인하고</p>
          <h2>
            무료로 성격 검사 <br /> 친구에게 공유
          </h2>
        </div>
        <div className={styles.logoimg}>
          <img src='/images/logoIcon.png' alt='logo' />
          <p>© 2023 MongMoongCrew. All rights reserved </p>
        </div>
        <button className={styles.loginBtn} onClick={() => setKakaoLogin()} />
      </div>
    </main>
  );
}

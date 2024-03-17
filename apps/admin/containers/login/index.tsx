'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { decodeToken } from '@/utils/util';
import styles from './index.module.css';
import setKakaoLogin from '@/services/kakaoLogin';

export default function Login() {
  const router = useRouter();

  useEffect(() => {
    if (decodeToken().state) {
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
          <p>© 2023 MongMoongCrew. All rights reserved </p>
        </div>
        <button className={styles.loginBtn} onClick={() => setKakaoLogin()} />
      </div>
    </main>
  );
}

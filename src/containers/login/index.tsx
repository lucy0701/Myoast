'use client';
import Footer from '@/components/layout/Footer';
import styles from './index.module.css';
import { KAKAO_AUTH_URL } from './kakako_login';

export default function Login() {
  const kakaoLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  }
  return (
    <div className={styles.wrap}>
      <div className={styles.contentsWrap}>
        <div className={styles.text}>
          <p>3초만에 로그인하고</p>
          <h2>
            무료로 성격 검사 <br /> 친구에게 공유
          </h2>
        </div>
        <div className={styles.logoimg}>
          <img src="/images/og_logo.png" alt="logo" />
          <p>© 2023 MongMoongCrew. All rights reserved </p>
        </div>
        <button className={styles.loginBtn} onClick={()=>kakaoLogin()} />
      </div>
      <Footer />
    </div>
  );
}

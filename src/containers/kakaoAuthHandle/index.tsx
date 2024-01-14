'use client';
import { useRouter } from 'next/router';
import axios from 'axios';
import { useEffect } from 'react';

import { DOMAIN_BE_PROD, TOKEN_NAME, USER_INFO } from '@/constants/constant';
import { decodeToken, getHeaders } from '@/utils/util';

import styles from './index.module.css';
import Footer from '@/components/layout/Footer';

export default function KaKaoAuthHandle() {
  // 인가 코드

  useEffect(() => {
    const router = useRouter();
    // 클라이언트 내에서만 실행
    if (typeof window !== 'undefined') {
      const searchParams = new URLSearchParams(window.location.search);
      let code = searchParams.get('code');
      let headers = getHeaders();
      // code, headers 전송, 받아온 user정보 session 저장
      // 로그인 전이므로 headers은 undefind임
      if (code) {
        axios
          .get(`${DOMAIN_BE_PROD}/login/oauth2/kakao/code?code=${code}`, { headers })
          .then((response) => {
            sessionStorage.setItem(TOKEN_NAME, response.headers['authorization']);
            sessionStorage.setItem(USER_INFO + 'memeberId', response.data.memberId);
            sessionStorage.setItem(USER_INFO + 'username', response.data.username);
            sessionStorage.setItem(USER_INFO + 'thumbnail', response.data.thumbnail);
            sessionStorage.setItem(USER_INFO + 'registDate', response.data.registDate);

            const prev = sessionStorage.getItem('ngb');
            // 로그인 후, 생성된 토큰 정보를 저장하기 위해 다시 호출
            headers = getHeaders();

            if (!decodeToken()?.role || decodeToken()?.role === 'ROLE_USER') {
              axios
                .post(`${DOMAIN_BE_PROD}/api/v1/loginTracker/${response.data.memberId}/track`, {}, { headers })
                .catch((err) => {
                  alert(err.responsw.daga);
                  router.push('/login');
                });
            }

            if (prev) {
              sessionStorage.setItem('ngb', 'false');
              prev.indexOf('need_login') > -1 ? router.back() : router.push(prev);
            } else {
              router.push('/');
            }
          })
          .catch((err) => {
            alert(err.response.data);
            router.push('/login');
          });
      }
    }
  }, []);

  return (
    <div className={styles.wrap}>
      <div className={styles.content}></div>
      <Footer />
    </div>
  );
}

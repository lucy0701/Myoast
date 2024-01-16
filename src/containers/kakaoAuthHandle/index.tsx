'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import axios from 'axios';
import { useEffect } from 'react';

import { DOMAIN_BE_PROD, TOKEN_NAME, USER_INFO } from '@/constants/constant';
import { decodeToken, getHeaders } from '@/utils/util';

import styles from './index.module.css';
import Footer from '@/components/layout/Footer';

export default function KaKaoAuthHandle() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const code = searchParams.get('code');

  useEffect(() => {
    let headers = getHeaders();
    if (code) {
      axios
        .get(`${DOMAIN_BE_PROD}/login/oauth2/kakao/code?code=${code}`, { headers })
        .then((response) => {
          sessionStorage.setItem(TOKEN_NAME, response.headers['authorization']);
          sessionStorage.setItem(USER_INFO + 'memeberId', response.data.memberId);
          sessionStorage.setItem(USER_INFO + 'username', response.data.username);
          sessionStorage.setItem(USER_INFO + 'thumbnail', response.data.thumbnail);
          sessionStorage.setItem(USER_INFO + 'registDate', response.data.registDate);

          headers = getHeaders();
          // 회원 로그인 기록
          if (!decodeToken().role || decodeToken().role === 'ROLE_USER') {
            axios
              .post(`${DOMAIN_BE_PROD}/api/v1/loginTracker/${response.data.memberId}/track`, {}, { headers })
              .catch((err) => {
                alert(err.responsw.daga);
                router.push('/login');
              });
          }
          router.push('/');
        })
        .catch((err) => {
          alert(err.response.data);
          router.push('/login');
        });
    }
  }, []);

  return (
    <div className={styles.wrap}>
      <div className={styles.content}></div>
      <Footer />
    </div>
  );
}

'use client';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

import { DOMAIN_BE_PROD } from '@/constants/constant';
import {
  AUTHORIZATION,
  BACK_PAGE,
  BACK_PAGE_TEST,
  MEMBER_ID,
  REGIST_DATE,
  THUMBNAIL,
  TOKEN_NAME,
  USER_INFO,
  USER_NAME,
} from '@/constants/sessionStorage';
import { decodeToken, getHeaders } from '@/utils/util';
import SessionStorage from '@/utils/SessionStorage';
import { isLoginState } from '@/states/isLoignState';

import styles from './index.module.css';

export default function KaKaoAuthHandle() {
  const router = useRouter();
  const setIsLogin = useSetRecoilState(isLoginState);

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get('code');
    let headers = getHeaders();
    const backPage = SessionStorage.getItem(BACK_PAGE);
    const backPageTest = SessionStorage.getItem(BACK_PAGE_TEST);

    if (code) {
      axios
        .get(`${DOMAIN_BE_PROD}/login/oauth2/kakao/code?code=${code}`, {
          headers,
        })
        .then((response) => {
          SessionStorage.setItem(TOKEN_NAME, response.headers[AUTHORIZATION]);
          SessionStorage.setItem(USER_INFO + MEMBER_ID, response.data.memberId);
          SessionStorage.setItem(USER_INFO + USER_NAME, response.data.username);
          SessionStorage.setItem(
            USER_INFO + THUMBNAIL,
            response.data.thumbnail,
          );
          SessionStorage.setItem(
            USER_INFO + REGIST_DATE,
            response.data.registDate,
          );

          setIsLogin(decodeToken().state);
          headers = getHeaders();
          // 회원 로그인 기록
          if (!decodeToken().role || decodeToken().role === 'ROLE_USER') {
            axios
              .post(
                `${DOMAIN_BE_PROD}/api/v1/loginTracker/${response.data.memberId}/track`,
                {},
                { headers },
              )
              .catch((err) => {
                alert(err.response.data);
                router.replace('/login');
              });
          }
          if (backPage) {
            router.replace(backPage + backPageTest);
          } else {
            router.replace('/');
          }
        })
        .catch((err) => {
          alert(err.response.data);
          router.replace('/login');
        });
    }
  }, []);

  return (
    <main className={styles.wrap}>
      <div className={styles.content}></div>
    </main>
  );
}

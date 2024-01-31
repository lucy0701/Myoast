// 'use client';
import React, { useEffect, useState } from 'react';
import cx from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useRecoilState } from 'recoil';

import { decodeToken } from '@/utils/util';
import { TOKEN_NAME, USER_INFO } from '@/constants/sessionStorage';
import { isLoginState } from '@/states/isLoignState';

import styles from './index.module.css';

interface Props {
  menuClicked: boolean;
  setMenuClicked: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function NavigationBar({ menuClicked, setMenuClicked }: Props) {
  const router = useRouter();
  const [isLogin, setIsLogin] = useRecoilState(isLoginState);

  useEffect(() => {
    setIsLogin(decodeToken().state);
  }, [decodeToken().state]);

  function clickLogOut() {
    sessionStorage.setItem(TOKEN_NAME, '');
    sessionStorage.setItem(USER_INFO + 'memeberId', '');
    sessionStorage.setItem(USER_INFO + 'thumbnail', '');
    sessionStorage.setItem(USER_INFO + 'registDate', '');
    sessionStorage.setItem(USER_INFO + 'username', '');
    setIsLogin(false);
    setMenuClicked(false);
    router.push('/');
  }

  return (
    <nav>
      <div
        className={cx(styles.modalWrap, {
          [styles.modalMoveToRight]: menuClicked,
        })}
      >
        <Link href="/" prefetch={false}>
          <p className={styles.logoTitle}>MYOAST</p>
          {/* <div className={styles.logoIcon} onClick={() => setMenuClicked(false)} /> */}
        </Link>
        <ul className={styles.menuUlWrap}>
          <li>
            <ul className={styles.ulWrap}>
              <p>심리테스트</p>
              <li>
                <Link href="/latest" onClick={() => setMenuClicked(false)} prefetch={false}>
                  <p>최신 심리테스트</p>
                </Link>
              </li>
              <li>
                <Link href="/list" onClick={() => setMenuClicked(false)} prefetch={false}>
                  <p>전체 보기</p>
                </Link>
              </li>
            </ul>
            {/* <ul className={styles.ulWrap}> */}
            <ul className={styles.ulWrap}>
              <p>마이 페이지</p>
              <li>
                <Link href="/mypage" onClick={() => setMenuClicked(false)} prefetch={false}>
                  <p>나의 결과 기록</p>
                </Link>
              </li>
            </ul>
            <ul className={styles.ulWrap}>
              <p>About</p>
              <li>
                <Link href="/about" onClick={() => setMenuClicked(false)} prefetch={false}>
                  <p>묘스트 소개</p>
                </Link>
              </li>
              <li>
                <Link href="/devinfo" onClick={() => setMenuClicked(false)} prefetch={false}>
                  <p>개발자 소개</p>
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <ul>
              <li className={isLogin ? styles.logOutWrap : styles.display_none}>
                <button className={styles.logOut} onClick={clickLogOut}>
                  <div className={styles.logOutIcon} />
                  <p>로그아웃</p>
                </button>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      {/* 모달 */}
      <div className={styles.hideModal} />
      <div
        className={styles.modalBackground}
        style={{ opacity: menuClicked ? 0.5 : 0, visibility: menuClicked ? 'visible' : 'hidden' }}
        onClick={() => setMenuClicked(false)}
      />
    </nav>
  );
}

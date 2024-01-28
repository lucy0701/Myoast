'use client';
import React, { useEffect } from 'react';
import { useState } from 'react';
import Link from 'next/link';
import { useRecoilValue } from 'recoil';

import { decodeToken } from '@/utils/util';
import { isLoginState } from '@/states/isLoignState';

import styles from './index.module.css';
import NavigationBar from '../NavigationBar';

export default function Header() {
  const [menuClicked, setMenuClicked] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const isLogin_be = useRecoilValue(isLoginState);

  useEffect(() => {
    setIsLogin(decodeToken().state);
  }, [decodeToken().state]);

  return (
    <div className={styles.wrap}>
      <div className={styles.headerWrap}>
        <div className={styles.meunWrap} onClick={() => setMenuClicked(true)}>
          <div className={styles.menuIcon} />
        </div>
        <div>
          <Link href="/" prefetch={false}>
            {/* <div className={styles.logoWrap} >
              <div className={styles.logoIcon} ></div>
              <div className={styles.logoTitle} ></div>
            </div> */}
              <p className={styles.logoTitle}>MYOAST</p>
          </Link>
        </div>
        <div className={styles.mypageWrap}>
          {isLogin_be || isLogin ? (
            <Link href="/mypage" prefetch={false}>
              <div className={styles.myPageIcon} />
            </Link>
          ) : (
            <Link href="/login" prefetch={false}>
              {/* <p>LOGIN</p> */}
              <div className={styles.loginIcon}></div>
            </Link>
          )}
        </div>
      </div>
      <NavigationBar menuClicked={menuClicked} setMenuClicked={setMenuClicked} />
    </div>
  );
}

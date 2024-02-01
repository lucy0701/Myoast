'use client';
import React, { useEffect } from 'react';
import { useState } from 'react';
import Link from 'next/link';
import { useRecoilValue } from 'recoil';
import { useRouter } from 'next/navigation';

import { decodeToken } from '@/utils/util';
import { isLoginState } from '@/states/isLoignState';

import styles from './index.module.css';
import NavigationBar from '../NavigationBar';

export default function Header() {
  const [menuClicked, setMenuClicked] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const isLogin_be = useRecoilValue(isLoginState);
  const router = useRouter();

  useEffect(() => {
    setIsLogin(decodeToken().state);
  }, [decodeToken().state]);
  return (
    <header className={styles.wrap}>
      <div className={styles.headerWrap}>
        <button className={styles.meunWrap} onClick={() => setMenuClicked(true)}>
          <div className={styles.menuIcon} />
        </button>
        <div>
          <Link href="/" prefetch={false}>
            <div className={styles.logoWrap}>
              <h1 className={styles.logoTitle}>MYOAST</h1>
              <div className={styles.logoIcon}></div>
              {/* <div className={styles.logoTitle} ></div> */}
            </div>
          </Link>
        </div>
        <div className={styles.mypageWrap}>
          {isLogin_be || isLogin ? (
            <button onClick={() => router.push('/mypage')}>
              <div className={styles.myPageIcon} />
            </button>
          ) : (
            <button onClick={() => router.push('/login')}>
              {/* <p>LOGIN</p> */}
              <div className={styles.loginIcon} />
            </button>
          )}
        </div>
      </div>
      <NavigationBar menuClicked={menuClicked} setMenuClicked={setMenuClicked} />
    </header>
  );
}

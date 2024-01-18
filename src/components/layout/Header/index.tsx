'use client';
import React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import { useRecoilValue } from 'recoil';

import { isLoginState } from '@/states/isLoignState';

import styles from './index.module.css';
import NavigationBar from '../NavigationBar';

export default function Header() {
  const [menuClicked, setMenuClicked] = useState(false);
  const isLogin = useRecoilValue(isLoginState);

  return (
    <div className={styles.wrap}>
      <div className={styles.headerWrap}>
        <div className={styles.meunWrap}>
          <div className={styles.menuIcon} onClick={() => setMenuClicked(true)} />
        </div>
        {/* 클릭하면 메인페이지로 */}
        <div>
          <Link href="/" prefetch={false}>
            <div className={styles.logoWrap}>
              <div className={styles.logoIcon} />
              <div className={styles.logoTitle} />
            </div>
          </Link>
        </div>
        {/* 로그인 */}
        <div className={styles.mypageWrap}>
          {isLogin ? (
            <Link href="/mypage" prefetch={false}>
              <div className={styles.myPageIcon}/>
            </Link>
          ) : (
            <Link href="/login" prefetch={false}>
              <div className={styles.loginIcon}></div>
            </Link>
          )}
        </div>
      </div>
      <NavigationBar menuClicked={menuClicked} setMenuClicked={setMenuClicked} />
    </div>
  );
}

'use client';
import React, { useEffect } from 'react';
import { useState } from 'react';
import Link from 'next/link';

import SessionStorage from '@/utils/SessionStorage';
import { MEMBER_ID, THUMBNAIL, USER_INFO } from '@/constants/sessionStorage';

import styles from './index.module.css';
import NavigationBar from '../NavigationBar';

export default function Header() {
  const [menuClicked, setMenuClicked] = useState(false);
  const [memberId, setMemberId] = useState<string | null>(null);
  const [thumbnail, setThumbnail] = useState<string | null>(null);

  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    setMemberId(SessionStorage.getItem(USER_INFO + MEMBER_ID));
    setThumbnail(SessionStorage.getItem(USER_INFO + THUMBNAIL));
  }, []);

  useEffect(() => {
    if (memberId) setIsLogin(true);
  }, [memberId]);

  return (
    <div className={styles.wrap}>
      <div className={styles.headerWrap}>
        <div className={styles.meunWrap}>
          <div className={styles.menuIcon} onClick={() => setMenuClicked(true)} />
        </div>
        {/* 클릭하면 메인페이지로 */}
        <div>
          <Link href="/">
            <div className={styles.logoWrap}>
              <div className={styles.logoIcon} />
              <div className={styles.logoTitle} />
            </div>
          </Link>
        </div>
        {/* 로그인 */}
        <div className={styles.mypageWrap}>
          {isLogin ? (
            <Link href="/mypage">
              {thumbnail !== null && <img src={thumbnail} className={styles.myPageIcon} alt="thumbnail" />}
            </Link>
          ) : (
            <Link href="/login">
              <div className={styles.loginIcon}></div>
            </Link>
          )}
        </div>
      </div>
      <NavigationBar menuClicked={menuClicked} setMenuClicked={setMenuClicked} />
    </div>
  );
}

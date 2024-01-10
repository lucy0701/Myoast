'use client';
import React from 'react';
import { useState } from 'react';
import Link from 'next/link';

import styles from './index.module.css';
import NavigationBar from '../NavigationBar';

export default function Header() {
  const [menuClicked, setMenuClicked] = useState(false);

  return (
    <div className={styles.wrap}>
      <div className={styles.headerWrap}>
        <div className={styles.menuIcon} onClick={() => setMenuClicked(true)} />
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
        <div className={styles.myPageIcon}></div>
      </div>
      <NavigationBar menuClicked={menuClicked} setMenuClicked={setMenuClicked} />
    </div>
  );
}

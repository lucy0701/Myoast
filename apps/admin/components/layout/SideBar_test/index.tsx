'use client';

import styles from './index.module.css';
import { useState } from 'react';
import cx from 'classnames';
import Link from 'next/link';

export default function SideBar() {
  const [isToggle, setIsToggle] = useState<boolean>(true);

  const onClickLi = () => {
    setIsToggle(!isToggle);
  };

  return (
    <div className={styles.wrap}>
      <nav className={styles.navWrap}>
        <div className={styles.logo}>로고</div>
        <ul className={styles.listWrap}>
          <li onClick={onClickLi}>
            <p>Dashboard</p>
          </li>
          <li onClick={onClickLi} className={!isToggle ? styles.expanded : ''}>
            <p>Contents</p>
            <ul
              className={cx(styles.linkLi, { [styles.displayNone]: isToggle })}>
              <li>
                <Link href='/contents'>Content List</Link>
              </li>
              <li>
                <Link href='/'>Content Detalis</Link>
              </li>
            </ul>
          </li>
          <li onClick={onClickLi}>
            <p>Members</p>
          </li>
          <li onClick={onClickLi}>
            <p>System</p>
          </li>
        </ul>
      </nav>
    </div>
  );
}

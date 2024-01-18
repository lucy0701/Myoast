// 'use client';
import React from 'react';
import cx from 'classnames';
import Link from 'next/link';

import styles from './index.module.css';

interface Props {
  menuClicked: boolean;
  setMenuClicked: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function NavigationBar({ menuClicked, setMenuClicked }: Props) {
  return (
    <div>
      <div
        className={cx(styles.modalWrap, {
          [styles.modalMoveToRight]: menuClicked,
        })}
      >
        <Link href="/">
          <div className={styles.logoIcon} onClick={() => setMenuClicked(false)} />
        </Link>

        {/* ul 시작 */}
        <ul className={styles.menuUlWrap}>
          <li>
            <ul className={styles.ulWrap}>
              <p>심리테스트</p>
              <li>
                <Link href="/latest" onClick={() => setMenuClicked(false)}>
                  최신 심리테스트
                </Link>
              </li>
              <li>
                <Link href="/list" onClick={() => setMenuClicked(false)}>
                  전체 보기
                </Link>
              </li>
            </ul>
            <ul className={styles.ulWrap}>
              <p>마이 페이지</p>
              <li>
                <Link href="/mypage" onClick={() => setMenuClicked(false)}>
                  나의 결과 기록
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <ul>
              <li className={styles.logOutWrap}>
                <div className={styles.logOutIcon} />
                <p>로그아웃</p>
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
    </div>
  );
}

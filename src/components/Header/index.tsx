'use client';
import styles from './index.module.css';

export default function Header() {
  return (
    <div className={styles.wrap}>
      <div className={styles.navWrap}>
        <div className={styles.menuIcon}></div>
        <div className={styles.logoWrap}>
          <span className={styles.logoDog}></span>
          <span className={styles.logoTitle}></span>
        </div>
        <button className={styles.myPageBtn}></button>
      </div>
    </div>
  );
}

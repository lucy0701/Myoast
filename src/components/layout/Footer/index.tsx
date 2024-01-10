import Link from 'next/link';

import styles from './index.module.css';

export default function Footer() {
  return (
    <div className={styles.wrap}>
      <div className={styles.docs}>
        <span>
          <Link href="/terms" target="_blank">
            <p>이용약관</p>
          </Link>
        </span>
        <span>
          <Link href="/policy" target="_blank">
            <p>개인정보처리방침</p>
          </Link>
        </span>
      </div>
      <div className={styles.under}>
        <div>
          <div className={styles.gitHubIcon}>
            <Link href="https://github.com/WillNeiman/MongBit_Backend" />
          </div>
          <div className={styles.instagramIcon}>
            <Link href="https://www.instagram.com/mongbit_" />
          </div>
        </div>
        <p>© 2023 MongMoongCrew. All rights reserved </p>
      </div>
    </div>
  );
}

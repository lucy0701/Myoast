'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from './index.module.css';

// TODO: Footer 정리
const DisabledPaths = ['/list', '/latest', '/result', '/record'];

export default function Footer() {
  const pathname = usePathname();

  if (DisabledPaths.some((paths) => pathname.includes(paths))) return null;

  return (
    <div className={styles.wrap}>
      <div className={styles.contentsWrap}>
        <div className={styles.docs}>
          <span>
            <Link href="/terms" target="_blank" prefetch={false}>
              <p>이용약관</p>
            </Link>
          </span>
          <p>|</p>
          <span>
            <Link href="/policy" target="_blank" prefetch={false}>
              <p>개인정보처리방침</p>
            </Link>
          </span>
        </div>
        <div className={styles.under}>
          <div className={styles.iconBox}>
            <div className={styles.gitHubIcon}>
              <Link href="https://github.com/lucy0701/Myoast" target="_blank" prefetch={false} />
            </div>
            <div className={styles.instagramIcon}>
              <Link href="https://www.instagram.com/myoast_" target="_blank" prefetch={false} />
            </div>
            <div className={styles.rss}>
              <Link href="/api/rss" target="_blank" prefetch={false}>
                <div className={styles.rssIcon}></div>
              </Link>
            </div>
          </div>
          <p>© 2023 MongMoongCrew. All rights reserved </p>
        </div>
      </div>
    </div>
  );
}

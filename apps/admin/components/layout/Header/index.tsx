import Link from 'next/link';
import styles from './index.module.css';
import {
  STATISTICS,
  SYSTEM_MANAGEMENT,
  TEST_SETTING,
} from '@/constants/navText';

export default function Header() {
  return (
    <header className={styles.wrap}>
      <div className={styles.logoWrap}>
        <Link href='/'>
          <h1>MYOAST</h1>
          <div className={styles.logoIcon} />
        </Link>
      </div>
      <nav className={styles.navWrap}>
        <ul className={styles.navUl}>
          <li>
            <Link href='/test'>
              <div className={styles.test} />
              <p>{TEST_SETTING}</p>
              <div className={styles.underBar}></div>
            </Link>
          </li>
          <li>
            <Link href='/statistics'>
              <div className={styles.statistics} />
              <p>{STATISTICS}</p>
              <div className={styles.underBar}></div>
            </Link>
          </li>
          <li>
            <Link href='/system'>
              <div className={styles.system} />
              <p>{SYSTEM_MANAGEMENT}</p>
              <div className={styles.underBar}></div>
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles.userWrap}>
        <p>
          <span>관리자</span> 님
        </p>
        <button>Log Out</button>
      </div>
    </header>
  );
}

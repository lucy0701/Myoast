import Link from 'next/link';
import styles from './index.module.css';

export default function Header() {
  return (
    <header>
      <div className={styles.headerWrap}>
        <div className={styles.linkWrap}>
          <Link href='https://myoast.vercel.app/'>
            묘스트 이동하기
            <div className={styles.linkIcon} />
          </Link>
        </div>
        <div className={styles.userWrap}>
          <span className={styles.sp_1}>Admin</span>
          <p>[닉네임]<span className={styles.sp_2}>님</span></p>
          <button className={styles.logoutBtn}>
            <div className={styles.logoutImg} />
          </button>
        </div>
      </div>
    </header>
  );
}

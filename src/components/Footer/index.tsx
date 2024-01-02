import Link from 'next/link';
import styles from './index.module.css';

export default function Footer() {
  return (
    <div className={styles.wrap}>
      <div className={styles.upper}>
        <p>
          몽뭉이 크루 &nbsp; | &nbsp; 서울 관악구 신림역 스터디존에서 만듦
          &nbsp;
        </p>
        <p> 채용문의 &nbsp; | &nbsp; 채용되고 싶다</p>
      </div>
      <div className={styles.docs}>
        <span>
          <Link href='/terms' target='_blank'>
            <p>이용약관</p>
          </Link>
        </span>

        <span>
          <Link href='/policy' target='_blank'>
            <p>개인정보처리방침</p>
          </Link>
        </span>
      </div>
      <div className={styles.under}>
        <div>
          <div className={styles.gitHub}>
            <Link
              className={styles.gitHub}
              href='https://github.com/WillNeiman/MongBit_Backend'
            />
          </div>
          <div className={styles.instagram}>
            <Link
              className={styles.instagramIcon}
              href='https://www.instagram.com/mongbit_'
            />
          </div>
        </div>
        <p>© 2023 MongMoongCrew. All rights reserved </p>
      </div>
    </div>
  );
}

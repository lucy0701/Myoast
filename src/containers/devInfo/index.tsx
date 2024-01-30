import Link from 'next/link';

import styles from './index.module.css';

export default function DevInfo() {
  return (
    <div className={styles.wrap}>
      <div className={styles.contentWrap}>
        <div className={styles.textWrap}>
          <div className={styles.textBox}>
            <p>GitHub : </p>
            <div className={styles.gitHubIcon}>
              <p>FrontEnd</p>
              <Link href="https://github.com/lucy0701/Myoast" target="_blank" prefetch={false} />
            </div>
            <div className={styles.gitHubIcon}>
              <p>BackEnd</p>
              <Link href="https://github.com/WillNeiman/MongBit_Portfolio" target="_blank" prefetch={false} />
            </div>
          </div>
          <div className={styles.textBox}>
            <div className={styles.instagramIcon}>
              <p>Myoast Instagram : </p>
              <Link href="https://www.instagram.com/myoast_" target="_blank" prefetch={false} />
            </div>
          </div>
        </div>
        <p className={styles.please}>
          [ FrontEnd ]
          <br />
          인재가 필요한 회사의 연락을 기다리고 있습니다
        </p>
        <div className={styles.iconWrap}>
          <div className={styles.logoIcon} />
          <span>© 2023 MongMoongCrew. All rights reserved </span>
        </div>
      </div>
    </div>
  );
}

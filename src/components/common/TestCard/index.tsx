import React from 'react';
import Link from 'next/link';
import cx from 'classnames';

import styles from './index.module.css';

interface Props {
  children: React.ReactNode;
  className?: string;
  link: string;
  size?: 'small' | 'medium' | 'large';
  type?: 'myTestCade' | 'testCard';
  testTitle?: string;
  testResult?: string;
  playCount?: string;
}

const TestCard = (props: Props) => {
  const { children, className, link, size, type, testTitle, testResult, playCount } = props;

  if (type === 'myTestCade') {
    return (
      <div className={styles.myTestCadeWrap}>
        <Link href={link} className={cx(className, styles[size ?? 'normal'], styles[type ?? 'normal'])}>
          <div>{children}</div>
          <div className={styles.textWrp}>
            <span className={styles.title}>{props.testTitle}</span>
            <p>{testResult}</p>
          </div>
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.testCade}>
      <Link href={link} className={cx(className, styles[size ?? 'normal'], styles[type ?? 'normal'])}>
        <div className={styles.iconBox}>
          <div></div>
          <p>{playCount}</p>
        </div>
        <div className={styles.child}>{children}</div>
        <span className={styles.title}>{testTitle}</span>
      </Link>
    </div>
  );
};
export default TestCard;

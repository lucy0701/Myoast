import React from 'react';
import Link from 'next/link';
import cx from 'classnames';

import styles from './index.module.css';

interface Props {
  className?: string;
  testTitle: string;
  link: string;
  imgUrl: string;
  size?: 'small' | 'medium' | 'large';
  type?: 'myTestCade' | 'testCard';
  testResult?: string;
  playCount?: string;
}

interface MainTestCardProps {
  className?: string;
  testTitle: string;
  imgUrl: string;
}

export const TestCard = (props: Props) => {
  const { className, link, imgUrl, size, type, testTitle, testResult, playCount } = props;

  if (type === 'myTestCade') {
    return (
      <div className={styles.myTestCadeWrap}>
        <Link href={link} className={cx(className, styles[size ?? 'normal'], styles[type ?? 'normal'])}>
          <img className={styles.child} src={imgUrl} alt={testTitle} />
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
          <div className={styles.playIcon} />
          <p>{playCount}</p>
        </div>
        <img className={styles.child} src={imgUrl} alt={testTitle} />
        <span className={styles.title}>{testTitle}</span>
      </Link>
    </div>
  );
};

export const MainTestCard = (props: MainTestCardProps) => {
  const { className, imgUrl, testTitle } = props;
  return (
    <div className={styles.testCade}>
      <div className={cx(className, styles.large, styles.testCard)}>
        <div className={styles.iconBox}>
          <div className={styles.playIcon} />
        </div>
        <img className={styles.child} src={imgUrl} alt={testTitle} />
        <span className={styles.title}>{testTitle}</span>
      </div>
    </div>
  );
};

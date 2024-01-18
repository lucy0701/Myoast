import React from 'react';
import Link from 'next/link';
import cx from 'classnames';

import styles from './index.module.css';
// import { useTest } from '@/hooks/useTest';

interface Props {
  className?: string;
  testTitle: string;
  testId: string;
  testResultId?: string;
  imgUrl: string;
  size?: 'small' | 'medium' | 'large';
  type?: 'myTestCade' | 'testCard';
  testResult?: string;
  playCount?: number;
}

interface MainTestCardProps {
  className?: string;
  testTitle: string;
  imgUrl: string;
}

export const TestCard = (props: Props) => {
  const { className, testId, testResultId, imgUrl, size, type, testTitle, testResult, playCount } = props;

  if (type === 'myTestCade') {
    return (
      <div className={styles.myTestCadeWrap}>
        <Link
          href={`/record/${testId}/${testResultId}`}
          className={cx(className, styles[size ?? 'normal'], styles[type ?? 'normal'])}
          prefetch={false}
        >
          <img className={styles.testImg} src={imgUrl} alt={testTitle} />
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
      <Link href={`/test/main/${testId}`} className={cx(className, styles[size ?? 'normal'], styles[type ?? 'normal'])}>
        <div className={styles.iconBox}>
          <div className={styles.playIcon} />
          <p>{playCount}</p>
        </div>
        <img className={styles.testImg} src={imgUrl} alt={testTitle} />
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
        <img className={styles.testImg} src={imgUrl} alt={testTitle} />
        <span className={styles.title}>{testTitle}</span>
      </div>
    </div>
  );
};

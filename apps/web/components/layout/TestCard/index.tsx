import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import cx from 'classnames';

import { contentArr } from '@/utils/textArr';

import styles from './index.module.css';

interface Props {
  className?: string;
  testTitle: string;
  testId: string;
  testResultId?: string;
  imgUrl: string;
  size?: 'small' | 'medium' | 'large';
  type?: 'myTestCard' | 'testCard';
  testResult?: string;
  playCount?: number;
}

interface MainTestCardProps {
  className?: string;
  testTitle: string;
  imgUrl: string;
}

export const TestCard = ({
  className,
  testId,
  testResultId,
  imgUrl,
  size,
  type,
  testTitle,
  testResult,
  playCount,
}: Props) => {
  const content = contentArr(testResult ? testResult : '');

  if (type === 'myTestCard') {
    return (
      <div className={styles.myTestCardWrap}>
        <Link
          href={`/record/${testId}/${testResultId}`}
          className={cx(
            className,
            styles[size ?? 'normal'],
            styles[type ?? 'normal'],
          )}
          prefetch={false}>
          <Image
            className={styles.testImg}
            src={imgUrl}
            alt='testImage'
            width={500}
            height={500}
          />
          <div className={styles.textWrp}>
            <h3 className={styles.title}>{testTitle}</h3>
            {content.slice(0, 6).map((text, i) => (
              <p key={i}>{text}</p>
            ))}
          </div>
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.testCard}>
      <Link
        href={`/test/main/${testId}`}
        className={cx(
          className,
          styles[size ?? 'normal'],
          styles[type ?? 'normal'],
        )}
        prefetch={false}>
        <div className={styles.iconBox}>
          <div className={styles.playIcon} />
          <p>{playCount}</p>
        </div>
        <Image
          className={styles.testImg}
          src={imgUrl}
          alt='testImage'
          width={500}
          height={500}
        />
        <span className={styles.title}>{testTitle}</span>
      </Link>
    </div>
  );
};

export const MainTestCard = (props: MainTestCardProps) => {
  const { className, imgUrl, testTitle } = props;
  return (
    <div className={styles.testCard}>
      <div className={cx(className, styles.large, styles.testCard)}>
        <div className={styles.iconBox}>
          <div className={styles.playIcon} />
        </div>
        <Image
          className={styles.testImg}
          src={imgUrl}
          alt='testImage'
          width={500}
          height={500}
        />
        <span className={styles.title}>{testTitle}</span>
      </div>
    </div>
  );
};

export const TestMainBanner = ({ testId, imgUrl, testTitle }: Props) => (
  <div className={styles.testCard}>
    <Link
      href={`/test/main/${testId}`}
      className={styles.mainBanner}
      prefetch={false}>
      <Image
        className={styles.testImg}
        src={imgUrl}
        alt='testImage'
        width={500}
        height={500}
      />
      <span className={styles.title}>{testTitle}</span>
    </Link>
  </div>
);

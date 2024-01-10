import React from 'react';
import Link from 'next/link';
import cx from 'classnames';

import styles from './index.module.css';

interface Props {
  children: React.ReactNode;
  className?: string;
  link: string;
  size?: 'small' | 'medium' | 'large';
  skin?: 'mypageCard' | 'testCard';
  testTitle?: string;
  testResult?: string;
}

const TestCard = (props: Props) => {
  const { children, className, link, ...rest } = props;

  if (rest.skin === 'mypageCard') {
    return (
      <div className={styles.testCade}>
        <Link href={link} className={cx(className, styles[props.size ?? 'normal'], styles[props.skin ?? 'normal'])}>
          <div>{children}</div>
          <span>
            {props.testTitle}
            <p>{props.testResult}</p>
          </span>
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.testCade}>
      <Link href={link} className={cx(className, styles[props.size ?? 'normal'], styles[props.skin ?? 'normal'])}>
        <div>{children}</div>
        <span>{props.testTitle}</span>
      </Link>
    </div>
  );
};
export default TestCard;

import React, { ButtonHTMLAttributes, MouseEventHandler } from 'react';
import Link from 'next/link';
import cx from 'classnames';

import styles from './index.module.css';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  link?: string;
  skin?: 'startBtn' | 'bottomBtn' | 'answerBtn' | 'backBtn' | 'moreBtn';
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

// TODO: props 디스트럭쳐링 해서 사용
const Button = (props: Props) => {
  const { children, className, link, skin, onClick } = props;

  if (link) {
    return (
      <Link href={link} className={cx(styles.wrap, className, styles[skin ?? 'normal'])} prefetch={false}>
        {children}
        <div className={styles.nexticon} />
      </Link>
    );
  }

  return (
    <button className={cx(styles.wrap, className, styles[skin ?? 'normal'])} onClick={onClick}>
      {children}
      <div className={styles.nexticon} />
      <div className={styles.moreIcon} />
    </button>
  );
};
export default Button;

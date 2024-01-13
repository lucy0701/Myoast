import React, { ButtonHTMLAttributes, MouseEventHandler } from 'react';
import Link from 'next/link';
import cx from 'classnames';

import styles from './index.module.css';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  link?: string;
  skin?: 'startBtn' | 'bottomBtn' | 'answerBtn' | 'backBtn' ;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button = (props: Props) => {
  const { children, className, link, skin, onClick } = props;

  if (link) {
    return (
      <Link href={link} className={cx(styles.wrap, className, styles[skin ?? 'normal'])}>
        {children}
        <div className={styles.nexticon} />
      </Link>
    );
  }

  return (
    <button className={cx(styles.wrap, className, styles[skin ?? 'normal'])} onClick={onClick}>
      {children}
      <div className={styles.nexticon} />
    </button>
  );
};
export default Button;

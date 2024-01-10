import React, { ButtonHTMLAttributes } from 'react';
import Link from 'next/link';
import cx from 'classnames';

import styles from './index.module.css';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  link?: string;
  size?: 'tiny' | 'small';
  skin?: 'startBtn' | 'bottomBtn' | 'answer' | 'backBtn';
}

const Button = (props: Props) => {
  const { className, link, ...rest } = props;

  if (link) {
    return (
      <Link
        href={link}
        className={cx(styles.wrap, className, styles[props.size ?? 'normal'], styles[props.skin ?? 'normal'])}
      >
        {props.children}
      </Link>
    );
  }

  return (
    <button
      {...rest}
      className={cx(styles.wrap, className, styles[props.size ?? 'normal'], styles[props.skin ?? 'normal'])}
    >
      {props.children}
    </button>
  );
};
export default Button;

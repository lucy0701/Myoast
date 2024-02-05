import React, { ButtonHTMLAttributes, MouseEventHandler } from 'react';
import cx from 'classnames';

import styles from './index.module.css';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  skin?: 'startBtn' | 'bottomBtn' | 'answerBtn' | 'backBtn' | 'moreBtn';
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

// TODO: props 디스트럭쳐링 해서 사용
const Button = ({ children, className, skin, onClick }: Props) => (
  <button className={cx(styles.wrap, className, styles[skin ?? 'normal'])} onClick={onClick}>
    {children}
    <div className={styles.nexticon} />
    <div className={styles.moreIcon} />
  </button>
);
export default Button;

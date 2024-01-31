import React from 'react';

import styles from './index.module.css';

interface Props {
  playCount: number;
  likeCount?: number;
  commentCount?: number;
  type: 'allCnt' | 'playCnt';
}

const CountIcon = (props: Props) => {
  const { commentCount, likeCount, playCount, type } = props;

  if (type === 'allCnt') {
    return (
      <div className={styles.wrap}>
        <div className={styles.countWarp}>
          <span className={styles.commentIcon} />
          <span>{commentCount}</span>
        </div>
        <div className={styles.countWarp}>
          <span className={styles.likeIcon} />
          <span>{likeCount}</span>
        </div>
        <div className={styles.countWarp}>
          <span className={styles.playIcon} />
          <span>{playCount}</span>
        </div>
      </div>
    );
  } else if (type === 'playCnt') {
    return (
      <div className={styles.wrap}>
        <div className={styles.countWarp}>
          <span className={styles.playIcon} />
          <span>{playCount}</span>
        </div>
      </div>
    );
  }
};
export default CountIcon;

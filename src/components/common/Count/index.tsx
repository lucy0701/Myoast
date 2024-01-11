import React from 'react';

import styles from './index.module.css';

interface Props {
  playCount: string;
  likeCount?: string;
  commentCount?: string;
  type: 'allCnt' | 'playCnt';
}

const CountIcon = (props: Props) => {
  const { commentCount, likeCount, playCount, type } = props;

  if (type === 'allCnt') {
    return (
      <div className={styles.wrap}>
        <div className={styles.countWarp}>
          <span className={styles.commentIcon} />
          <p>{commentCount}</p>
        </div>
        <div className={styles.countWarp}>
          <span className={styles.likeIcon} />
          <p>{likeCount}</p>
        </div>
        <div className={styles.countWarp}>
          <span className={styles.playIcon} />
          <p>{playCount}</p>
        </div>
      </div>
    );
  } else if (type === 'playCnt') {
    return (
      <div className={styles.wrap}>
        <div className={styles.countWarp}>
          <span className={styles.playIcon} />
          <p>{playCount}</p>
        </div>
      </div>
    );
  }
};
export default CountIcon;

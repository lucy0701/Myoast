import styles from './index.module.css';

interface Props {
  likeCount: number;
}

export const CountBtn = (props: Props) => {
  const { likeCount } = props;

  return (
    <div className={styles.wrap}>
      <div className={styles.btnWarp}>
        <div className={styles.btnBox}>
          <button className={styles.linkCopyBtn}/>
          <p>링크 복사</p>
        </div>
        <div className={styles.btnBox}>
          <button className={styles.likeBtn}/>
          <p>추천</p>
          <p className={styles.likeCnt}>{likeCount}</p>
        </div>
        <div className={styles.btnBox}>
          <button className={styles.shareBtn}/>
          <p>공유 하기</p>
        </div>
      </div>
    </div>
  );
};

export const ResultCountBtn = (props: Props) => {
  const { likeCount } = props;
  return (
    <div className={styles.wrap}>
      <div className={styles.btnWarp}>
        <div className={styles.btnBox}>
          <button className={styles.linkCopyBtn}/>
          <p>링크 복사</p>
        </div>
        <div className={styles.btnBox}>
          <button className={styles.replayBtn}/>
          <p>다시 하기</p>
        </div>
        <div className={styles.btnBox}>
          <button className={styles.likeBtn}/>
          <p>추천</p>
          <p className={styles.likeCnt}>{likeCount}</p>
        </div>
      </div>
    </div>
  );
};

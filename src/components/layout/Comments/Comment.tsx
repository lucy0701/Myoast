import styles from './index.module.css';

interface Props {
  imgUrl: string;
  userName: string;
  data: string;
  text: string;
}

const Comment = (props: Props) => {
  const { imgUrl, userName, data, text } = props;
  return (
    <div className={styles.commentWrap}>
      <div className={styles.imgUrl}>{imgUrl}</div>
      <div className={styles.textBox}>
        <div>
          <div>
            <span>{userName}</span>
            <span>{data}</span>
          </div>
          <div className={styles.commentBtn}>
            <button>수정</button>
            <button>삭제</button>
          </div>
        </div>
        <div>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Comment;

import styles from './index.module.css';

interface Props {
  imgUrl: string;
  userName: string;
  commentDate: string;
  content: string;
}

const Comment = (props: Props) => {
  const { imgUrl, userName, commentDate, content } = props;
  return (
    <div className={styles.commentWrap}>
      <img src={imgUrl} className={styles.imgUrl} alt="comment" />
      <div className={styles.textBox}>
        <div>
          <div>
            <span>{userName}</span>
            <span>{commentDate}</span>
          </div>
          <div className={styles.commentBtn}>
            <button>수정</button>
            <button>삭제</button>
          </div>
        </div>
        <div>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default Comment;

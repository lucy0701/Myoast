import styles from './index.module.css';

interface Props {
  commentCount: string;
}
const AddComment = (props: Props) => {
  return (
    <div className={styles.wrap}>
      <div className={styles.commentText}>
        <div>
          <span></span>
          <p>댓글</p>
          <p>{props.commentCount}</p>
        </div>
        <p>0/100</p>
      </div>
      <div className={styles.inputWarp}>
        <input type="text"></input>
        <button className={styles.addBtn}></button>
      </div>
    </div>
  );
};
export default AddComment;

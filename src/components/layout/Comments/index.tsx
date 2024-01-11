import styles from './index.module.css';
import Comment from './Comment';

interface Props {
  imgUrl: string;
  userName: string;
  data: string;
  text: string;
}

const Comments = (props: Props) => {
  const { imgUrl, userName, data, text } = props;
  return (
    <div className={styles.wrap}>
      <Comment imgUrl={imgUrl} userName={userName} data={data} text={text}/>
      <Comment imgUrl={imgUrl} userName={userName} data={data} text={text}/>
      <Comment imgUrl={imgUrl} userName={userName} data={data} text={text}/>
    </div>
  );
};

export default Comments;

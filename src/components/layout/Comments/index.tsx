import { CommentDTO } from '@/types/comment';

import styles from './index.module.css';
import Comment from './Comment';

interface Props {
  commentList: CommentDTO[];
}

const Comments = (props: Props) => {
  const { commentList } = props;

  return (
    <div className={styles.wrap}>
      {commentList.map((c, i) => (
        <Comment
          key={i}
          imgUrl={c.thumbnailImage}
          userName={c.username}
          commentDate={c.commentDate}
          content={c.content}
        />
      ))}
    </div>
  );
};

export default Comments;

import React, { useState } from 'react';

import { CommentDTO } from '@/types/comment';
import { useComment } from '@/hooks/useComment';

import styles from './index.module.css';

interface Props {
  commentList: CommentDTO[];
}

const Comments = (props: Props) => {
  const { commentList } = props;
  const { deleteCommentData, updateCommentData } = useComment();
  const [inputValue, setInputValue] = useState('');
  const [editingCommentId, setEditingCommentId] = useState<string | null>(null);
  const maxCharCount = 100;

  const handleDeleteCommentBtn = (commentId: string, memberId: string, testId: string) => {
    deleteCommentData(commentId, memberId, testId);
  };

  const handleUpdateCommentBtn = (memberId: string, testId: string, commentId: string) => {
    updateCommentData(memberId, testId, inputValue, commentId);
    onClickCancelBtn();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const truncatedInput = e.currentTarget.value.replace(/</g, '\\u003c');
    const limitedInput = truncatedInput.substring(0, maxCharCount);
    setInputValue(limitedInput);
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    memberId: string,
    testId: string,
    commentId: string,
  ) => {
    if (e.key === 'Enter' && e.nativeEvent.isComposing === false) {
      e.preventDefault();
      handleUpdateCommentBtn(memberId, testId, commentId);
    }
  };

  const onClickUpdateBtn = (commentId: string) => {
    setEditingCommentId(commentId);
  };
  const onClickCancelBtn = () => {
    setEditingCommentId(null);
    setInputValue('');
  };

  return (
    <div className={styles.wrap}>
      {commentList.map((c, i) => (
        <div key={i} className={styles.commentWrap}>
          <img src={c.thumbnailImage} className={styles.imgUrl} alt="comment" />
          <div className={styles.textBox}>
            <div>
              <div>
                <span>{c.username}</span>
                <span>{c.commentDate}</span>
              </div>
              {editingCommentId === c.id ? (
                <div className={styles.commentBtn}>
                  <button onClick={() => handleUpdateCommentBtn(c.memberId, c.testId, c.id)}>저장</button>
                  <button onClick={() => onClickCancelBtn()}>취소</button>
                </div>
              ) : (
                <div className={styles.commentBtn}>
                  <button onClick={() => onClickUpdateBtn(c.id)}>수정</button>
                  <button onClick={() => handleDeleteCommentBtn(c.id, c.memberId, c.testId)}>삭제</button>
                </div>
              )}
            </div>
            <div>
              {editingCommentId === c.id ? (
                <div className={styles.inputWrap}>
                  <input
                    type="text"
                    value={inputValue || c.content}
                    onChange={handleInputChange}
                    onKeyDown={(e) => handleKeyDown(e, c.memberId, c.testId, c.id)}
                  />
                  <p>
                    {inputValue.length}/{maxCharCount}
                  </p>
                </div>
              ) : (
                <p>{c.content}</p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comments;

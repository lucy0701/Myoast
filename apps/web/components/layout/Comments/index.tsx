import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import { CommentDTO } from '@/types/comment';
import { useComment } from '@/hooks/useComment';
import SessionStorage from '@/utils/SessionStorage';
import { MEMBER_ID, USER_INFO } from '@/constants/sessionStorage';
import { TYPE_MORE_BTN } from '@/constants/commonType';
import { getTimeDifference } from '@/utils/dateSplit';

import styles from './index.module.css';
import Button from '@/components/common/Button';

interface Props {
  testId: string;
}

const Comments = ({ testId }: Props) => {
  const {
    commentListData,
    getCommentList,
    isNextPage,
    deleteCommentData,
    updateCommentData,
  } = useComment();
  const [inputValue, setInputValue] = useState('');
  const [editingCommentId, setEditingCommentId] = useState<string | null>(null);
  const [moreCommentList, setMoreCommentList] = useState<CommentDTO[]>([]);
  const [isMore, setIsMore] = useState(false);

  useEffect(() => {
    getCommentList(testId, '0');
  }, [testId]);

  useEffect(() => {
    if (!isMore) {
      setMoreCommentList(
        commentListData.map((comment) => ({
          ...comment,
          commentDate: getTimeDifference(comment.commentDate) as string,
        })),
      );
    }
    if (isMore) {
      setMoreCommentList((prev) => [
        ...prev,
        ...commentListData.map((comment) => ({
          ...comment,
          commentDate: getTimeDifference(comment.commentDate) as string,
        })),
      ]);
    }
  }, [commentListData]);

  const maxCharCount = 100;
  const memberId = SessionStorage.getItem(USER_INFO + MEMBER_ID);

  const handleDeleteCommentBtn = (
    commentId: string,
    memberId: string,
    testId: string,
  ) => {
    deleteCommentData(commentId, memberId, testId);
  };

  const handleUpdateCommentBtn = (
    memberId: string,
    testId: string,
    commentId: string,
  ) => {
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

  const onClickMoreBtn = () => {
    // const nextPageNumber = (moreCommentList.length / 10).toString();
    if (isNextPage) setIsMore(true);
    getCommentList(testId, (moreCommentList.length / 10).toString());
  };
  return (
    <div className={styles.wrap}>
      {moreCommentList.map((c, i) => (
        <div key={i} className={styles.commentWrap}>
          <Image
            src={c.thumbnailImage}
            className={styles.imgUrl}
            width={45}
            height={45}
            alt='comment'
          />
          <div className={styles.textBox}>
            <div>
              <div>
                <span>{c.username}</span>
                <span>{c.commentDate}</span>
              </div>
              {editingCommentId === c.id ? (
                <div className={styles.commentBtn}>
                  <button
                    onClick={() =>
                      handleUpdateCommentBtn(c.memberId, c.testId, c.id)
                    }>
                    저장
                  </button>
                  <button onClick={() => onClickCancelBtn()}>취소</button>
                </div>
              ) : (
                <div className={styles.commentBtn}>
                  {memberId === c.memberId && (
                    <>
                      <button onClick={() => onClickUpdateBtn(c.id)}>
                        수정
                      </button>
                      <button
                        onClick={() =>
                          handleDeleteCommentBtn(c.id, c.memberId, c.testId)
                        }>
                        삭제
                      </button>
                    </>
                  )}
                </div>
              )}
            </div>

            <div>
              {editingCommentId === c.id ? (
                <div className={styles.inputWrap}>
                  <input
                    type='text'
                    value={inputValue || c.content}
                    onChange={handleInputChange}
                    onKeyDown={(e) =>
                      handleKeyDown(e, c.memberId, c.testId, c.id)
                    }
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
      <div className={isNextPage ? styles.btnWrap : styles.display_none}>
        <Button skin={TYPE_MORE_BTN} onClick={onClickMoreBtn}>
          더보기
        </Button>
      </div>
    </div>
  );
};

export default Comments;

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import { useComment } from '@/hooks/useComment';
import { MEMBER_ID, USER_INFO } from '@/constants/sessionStorage';
import SessionStorage from '@/utils/SessionStorage';

import styles from './index.module.css';

interface Props {
  testId: string;
  commentCount: number;
}
const AddComment = (props: Props) => {
  const { postAddCommentData } = useComment();

  const { testId, commentCount } = props;
  const [inputValue, setInputValue] = useState('');
  const [memberId, setMemberId] = useState<string | null>(null);
  const maxCharCount = 100;

  useEffect(() => {
    setMemberId(SessionStorage.getItem(USER_INFO + MEMBER_ID));
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const truncatedInput = e.currentTarget.value.replace(/</g, '\\u003c');
    const limitedInput = truncatedInput.substring(0, maxCharCount);
    setInputValue(limitedInput);
  };

  const handleOnClick = () => {
    if (!inputValue) return;
    if (memberId) postAddCommentData(memberId, testId, inputValue);
    setInputValue('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && e.nativeEvent.isComposing === false) {
      e.preventDefault();
      handleOnClick();
    }
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.commentText}>
        <div>
          <p>댓글</p>
          <span></span>
          <p>{commentCount}</p>
        </div>
        <p>
          {inputValue.length}/{maxCharCount}
        </p>
      </div>
      <div className={styles.inputWarp}>
        {memberId ? (
          <>
            <input
              type="text"
              placeholder="나쁜말 하면 신고합니다 ㅇㅅㅇ"
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={(e) => handleKeyDown(e)}
            />
            <button className={styles.addBtn} onClick={handleOnClick} />
          </>
        ) : (
          <Link href={'/login'} prefetch={false}>
            <p className={styles.nonLogin}>CLICK! 로그인 하고 댓글 작성 하기!</p>
          </Link>
        )}
      </div>
    </div>
  );
};
export default AddComment;

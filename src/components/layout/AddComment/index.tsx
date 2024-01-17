import React, { useState } from 'react';

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
  const maxCharCount = 100;
  // const memberId = typeof window !== 'undefined' ? sessionStorage.getItem(USER_INFO + MEMBER_ID): null;
  const memberId = SessionStorage.getItem(USER_INFO + MEMBER_ID);

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
          <span></span>
          <p>댓글</p>
          <p>{commentCount}</p>
        </div>
        <p>
          {inputValue.length}/{maxCharCount}
        </p>
      </div>
      <div className={styles.inputWarp}>
        <input
          type="text"
          placeholder="나쁜말 하면 신고합니다 ㅇㅅㅇ"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={(e) => handleKeyDown(e)}
        />
        <button className={styles.addBtn} onClick={handleOnClick} />
      </div>
    </div>
  );
};
export default AddComment;

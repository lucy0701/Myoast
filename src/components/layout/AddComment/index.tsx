import React, { useState } from 'react';

import styles from './index.module.css';

interface Props {
  commentCount: number;
}
const AddComment = (props: Props) => {
  const [inputValue, setInputValue] = useState('');
  const maxCharCount = 100;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const truncatedInput = e.currentTarget.value.replace(/</g, '\\u003c');
    const limitedInput = truncatedInput.substring(0, maxCharCount);
    setInputValue(limitedInput);
  };

  const handleOnClick = () => {
    if (!inputValue) return;
    alert('ㅇㅋ');
    setInputValue('');
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
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
          <p>{props.commentCount}</p>
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
          onKeyDown={(e) => handleKeyPress(e)}
        />
        <button className={styles.addBtn} onClick={handleOnClick} />
      </div>
    </div>
  );
};
export default AddComment;

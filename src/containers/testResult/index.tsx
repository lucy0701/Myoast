'use client';

import { commentData } from '@/utils/testData';
import { TYPE_BOTTOM_BTN } from '@/constants/constant';

import Button from '@/components/common/Button';
import { ResultCountBtn } from '@/components/layout/CountBtn';
import AddComment from '@/components/layout/AddComment';
import Comments from '@/components/layout/Comments';
import styles from './index.module.css';

export default function TestResult() {
  return (
    <div className={styles.wrap}>
      <div className={styles.resultImg}>
        <img src="/images/test/card.jpeg" />
      </div>
      <h2 className={styles.tsetTitle}>결과 제목</h2>
      <div className={styles.textBox}>
        <p>결과 내용</p>
      </div>
      <ResultCountBtn likeCount={0}></ResultCountBtn>
      <AddComment commentCount={0} />
      <Comments
        imgUrl={commentData.imgUrl}
        userName={commentData.name}
        data={commentData.date}
        text={commentData.text}
      ></Comments>
      <Button skin={TYPE_BOTTOM_BTN}>테스트 결과 공유하기</Button>
    </div>
  );
}

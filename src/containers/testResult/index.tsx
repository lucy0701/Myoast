'use client';

import { useEffect } from 'react';

import { TYPE_BOTTOM_BTN } from '@/constants/constant';
import { useComment } from '@/hooks/useComment';
import { useLike } from '@/hooks/useLike';
import { Test } from '@/types/test';

import Button from '@/components/common/Button';
import { ResultCountBtn } from '@/components/layout/CountBtn';
import AddComment from '@/components/layout/AddComment';
import Comments from '@/components/layout/Comments';
import styles from './index.module.css';

// post 필요 데이터 연결 해야함
export default function TestResult() {
    return (
      <div className={styles.wrap}>
        <div className={styles.resultImg}>
          <img src="/images/test/card.jpeg" alt="test" />
        </div>
        <h2 className={styles.tsetTitle}>결과 제목</h2>
        <div className={styles.textBox}>
          <p>결과 내용</p>
        </div>
        <ResultCountBtn likeCount={0}></ResultCountBtn>
        <AddComment commentCount={0} />
        {/* <Comments commentList={commentList} /> */}
        <Button skin={TYPE_BOTTOM_BTN}>테스트 결과 공유하기</Button>
      </div>
    );
  }

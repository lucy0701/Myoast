'use client';

import { useEffect } from 'react';

import { TYPE_play_CNT, TYPE_START_BTN } from '@/constants/constant';
import { Test } from '@/types/test';
import { useLike } from '@/hooks/useLike';
import { useComment } from '@/hooks/useComment';

import { MainTestCard } from '@/components/layout/TestCard';
import CountIcon from '@/components/common/Count';
import Button from '@/components/common/Button';
import { CountBtn } from '@/components/layout/CountBtn';
import AddComment from '@/components/layout/AddComment';
import Comments from '@/components/layout/Comments';
import Footer from '@/components/layout/Footer';
import styles from './index.module.css';

interface Props {
  testData: Test;
}
export default function TestMain(props: Props) {
  const { testData } = props;
  const { getLikeCount, likeCount } = useLike();
  const { commentList, getCommentList, commentCount, getCommentCount } = useComment();

  useEffect(() => {
    getLikeCount(testData.id);
    getCommentList(testData.id,'0');
    getCommentCount(testData.id);
  }, []);

  if (commentList) {
    return (
      <div className={styles.wrap}>
        <div>
          <MainTestCard testTitle={testData.title} imgUrl={testData.imageUrl} />
          <CountIcon playCount={testData.playCount} type={TYPE_play_CNT} />
        </div>
        <div className={styles.textBox}>
          <p>{testData.content}</p>
        </div>
        <Button link={`/test/play/${testData.id}`} skin={TYPE_START_BTN}>
          테스트 시작
        </Button>
        <CountBtn likeCount={likeCount} />
        <AddComment commentCount={commentCount} />
        <Comments commentList={commentList}/>
        <Footer />
      </div>
    );
  }
}

'use client';

import { testData1, commentData } from '@/utils/testData';
import { TYPE_play_CNT, TYPE_START_BTN } from '@/constants/constant';

import { MainTestCard } from '@/components/common/TestCard';
import CountIcon from '@/components/common/Count';
import Button from '@/components/common/Button';
import { CountBtn } from '@/components/layout/CountBtn';
import AddComment from '@/components/layout/AddComment';
import Comments from '@/components/layout/Comments';
import Footer from '@/components/layout/Footer';

import styles from './index.module.css';

export default function TestMain() {
  return (
    <div className={styles.wrap}>
      <div>
        <MainTestCard testTitle={testData1.testTitle} imgUrl={testData1.imgUrl} />
        <CountIcon playCount={testData1.playCount} type={TYPE_play_CNT} />
      </div>
      <div className={styles.textBox}>
        <p>테스트 설명1</p>
      </div>
      <Button link={'/test/play'} skin={TYPE_START_BTN}>
        테스트 시작
      </Button>
      <CountBtn likeCnt={testData1.likeCount}></CountBtn>
      <AddComment commentCount={testData1.commentCount} />
      <Comments
        imgUrl={commentData.imgUrl}
        userName={commentData.name}
        data={commentData.date}
        text={commentData.text}
      ></Comments>
      <Footer />
    </div>
  );
}

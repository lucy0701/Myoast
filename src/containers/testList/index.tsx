'use client';

import { TYPE_BOTTOM_BTN } from '@/constants/constant';

import styles from './index.module.css';
import Title from '@/components/common/Title';
import Button from '@/components/common/Button';
import TestCardList from '@/components/layout/TestCardList';

export default function TestList() {
  return (
    <div className={styles.wrap}>
      <Title title={'전체 테스트'} contents={'모든 테스트가 있어요!'} />
      <TestCardList
        link={'/'}
        testTitle={'리리 귀여워'}
        imgSrc={'/images/test/card.jpeg'}
        playCount={'123'}
        likeCount={'33'}
        commentCount={'33'}
      />
      <Button link={'/'} skin={TYPE_BOTTOM_BTN}>
        아무거나 시작
      </Button>
    </div>
  );
}

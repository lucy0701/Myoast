import { TEST_CARD_SIZE_M, TYPE_TEST_CARD } from '@/constants/constant';

import Title from '@/components/common/Title';
import styles from './index.module.css';
import TestCard from '@/components/common/TestCard';

const NewTests = () => {
  const data = {
    testTitle: '테스트입니다13123123123123123아아',
    link: '/',
    playCount: '123',
  };
  const items = [data, data, data, data, data, data];

  return (
    <>
      <Title title={'최신 심테'} />
      <div className={styles.newTestWrap}>
        {items.map((t, i) => (
          <TestCard
            key={i}
            link={t.link}
            size={TEST_CARD_SIZE_M}
            type={TYPE_TEST_CARD}
            testTitle={t.testTitle}
            playCount={t.playCount}
          >
            <img src={'/images/test/card.jpeg'} alt={'테스트이미지'} />
          </TestCard>
        ))}
      </div>
    </>
  );
};

export default NewTests;

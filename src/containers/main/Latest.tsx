import { TEST_CARD_SIZE_M, TYPE_TEST_CARD } from '@/constants/constant';

import Title from '@/components/common/Title';
import styles from './index.module.css';
import { TestCard } from '@/components/common/TestCard';

interface Props {
  link: string;
  testTitle: string;
  playCount: string;
  imgUrl: string;
}

const NewTests = (props: Props) => {
  const { link, testTitle, playCount, imgUrl } = props;

  return (
    <>
      <Title title={'최신 심테'} />
      <div className={styles.newTestWrap}>
        <TestCard
          link={link}
          testTitle={testTitle}
          imgUrl={imgUrl}
          playCount={playCount}
          size={TEST_CARD_SIZE_M}
          type={TYPE_TEST_CARD}
        ></TestCard>
      </div>
    </>
  );
};

export default NewTests;

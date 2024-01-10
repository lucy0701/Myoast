import { TEST_CARD_SIZE_L, TYPE_ALL_CTN } from '@/constants/constant';

import styles from './index.module.css';
import TestCard from '@/components/common/TestCard';
import CountIcon from '@/components/common/CountIcon';

interface Props {
  link: string;
  testTitle: string;
  imgSrc: string;
  playCount: string;
  likeCount: string;
  commentCount: string;
}

const TestCardList = (props: Props) => {
  const { link, testTitle, imgSrc, playCount, likeCount, commentCount } = props;
  return (
    <div className={styles.cardList}>
      <div className={styles.card}>
        <TestCard link={link} size={TEST_CARD_SIZE_L} testTitle={testTitle}>
          <img src={imgSrc} alt={testTitle} />
        </TestCard>
        <CountIcon type={TYPE_ALL_CTN} playCount={playCount} likeCount={likeCount} commentCount={commentCount}></CountIcon>
      </div>
    </div>
  );
};
export default TestCardList;

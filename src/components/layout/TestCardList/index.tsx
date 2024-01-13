import { TEST_CARD_SIZE_L, TYPE_ALL_CNT, TYPE_TEST_CARD } from '@/constants/constant';

import styles from './index.module.css';
import { TestCard } from '@/components/layout/TestCard';
import CountIcon from '@/components/common/Count';

interface Props {
  testId: string;
  testTitle: string;
  imgUrl: string;
  playCount: number;
  likeCount: number;
  commentCount: number;
}

const TestCardList = (props: Props) => {
  const { testId, testTitle, imgUrl, playCount, likeCount, commentCount } = props;
  return (
    <div className={styles.card}>
      <TestCard testId={testId} imgUrl={imgUrl} size={TEST_CARD_SIZE_L} type={TYPE_TEST_CARD} testTitle={testTitle} />
      <CountIcon
        type={TYPE_ALL_CNT}
        playCount={playCount}
        likeCount={likeCount}
        commentCount={commentCount}
      ></CountIcon>
    </div>
  );
};
export default TestCardList;

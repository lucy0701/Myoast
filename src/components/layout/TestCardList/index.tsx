import { TEST_CARD_SIZE_L, TYPE_ALL_CNT } from '@/constants/constant';

import styles from './index.module.css';
import { TestCard } from '@/components/common/TestCard';
import CountIcon from '@/components/common/Count';

interface Props {
  link: string;
  testTitle: string;
  imgUrl: string;
  playCount: number;
  likeCount: number;
  commentCount: number;
}

const TestCardList = (props: Props) => {
  const { link, testTitle, imgUrl, playCount, likeCount, commentCount } = props;

  return (
    <div className={styles.card}>
      <TestCard link={link} imgUrl={imgUrl} size={TEST_CARD_SIZE_L} testTitle={testTitle} />
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

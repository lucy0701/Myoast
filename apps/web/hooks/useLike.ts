import { useRecoilState } from 'recoil';

import { deleteLikeCountAPI, getLikeCountAPI, getIsLikeCountAPI, postLikeCountAPI } from '@/services/like';
import { likeCountState, isLikeCountState } from '@/states/likeState';

export const useLike = () => {
  const [likeCountData, setLikeCountData] = useRecoilState(likeCountState);
  const [isLikeCount, setIsLikeCount] = useRecoilState(isLikeCountState);

  const getLikeCountData = async (tsetid: string) => {
    try {
      const res = await getLikeCountAPI(tsetid);
      if (res) {
        setLikeCountData(res.data);
      }
    } catch (err) {
      alert(err);
    }
  };

  const getIsLikeCountData =async (testId: string, memberId: string) => {
    try {
      const res = await getIsLikeCountAPI(testId, memberId);
      if (res) {
        setIsLikeCount(res.data);
      }
    } catch (err) {
      alert(err)
    }
  }

  const postLikeCountData = async (testId: string, memberId: string) => {
    try {
      await postLikeCountAPI(testId, memberId);
      await getLikeCountData(testId);
      await getIsLikeCountData(testId, memberId);
    } catch (err) {
      alert(err);
    }
  };

  const deleteLikeCountData =async (testId: string, memberId: string) => {
    try {
      await deleteLikeCountAPI(testId, memberId);
      await getLikeCountData(testId);
      await getIsLikeCountData(testId, memberId);
    } catch (err) {
      alert(err);
    }
  }

  return {
    likeCountData,
    isLikeCount,
    getLikeCountData,
    getIsLikeCountData,
    postLikeCountData,
    deleteLikeCountData,
  };
};

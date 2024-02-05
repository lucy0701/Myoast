import { postShareAPI } from '@/services/share';

export const useShare = () => {
  const postShareData = async (testId: string, memberId: string, type: string) => {
    try {
      await postShareAPI(testId, memberId, type);
    } catch (err) {
      alert(err);
    }
  };
  return {
    postShareData,
  }
};

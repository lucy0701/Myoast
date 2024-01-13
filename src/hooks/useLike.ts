import { useState } from 'react';

import { getLikeCountAPI } from '@/services/like';

export const useLike = () => {
  const [likeCount, setLikeCount] = useState(0);

  const getLikeCount = async (tsetid: string) => {
    try {
      const response = await getLikeCountAPI(tsetid);
      if (response) {
        setLikeCount(response.data);
      }
    } catch (error) {
      alert(error);
    }
  };

  return {
    likeCount,
    getLikeCount,
  };
};

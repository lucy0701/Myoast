import { useState } from 'react';

import { getCommentCountAPI, getCommentsAPI } from '@/services/comment';
import { CommentData } from '@/types/comment';

export const useComment = () => {
  const [commentList, setCommentsList] = useState<CommentData[]>();
  const [commentCount, setCommentCount] = useState(0);

  // page별 목록 가져오기
  const getCommentList = async (testid: string, pageNumber: string) => {
    try {
      const response = await getCommentsAPI(testid, pageNumber);
      if (response) {
        setCommentsList(response.data.commentDTOList);
      }
    } catch (error) {
      alert(error);
    }
  };

  const getCommentCount = async (testid: string) => {
    try {
      const response = await getCommentCountAPI(testid);
      if (response) {
        setCommentCount(response.data);
      }
    } catch (error) {
      alert(error);
    }
  };

  return {
    commentList,
    getCommentList,
    commentCount,
    getCommentCount
  };
};

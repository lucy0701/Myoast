import { useRecoilState } from 'recoil';

import {
  deleteCommentAPI,
  getCommentCountAPI,
  getCommentsAPI,
  postAddCommentAPI,
  updateCommentAPI,
} from '@/services/comment';
import { CommentDTO } from '@/types/comment';
import { commentCountState, commentListState, commentNextPageState } from '@/states/commentState';

export const useComment = () => {
  const [commentListData, setCommentsListData] = useRecoilState<CommentDTO[]>(commentListState);
  const [isNextPage, setIsNextPage] = useRecoilState(commentNextPageState);
  const [commentCount, setCommentCount] = useRecoilState(commentCountState);

  const getCommentList = async (testid: string, pageNumber: string) => {
    try {
      const res = await getCommentsAPI(testid, pageNumber);
      if (res) {
        setCommentsListData(res.data.commentDTOList);
        setIsNextPage(res.data.hasNextPage);
      }
    } catch (err) {
      alert(err);
    }
  };

  const getCommentCount = async (testid: string) => {
    try {
      const res = await getCommentCountAPI(testid);
      if (res) {
        setCommentCount(res.data);
      }
    } catch (err) {
      alert(err);
    }
  };

  const postAddCommentData = async (memberId: string, testId: string, content: string) => {
    try {
      const res = await postAddCommentAPI(memberId, testId, content);
      if (res) {
        getCommentList(testId, '0');
        getCommentCount(testId);
      }
    } catch (err) {
      alert(err);
    }
  };

  const updateCommentData = async (memberId: string, testId: string, content: string, commentId: string) => {
    try {
      await updateCommentAPI(memberId, testId, content, commentId);
      await getCommentList(testId, '0');
      await getCommentCount(testId);
    } catch (err) {
      alert(err);
    }
  };

  const deleteCommentData = async (commentId: string, memberId: string, testId: string) => {
    const data = {
      id: commentId,
      memberId: memberId,
    };
    try {
      await deleteCommentAPI(data);
      await getCommentList(testId, '0');
      await getCommentCount(testId);
    } catch (err) {
      alert(err);
    }
  };

  return {
    commentListData,
    isNextPage,
    getCommentList,
    commentCount,
    getCommentCount,
    postAddCommentData,
    updateCommentData,
    deleteCommentData,
  };
};

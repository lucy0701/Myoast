import { getHeaders } from '@/utils/util';
import { CommentResponse } from '@/types/comment';

import { apiBe } from '.';

const headers = getHeaders();

export const getCommentCountAPI = (testId: string) => apiBe(`/v1/test/${testId}/comments/count`, { headers });

export const getCommentsAPI = (testId: string, pageNumber: string) =>
  apiBe<CommentResponse>(`/v1/test/comments/${testId}/page/${pageNumber}`, { headers });

export const postAddCommentAPI = (memberId: string, testId: string, content: string) =>
  apiBe.post(
    `/v1/test/comments`,
    {
      memberId: memberId,
      testId: testId,
      content: content,
    },
    { headers },
  );

export const updateCommentAPI = (memberId: string, testId: string, content: string, commentId: string) =>
  apiBe.patch(
    `/v1/test/comments`,
    {
      memberId: memberId,
      testId: testId,
      content: content,
      id: commentId,
    },
    { headers },
  );

interface Data {
  id: string;
  memberId: string;
}

export const deleteCommentAPI = (data: Data) => apiBe.delete(`v1/test/comments`, { data, headers });
import { getHeaders } from '@/utils/util';
import { CommentResponse } from '@/types/comment';

import { apiBe } from '.';

const headers = getHeaders();

export const getCommentCountAPI = (testid: string) => apiBe(`/v1/test/${testid}/comments/count`, { headers });

export const getCommentsAPI = (testid: string, pageNumber: string) =>
  apiBe<CommentResponse>(`/v1/test/comments/${testid}/page/${pageNumber}`, { headers });

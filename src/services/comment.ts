import { getHeaders } from '@/utils/util';
import { CommentsData } from '@/types/comment';

import { apiBe } from '.';

const headers = getHeaders();

export const getCommentCountAPI = (testid: string) => apiBe(`/v1/test/${testid}/comments/count`, { headers });

export const getCommentsAPI = (testid: string, pageNumber: string) =>
  apiBe<CommentsData>(`/v1/test/comments/${testid}/page/${pageNumber}`, { headers });

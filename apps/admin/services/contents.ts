import { getHeaders } from '@/utils/util';
import { apiBe, apiBeWithCache } from '.';
import { MbtiTest, TestCover } from '@/types/test';

const headers = getHeaders();

export const getContentListAPI = () =>
  apiBeWithCache<TestCover[]>(`v1/tests`, {
    headers,
  });

export const getContentAPI = (testId: string) =>
  apiBe<MbtiTest>(`v1/tests/test/${testId}`, {
    headers,
  });

export const getCommentCountAPI = (testId: string) =>
  apiBe<number>(`v1/test/${testId}/comments/count`, {
    headers,
  });

export const getSharesCountAPI = (testId: string) =>
  apiBe<number>(`v1/tests/${testId}/shares/count`, {
    headers,
  });

export const getLinkCountAPI = (testId: string) =>
  apiBe<number>(`v1/tests/${testId}/shares/count/type`, {
    params: {
      type: 'LINK',
    },
    headers,
  });

export const deleteContentAPI = (testId: string) =>
  apiBe.delete(`v1/tests/test/${testId}`, {
    headers,
  });

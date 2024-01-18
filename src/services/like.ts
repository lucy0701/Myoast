import { getHeaders } from '@/utils/util';

import { apiBe } from '.';

const headers = getHeaders();

export const getLikeCountAPI = (likeId: string) => apiBe(`v1/test/${likeId}/like/count`, {headers});

export const getIsLikeCountAPI = (testId: string, memberId: string) => apiBe(`v1/test/${testId}/${memberId}/like`,{headers});

export const postLikeCountAPI = (testId: string, memberId: string) => apiBe.post(`v1/test/${testId}/${memberId}/like`,{ testId: testId, memberId: memberId }, {headers});

export const deleteLikeCountAPI = (testId: string, memberId: string) => apiBe.delete(`v1/test/${testId}/${memberId}/like`,{headers});
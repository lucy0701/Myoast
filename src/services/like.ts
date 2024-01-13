import { getHeaders } from '@/utils/util';

import { apiBe } from '.';

const headers = getHeaders();

export const getLikeCountAPI = (likeId: string) => apiBe(`v1/test/${likeId}/like/count`, {headers});

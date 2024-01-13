import { apiBe } from '@/services';
import { Latest } from '@/types/test';
import { getHeaders } from '@/utils/util';

const headers = getHeaders();

export const getLatestListAPI = (testid: string) => apiBe<Latest>(`/v1/tests/0/${testid}`, { headers });

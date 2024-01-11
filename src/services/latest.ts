import { apiBe } from '@/services';
import { getHeaders } from '@/utils/util';

const headers = getHeaders();

export const getLatestsAPI = (id: string) => apiBe(`/v1/tests/0/${id}`, { headers });
import { apiBe } from '@/services';
import { Latest, Test, TestAll } from '@/types/test';
import { getHeaders } from '@/utils/util';

const headers = getHeaders();

export const getTestListAPI = () => apiBe<TestAll[]>('/v1/tests', { headers });

export const getLatestListAPI = (testid: string) => apiBe<Latest>(`/v1/tests/0/${testid}`, { headers });

export const getTestAPI = (testid:string) => apiBe<Test>(`v1/tests/test/${testid}`,{ headers });

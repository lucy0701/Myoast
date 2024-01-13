// import { headers } from 'next/dist/client/components/headers';

import { apiBe } from '@/services';
import { Test, TestAll } from '@/types/test';
import { getHeaders } from '@/utils/util';

const headers = getHeaders();

export const getTestListAPI = () => apiBe<TestAll[]>('/v1/tests', { headers });

export const getTestAPI = (testid:string) => apiBe<Test>(`v1/tests/test/${testid}`,{ headers })
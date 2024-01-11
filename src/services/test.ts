// import { headers } from 'next/dist/client/components/headers';

import { apiBe } from '@/services';
import { TestArr } from '@/types/testArr';
import { getHeaders } from '@/utils/util';

const headers = getHeaders();

export const getTestsAPI = () => apiBe<TestArr[]>('/v1/tests', { headers });
export const getTestAPI = (id: string) => apiBe<TestArr>(`/v1/tests/${id}`,{ headers });
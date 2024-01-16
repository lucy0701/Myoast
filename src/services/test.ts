import { apiBe } from '@/services';
import { TestCoverResponse, Test, TestCover } from '@/types/test';
import { getHeaders } from '@/utils/util';

const headers = getHeaders();

export const getTestListAPI = () => apiBe<TestCover[]>('/v1/tests', { headers });

export const getLatestListAPI = (testId: string) => apiBe<TestCoverResponse>(`/v1/tests/0/${testId}`, { headers });

export const getTestAPI = (testid: string) => apiBe<Test>(`v1/tests/test/${testid}`, { headers });

export const postTestResult = (testId: string, score: []) =>
  apiBe.post(`/v1/member-test-result/${testId}`, score, { headers });

export const postMemberTestResult = (testId: string, memberId:string, score: []) => apiBe.post(`/v1/member-test-result/${testId}/${memberId}`, score, { headers });

import { apiBe } from '@/services';
import { TestCoverResponse, Test, TestCover } from '@/types/test';
import { getHeaders } from '@/utils/util';

const headers = getHeaders();

export const getTestListAPI = () => apiBe<TestCover[]>('/v1/tests', { headers });

export const getLatestListAPI = (page: string, size:string) => apiBe<TestCoverResponse>(`/v1/tests/${page}/${size}`, { headers });

export const getTestAPI = (testid: string) => apiBe<Test>(`v1/tests/test/${testid}`, { headers });

// TestResult
export const postTestResultAPI = (testId: string, score: []) =>
  apiBe.post(`/v1/member-test-result/${testId}`, score, { headers });

export const postMemberTestResultAPI = (testId: string, memberId:string, score: []) => apiBe.post(`/v1/member-test-result/${testId}/${memberId}`, score, { headers });

export const getTestResultAPI = (testId: string, testResultId: string) => apiBe(`v1/tests/test/test-result/${testId}/${testResultId}`,{headers});

// RandomTset
export const getRandomTestAPI = () => apiBe<Test>(`v1/tests/random`, { headers });
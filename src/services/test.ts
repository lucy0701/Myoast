import { apiBe } from '@/services';
import { Test } from '@/types/test';
import { getHeaders } from '@/utils/util';

const headers = getHeaders();

export const getTestAPI = (testid: string) => apiBe<Test>(`v1/tests/test/${testid}`, { headers });

// TestResult
export const postTestResultAPI = (testId: string, score: number[]) =>
  apiBe.post(`/v1/member-test-result/${testId}`, score, { headers });

export const postMemberTestResultAPI = (testId: string, memberId:string, score: number[]) => apiBe.post(`/v1/member-test-result/${testId}/${memberId}`, score, { headers });

export const getTestResultAPI = (testId: string, testResultId: string) => apiBe(`v1/tests/test/test-result/${testId}/${testResultId}`,{headers});

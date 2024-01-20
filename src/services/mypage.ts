import { memberTestResultData } from '@/types/mypage';
import { getHeaders } from '@/utils/util';

import { apiBe } from '.';

const headers = getHeaders();
interface Data {
  page: number;
  size: number;
}
export const getMemberTestResultAPI = (memberId: string, data: Data) =>
  apiBe<memberTestResultData>(`v1/member-test-result/${memberId}`, {  params: data, headers });

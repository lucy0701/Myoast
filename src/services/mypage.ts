import { memberTestResultData } from '@/types/mypage';
import { getHeaders } from '@/utils/util';
import {MypageData} from '@/types/mypage'

import { apiBe } from '.';

const headers = getHeaders();

export const getMemberTestResultAPI = (memberId: string, data: MypageData) =>
  apiBe<memberTestResultData>(`v1/member-test-result/${memberId}`, { data: data, headers: headers });

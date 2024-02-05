import { getHeaders } from '@/utils/util';

import { apiBe } from '.';

const headers = getHeaders();

export const postShareAPI = (testId: string, memberId: string, type: string) =>
  apiBe.post(
    `v1/tests/share`,
    {
      testId: testId,
      memberId: memberId,
      type: type,
    },
    { headers },
  );

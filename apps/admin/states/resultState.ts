import { MbtiResults } from '@/types/test';
import { atom } from 'recoil';

export const mbtiResultState = atom<MbtiResults[]>({
  key: 'mbtiResultState',
  default: [],
});
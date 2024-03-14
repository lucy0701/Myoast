import { MbtiQuestions } from '@/types/test';
import { atom } from 'recoil';

export const mbtiQuestionsState = atom<MbtiQuestions[]>({
  key: 'mbtiQuestionsState',
  default: [],
});
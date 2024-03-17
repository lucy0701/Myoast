import { MbtiQuestions } from '@/types/test';
import { atom } from 'recoil';

const generateMbtiQuestions = (count: number): MbtiQuestions[] => {
  return Array.from({ length: count }, (_, index) => ({
    // id: '',
    index: index,
    question: '',
    answerPlus: '',
    answerMinus: '',
  }));
};

const questionCount = 12;

export const mbtiQuestionsState = atom<MbtiQuestions[]>({
  key: 'mbtiQuestionsState',
  default: generateMbtiQuestions(questionCount),
});

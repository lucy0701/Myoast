import { MbtiQuestions } from '@/types/test';
import { atom } from 'recoil';

const generateMbtiQuestions = (count: number): MbtiQuestions[] => {
  return Array.from({ length: count }, (_, index) => ({
    index: index + 1,
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


// const generateIsMbtiQuestionsInputs = (count: number) => {
//   return Array.from({ length: count }, (_, index) => ({
//     index: index + 1,
//     isEmpty: true,
//   }));
// };

// export const isMbtiQuestionsEmptyState = atom({
//   key: 'isMbtiQuestionsInputState',
//   default: generateIsMbtiQuestionsInputs(questionCount),
// });
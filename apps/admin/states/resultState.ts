import { MbtiResults } from '@/types/test';
import { atom } from 'recoil';

const generateMbtiResultState = () => {
  const resultTitles = [
    'ENFJ',
    'ENFP',
    'ENTJ',
    'ENTP',
    'ESFJ',
    'ESFP',
    'ESTJ',
    'ESTP',
    'INFJ',
    'INFP',
    'INTJ',
    'INTP',
    'ISFJ',
    'ISFP',
    'ISTJ',
    'ISTP',
  ];

  return resultTitles.map((title) => ({
    result: title,
    title: '',
    content: '',
    imageUrl: '',
  }));
};

export const mbtiResultState = atom<MbtiResults[]>({
  key: 'mbtiResultState',
  default: generateMbtiResultState(),
});

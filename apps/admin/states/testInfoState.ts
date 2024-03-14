import { atom } from 'recoil';

export const testInfoState = atom({
  key: 'testInfoState',
  default: {
    title: '',
    content: '',
  },
});

export const testTypeState = atom({
  key: 'testTypeState',
  default: {
    type: '',
  }
})
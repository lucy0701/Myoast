import { atom } from 'recoil';

import { CommentDTO } from '@/types/comment';

export const commentListState = atom<CommentDTO[]>({
  key: 'commentListState',
  default: [],
});
export const commentNextPageState = atom({
  key:'commentNextPageState',
  default: false,
})

export const commentCountState = atom({
  key: 'commentCountState',
  default: 0,
});

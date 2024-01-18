import { atom } from "recoil";

export const likeCountState = atom({
    key: 'likeCountState',
    default: 0
});

export const isLikeCountState = atom({
    key: 'likeMemberState',
    default: false,
})

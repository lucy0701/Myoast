import { AtomEffect, atom } from 'recoil';

export const sessionStorageEffect: <T>(Key: string) => AtomEffect<T> =
  (key: string) =>
  ({ setSelf, onSet }) => {
    if (typeof window !== 'undefined') {
      const savedValue = sessionStorage.getItem(key);
      if (savedValue != null) {
        setSelf(JSON.parse(savedValue));
      }

      onSet((newValue, _, isReset) => {
        isReset ? sessionStorage.removeItem(key) : sessionStorage.setItem(key, JSON.stringify(newValue));
      });
    }
  };

export const userInfo = atom({
  key: 'userInfo',
  default: {},
  effects_UNSTABLE: [sessionStorageEffect('userInfo')],
});

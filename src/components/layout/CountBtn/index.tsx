import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import { useLike } from '@/hooks/useLike';
import SessionStorage from '@/utils/SessionStorage';
import { MEMBER_ID, USER_INFO } from '@/constants/sessionStorage';

import styles from './index.module.css';

interface Props {
  testId: string;
  type: 'testMain' | 'tsetResult';
}

export default function CountBtn(props: Props) {
  const { testId, type } = props;
  const { likeCountData, isLikeCount, getLikeCountData, getIsLikeCountData, postLikeCountData, deleteLikeCountData } =
    useLike();
  const router = useRouter();
  const memberId = SessionStorage.getItem(USER_INFO + MEMBER_ID);

  useEffect(() => {
    getLikeCountData(testId);
  }, []);

  useEffect(() => {
    if (memberId) {
      getIsLikeCountData(testId, memberId);
    }
  }, [memberId]);

  const handleLikeBtn = () => {
    if (memberId && !isLikeCount) {
      postLikeCountData(testId, memberId);
    } else if (memberId && isLikeCount) {
      deleteLikeCountData(testId, memberId);
    } else if (!memberId) {
      router.push('/login');
    }
  };

  if (type === 'testMain')
    return (
      <div className={styles.wrap}>
        <div className={styles.btnWarp}>
          <div className={styles.btnBox}>
            <button className={styles.linkCopyBtn} />
            <p>링크 복사</p>
          </div>
          <div className={styles.btnBox}>
            <button className={isLikeCount ? styles.onLikeBtn : styles.offLikeBtn} onClick={() => handleLikeBtn()} />
            <p>추천</p>
            <p className={styles.likeCnt}>{likeCountData}</p>
          </div>
          <div className={styles.btnBox}>
            <button className={styles.shareBtn} />
            <p>공유 하기</p>
          </div>
        </div>
      </div>
    );
  return (
    <div className={styles.wrap}>
      <div className={styles.btnWarp}>
        <div className={styles.btnBox}>
          <button className={styles.linkCopyBtn} />
          <p>링크 복사</p>
        </div>
        <div className={styles.btnBox}>
          <button className={styles.replayBtn} />
          <p>다시 하기</p>
        </div>
        <div className={styles.btnBox}>
          <button className={isLikeCount ? styles.onLikeBtn : styles.offLikeBtn} onClick={() => handleLikeBtn()} />
          <p>추천</p>
          <p className={styles.likeCnt}>{likeCountData}</p>
        </div>
      </div>
    </div>
  );
}

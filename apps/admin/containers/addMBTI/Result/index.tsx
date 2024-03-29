'use client';

import { useRecoilValue } from 'recoil';
import styles from './index.module.css';
import ResultCard from './ResultCard';
import { mbtiResultState } from '@/states/resultState';

export default function Result() {
  const results = useRecoilValue(mbtiResultState);

  return (
    <div className={styles.wrap}>
      <h2 className={styles.resultTitle}>Result</h2>
      <div className={styles.contentsWrap}>
        {results.map((result, index) => (
          <div key={`${index}`} className={styles.resultWrap}>
            <ResultCard key={`${index}`} resultName={result.result} />
          </div>
        ))}
      </div>
    </div>
  );
}

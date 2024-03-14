import styles from './index.module.css';
import ResultCard from './ResultCard';

export default function Result() {
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
  return (
    <div className={styles.wrap}>
      <h2 className={styles.resultTitle}>Result</h2>
      <div className={styles.contentsWrap}>
        {resultTitles.map((resultName, columnIndex) => (
          <div key={`${columnIndex}`} className={styles.resultWrap}>
            <ResultCard key={`${columnIndex}`} resultName={resultName} />
          </div>
        ))}
      </div>
    </div>
  );
}

import styles from './index.module.css';
import ResultCard from './ResultCard';

export default function Result() {
  const resultTitles = [
    'ENTP',
    'ESTP',
    'ENTJ',
    'ESTJ',
    'ENFP',
    'ESFP',
    'ENFJ',
    'ESFJ',
    'INTP',
    'ISTP',
    'INTJ',
    'ISTJ',
    'INFP',
    'ISFP',
    'INFJ',
    'ISFJ',
  ];
  return (
    <div className={styles.wrap}>
      <h2 className={styles.resultTitle}>Result</h2>
      <div className={styles.contentsWrap}>
        {resultTitles.map((title, columnIndex) => (
          <div key={`${columnIndex}`} className={styles.resultWrap}>
            <ResultCard key={`${columnIndex}`} title={title} />
          </div>
        ))}
      </div>
    </div>
  );
}

import ResultCard from './ResultCard';

export default function Result() {
    const resultTitles = [['ENTP','ESTP'],['ENTJ','ESTJ'],['ENFP','ESFP'],['ENFJ','ESFJ'],['INTP','ISTP'],['INTJ','ISTJ'],['INFP','ISFP'],['INFJ','ISFJ']]
  return (
    <div>
    {resultTitles.map((column, columnIndex) => (
        <div key={columnIndex} style={{ display: 'flex', justifyContent: 'space-between' }}>
            {column.map((title, rowIndex) => (
                <ResultCard key={`${columnIndex}-${rowIndex}`} title={title} />
            ))}
        </div>
    ))}
</div>
  );
}

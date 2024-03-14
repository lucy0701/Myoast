import styles from './index.module.css';
import TextArea from 'antd/es/input/TextArea';
import { useRecoilState } from 'recoil';
import { mbtiQuestionsState } from '@/states/questionsState';

interface Props {
  title: string;
  index: number;
  type: 'question' | 'answerPlus' | 'answerMinus';
  placeholderText?: string;
  heightSize?: number;
}

const InputBox = ({
  title,
  index,
  type,
  placeholderText,
  heightSize,
}: Props) => {

  const [questions,setQuestions] = useRecoilState(mbtiQuestionsState);

  const existingQuestion = questions.find(
    (question) => question.index === index,
  );

  const onChangeValue = (index: number, type: string, value: string) => {
    setQuestions((prevQuestions) => {
      if (existingQuestion) {
        return prevQuestions.map((question) =>
          question.index === index
            ? {
                ...question,
                [type]: value,
              }
            : question,
        );
      } else {
        return [
          ...prevQuestions,
          {
            index,
            question: type === 'question' ? value : '',
            answerPlus: type === 'answerPlus' ? value : '',
            answerMinus: type === 'answerMinus' ? value : '',
          },
        ];
      }
    });
  };

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { value } = e.target;
    onChangeValue(index, type, value);
  };


  return (
    <div className={styles.questionBox}>
      <div className={styles.titleBox}>{title}</div>
      <TextArea
        value={existingQuestion && existingQuestion[type] ? existingQuestion[type] : ''}
        placeholder={placeholderText}
        allowClear
        maxLength={100}
        onChange={onChange}
        style={{
          height: heightSize,
          resize: 'none',
          border: 'none',
          borderRadius: 0,
        }}
      />
    </div>
  );
};

const QuestionBox = ({
  index,
  qName,
}: {
  index: number;
  qName: string[];
}) => {
  return (
    <div className={styles.questionBoxWarp}>
      <div className={styles.questionWarp}>
        <InputBox
          title={`질문 ${index}`}
          index={index}
          type='question'
          placeholderText={`[ 질문 ${index} ]을 입력하세요`}
          heightSize={130}
        />
      </div>
      <div className={styles.answerWarp}>
        <InputBox
          title={`대답 (${qName[0]})`}
          index={index}
          type='answerPlus'
          placeholderText='[ 대답+1 ]을 입력하세요'
          heightSize={60}
        />
        <InputBox
          title={`대답 (${qName[1]})`}
          index={index}
          type='answerMinus'
          placeholderText='[ 대답-1 ]을 입력하세요'
          heightSize={60}
        />
      </div>
    </div>
  );
};

export default function QuestionCard({
  qName,
  index,
}: {
  qName: string[];
  index: number;
}) {
  return (
    <div className={styles.warp}>
      <h2 className={styles.questionName}>{`${qName[0]} / ${qName[1]}`}</h2>
      <div className={styles.questionBoxesWarp}>
        {Array.from({ length: 3 }, (_, idx) => (
          <QuestionBox
            key={idx}
            index={idx + index * 3 + 1}
            qName={qName}
          />
        ))}
      </div>
    </div>
  );
}

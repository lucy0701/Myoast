// InputBox.tsx
import React from 'react';
import { useRecoilState } from 'recoil';
import {
  mbtiQuestionsState,
} from '@/states/questionsState';
import styles from './index.module.css';
import TextArea from 'antd/es/input/TextArea';


type QuestionType = 'question' | 'answerPlus' | 'answerMinus';

interface Props {
  title: string;
  index: number;
  type: QuestionType;
  placeholderText?: string;
  heightSize?: number;
}

const InputBox: React.FC<Props> = ({
  title,
  index,
  type,
  placeholderText,
  heightSize,
}) => {
  const [questions, setQuestions] = useRecoilState(mbtiQuestionsState);

  const existingQuestion = questions.find(
    (question) => question.index === index,
  );

  const onChange = (value: string): void => {
    setQuestions((prevQuestions) =>
      prevQuestions.map((question) =>
        question.index === index ? { ...question, [type]: value } : question,
      ),
    );
  };

  return (
    <div className={styles.questionBox}>
      <div className={styles.titleBox}>{title}</div>
      <TextArea
        value={existingQuestion?.[type] || ''}
        placeholder={placeholderText}
        allowClear
        maxLength={500}
        onChange={(e) => onChange(e.target.value)}
        style={{
          height: heightSize,
          resize: 'none',
          borderRadius: 0,
        }}
      />
    </div>
  );
};

export default InputBox;

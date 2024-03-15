// QuestionBox.tsx
import React from 'react';
import InputBox from './InputBox';
import styles from './index.module.css';
import { ANSWER_MINUS, ANSWER_PLUS, QUESTION } from '@/constants/addContent';

interface Props {
  index: number;
  qName: string[];
}

const QuestionBox: React.FC<Props> = ({ index, qName }) => {
  return (
    <div className={styles.questionBoxWarp}>
      <div className={styles.questionWarp}>
        <InputBox
          title={`질문 ${index}`}
          index={index}
          type={QUESTION}
          placeholderText={`[ 질문 ${index} ]을 입력하세요`}
          heightSize={130}
        />
      </div>
      <div className={styles.answerWarp}>
        <InputBox
          title={`대답 (${qName[0]})`}
          index={index}
          type={ANSWER_PLUS}
          placeholderText={`[ 대답+1 ]을 입력하세요`}
          heightSize={60}
        />
        <InputBox
          title={`대답 (${qName[1]})`}
          index={index}
          type={ANSWER_MINUS}
          placeholderText={`[ 대답-1 ]을 입력하세요`}
          heightSize={60}
        />
      </div>
    </div>
  );
};

export default QuestionBox;

import styles from './index.module.css';
import TextArea from 'antd/es/input/TextArea';

interface Props {
  title: string;
  placeholderText?: string;
  heightSize?: number;
}

const InputBox = ({ title, placeholderText, heightSize }: Props) => {
  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    console.log(e);
  };

  return (
    <div className={styles.questionBox}>
      <div className={styles.titleBox}>{title}</div>
      <TextArea
        placeholder={placeholderText}
        allowClear
        // showCount
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

const QuestionBox = ({ index }: { index: number }) => {
  return (
    <div className={styles.questionBoxWarp}>
      <div className={styles.questionWarp}>
        <InputBox
          title={`질문 ${index + 1}`}
          placeholderText={`[ 질문 ${index + 1} ]을 입력하세요`}
          heightSize={130}
        />
      </div>
      <div className={styles.answerWarp}>
        <InputBox
          title='대답(+1)'
          placeholderText='[ 대답+1 ]을 입력하세요'
          heightSize={60}
        />
        <InputBox
          title='대답(-1)'
          placeholderText='[ 대답-1 ]을 입력하세요'
          heightSize={60}
        />
      </div>
    </div>
  );
};

export default function QuestionCard({ qName }: { qName: string }) {
  const questionBoxes = Array.from({ length: 3 }, (_, index) => (
    <QuestionBox key={index} index={index} />
  ));

  return (
    <div className={styles.warp}>
      <h2 className={styles.questionName}>{qName}</h2>
      <div className={styles.questionBoxesWarp}>{questionBoxes}</div>
    </div>
  );
}

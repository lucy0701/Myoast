'use client';

import styles from './index.module.css';
import React from 'react';
import QuestionBox from './QuestionCard';

const questionNames = [
  ['E', 'I'],
  ['N', 'S'],
  ['F', 'T'],
  ['J', 'P'],
];

export default function Question() {
  return (
    <div className={styles.wrap}>
      <div style={{ maxWidth: 1200, width: '100%' }}>
        <h2 className={styles.questionTitle}>Question</h2>
        {questionNames.map((questionName, index) => (
          <div key={index} className={styles.questionWarp}>
            <h2
              className={
                styles.questionName
              }>{`${questionName[0]} / ${questionName[1]}`}</h2>
            <div className={styles.questionBoxesWarp}>
              <QuestionBox
                key={index * 3 + 1}
                index={index * 3 + 1}
                qName={questionName}
              />
              <QuestionBox
                key={index * 3 + 2}
                index={index * 3 + 2}
                qName={questionName}
              />
              <QuestionBox
                key={index * 3 + 3}
                index={index * 3 + 3}
                qName={questionName}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

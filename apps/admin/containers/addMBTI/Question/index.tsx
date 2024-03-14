'use client';

import styles from './index.module.css';
import React from 'react';
import QuestionCard from './QuestionCard';

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
          <QuestionCard key={index} index={index} qName={questionName} />
        ))}
      </div>
    </div>
  );
}

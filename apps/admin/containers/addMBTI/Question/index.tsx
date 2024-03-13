'use client';

import styles from './index.module.css';
import React from 'react';
import QuestionCard from './QuestionCard';


const questionNames = ['E / I', 'S / N', 'F / T', 'J / P'];

export default function AddMBTITest() {

  return (
    <div className={styles.wrap}>
      <div style={{ marginBottom: 30 }}>
        <h2 style={{ marginTop: 20 }} className={styles.questionTitle}>
          Question
        </h2>
        {questionNames.map((questionName) => (
          <QuestionCard key={questionName} qName={questionName} />
        ))}
      </div>
    </div>
  );
}


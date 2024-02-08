'use client';
import { ReactNode } from 'react';
import SideBar from './SideBar';
import styles from './index.module.css';

export default function TestSetting({ children }: { children: ReactNode }) {
  return (
    <main className={styles.wrap}>
      <SideBar />
      {children}
    </main>
  );
}

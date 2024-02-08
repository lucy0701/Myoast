import Statistics from '@/components/layout/Statistics';
import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return <Statistics>{children}</Statistics>;
}

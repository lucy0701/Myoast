import TestSetting from '@/components/layout/TestSetting';
import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return <TestSetting>{children}</TestSetting>;
}

import SystemManagement from '@/components/layout/SystemManagement';
import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return <SystemManagement>{children}</SystemManagement>;
}

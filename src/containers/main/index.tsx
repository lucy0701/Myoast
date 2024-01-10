'use client';
import Button from '@/components/common/Button';
import styles from './index.module.css';
import Footer from '@/components/layout/Footer';
import TestCard from '@/components/common/TestCard';

export default function Main() {
  return (
    <div className={styles.wrap}>
      <Button skin={'backBtn'}>123</Button>
      <Button skin={'answer'}>123</Button>
      <TestCard link={'/'} skin={'testCard'} size={'medium'} testTitle={'안녕오오오'}><img src="/images/test/card.jpeg" alt="아아아" /></TestCard>
      <TestCard link={'/'} skin={'testCard'} size={'large'} testTitle={'안녕오오오'} ><img src="/images/test/card.jpeg" alt="아아아" /></TestCard>
      <TestCard link={'/'} skin={'testCard'} size={'small'} testTitle={'안녕오오오'} ><img src="/images/test/card.jpeg" alt="아아아" /></TestCard>
      <Footer />
    </div>
  );
}

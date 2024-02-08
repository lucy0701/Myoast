import NavTitle from '@/components/common/NavTitle';
import styles from './index.module.css';
import NavLink from '@/components/common/NavLink';
import { STATISTICS } from '@/constants/navText';

export default function SideBar() {
  return (
      <nav className={styles.wrap}>
        <NavTitle title={STATISTICS}/>
        <NavLink linkName="전체 통계" link="/statistics"/>
        <NavLink linkName="회원 통계" link="/statistics/member"/>
        <NavLink linkName="테스트 통계" link="/statistics/test"/>
      </nav>
  );
}

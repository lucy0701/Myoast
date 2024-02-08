import NavTitle from '@/components/common/NavTitle';
import styles from './index.module.css';
import NavLink from '@/components/common/NavLink';
import { SYSTEM_MANAGEMENT } from '@/constants/navText';

export default function SideBar() {
  return (
    <nav className={styles.wrap}>
      <NavTitle title={SYSTEM_MANAGEMENT} />
      <NavLink linkName='관리자 계정 관리' link='/system' />
    </nav>
  );
}

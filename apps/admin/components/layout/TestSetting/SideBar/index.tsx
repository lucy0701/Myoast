import NavLink from '@/components/common/NavLink';
import styles from './index.module.css';
import NavTitle from '@/components/common/NavTitle';
import { TEST_SETTING } from '@/constants/navText';

export default function SideBar() {
  return (
    <nav className={styles.wrap}>
      <NavTitle title={TEST_SETTING} />
      <NavLink linkName='전체 테스트 목록' link='/test' />
      <NavLink linkName='테스트 생성' link='/test/add' />
    </nav>
  );
}

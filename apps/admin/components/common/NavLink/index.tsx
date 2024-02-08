import Link from 'next/link';
import styles from './index.module.css';

interface Props {
  linkName: string;
  link: string;
}

export default function NavLink({ linkName, link }: Props) {
  return (
    <div className={styles.wrap}>
      <Link href={link}>
        <p>{linkName}</p>
      </Link>
    </div>
  );
}

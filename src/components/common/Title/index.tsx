import styles from './index.module.css';

interface Props {
  title: string;
  contents?: string;
}
const Title = ({ title, contents }: Props) => (
  <div className={styles.wrap}>
    <h2 className={styles.title}>{title}</h2>
    <p className={styles.contents}>{contents}</p>
  </div>
);

export default Title;

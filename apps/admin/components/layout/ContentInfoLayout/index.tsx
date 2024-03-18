import styles from './index.module.css';

interface Props {}

const ContenInfoLayout: React.FC<Props> = () => {
  return (
    <div className={styles.wrap}>
      <h2 className={styles.titleWrap}>
        Add Content Info
      </h2>
    </div>
  );
};

export default ContenInfoLayout;

import styles from './index.module.css';

interface Props {
    title: string;
    contents?: string;
}
const Title = (props: Props) => {
    const {title, contents} = props
    return (
        <div className={styles.wrap}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.contents}>{contents}</p>
        </div>
    );
}

export default Title;
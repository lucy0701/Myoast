import styles from './index.module.css';

interface Props {
    title:string
}

export default function NavTitle ({title}:Props) {
    return (
        <div className={styles.wrap}>
            <h2>{title}</h2>
        </div>
    )
}
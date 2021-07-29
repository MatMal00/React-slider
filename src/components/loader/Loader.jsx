import styles from './Loader.module.css';

const Loader = () => {
    return (
        <div className={styles.container}>
            <div className={styles.loader}>
                <div className={styles.circle}></div>
                <div className={styles.circle}></div>
                <div className={styles.circle}></div>
            </div>
            <p>We are almost there...</p>
        </div>
    );
};

export default Loader;

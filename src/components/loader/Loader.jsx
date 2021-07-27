import styles from './Loader.module.css';

const Loader = () => {
    return (
        <div className={styles.container}>
            <div className={styles.loader}>
                <div className={styles.circle} id="a"></div>
                <div className={styles.circle} id="b"></div>
                <div className={styles.circle} id="c"></div>
            </div>
            <p>We are almost there...</p>
        </div>
    );
};

export default Loader;

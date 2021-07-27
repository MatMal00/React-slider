import styles from './Body.module.css';

const Body = ({ images }) => {
    const renderImage = images.map(img => (
        <img
            key={Math.random()}
            className={img.active ? `${styles.active}` : `${styles.hide}`}
            src={img.src}
            alt={img.alt}
        />
    ));

    return <div className={styles.body}>{renderImage}</div>;
};

export default Body;

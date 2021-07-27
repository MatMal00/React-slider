import styles from './Body.module.css';

const Body = ({ images }) => {
    const renderImage = images
        .filter(img => img.active)
        .map(img => <img key="active" src={img.src} alt={img.alt} />);

    return <div className={styles.body}>{renderImage}</div>;
};

export default Body;

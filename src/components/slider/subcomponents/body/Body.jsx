import styles from './Body.module.css';

const Body = ({ image }) => {
    return (
        <div className={styles.body}>
            <img key={Math.random()} className={styles.img} src={image.src} alt={image.alt} />
        </div>
    );
};

export default Body;

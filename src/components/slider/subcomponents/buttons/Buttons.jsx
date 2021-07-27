import styles from './Button.module.css';

const Buttons = ({ nextImage, prevImage }) => {
    const handleNextImage = () => nextImage();
    const handlePrevImage = () => prevImage();

    return (
        <>
            <button onClick={handleNextImage} className={styles.right}>
                {'->'}
            </button>
            <button onClick={handlePrevImage} className={styles.left}>
                {'<-'}
            </button>
        </>
    );
};

export default Buttons;

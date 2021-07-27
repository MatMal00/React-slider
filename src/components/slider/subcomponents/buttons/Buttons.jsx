import arrowR from '../../../../images/arrow-right.svg';
import arrowL from '../../../../images/arrow-left.svg';
import styles from './Button.module.css';

const Buttons = ({ numberOfImages, imageIndex, nextImage, prevImage }) => {
    const handleNextImage = () => nextImage();
    const handlePrevImage = () => prevImage();

    let disablePrev = false;
    let disableNext = false;
    disablePrev = imageIndex === 0;
    disableNext = imageIndex === numberOfImages - 1;

    return (
        <div className={styles.buttons}>
            <button disabled={disableNext} onClick={handleNextImage} className={styles.right}>
                <img src={arrowR} alt="" />
            </button>
            <button disabled={disablePrev} onClick={handlePrevImage} className={styles.left}>
                <img src={arrowL} alt="" />
            </button>
        </div>
    );
};

export default Buttons;

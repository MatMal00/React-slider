import { useContext } from 'react';
import { SliderContext } from '../../store/Slider.context';
import { useSwipeable } from 'react-swipeable';
import { NEXT, PREV } from '../../store/Slider.actions';
import Body from './subcomponents/body/Body';
import Buttons from './subcomponents/buttons/Buttons';
import Loader from '../loader/Loader';
import Pagination from './subcomponents/pagination/Pagination';
import useSlider from '../../hooks/useSlider.js';
import styles from './Slider.module.css';

const Slider = () => {
    const { pagination, swipe, images, isLoading, error } = useContext(SliderContext);
    const { changeImage, sliderImages, numberOfImages } = useSlider(images);
    const handlers = useSwipeable({
        onSwipedRight: () => swipe && prevImage(),
        onSwipedLeft: () => swipe && nextImage(),
    });

    const nextImage = () => changeImage(NEXT);
    const prevImage = () => changeImage(PREV);
    const certainImage = index => changeImage(null, index);

    const imageIndex = sliderImages.findIndex(img => img.active);

    const sliderContext = (
        <div {...handlers} className={styles.slider}>
            <Body images={sliderImages} />
            <Buttons
                numberOfImages={numberOfImages}
                imageIndex={imageIndex}
                nextImage={nextImage}
                prevImage={prevImage}
            />
            {pagination && (
                <Pagination
                    changeImage={certainImage}
                    imageIndex={imageIndex}
                    numberOfImages={numberOfImages}
                />
            )}
        </div>
    );
    return (
        <>
            {isLoading ? <Loader /> : !error && sliderContext}
            {error && <p className="error">{error}</p>}
        </>
    );
};

export default Slider;

import { useContext } from 'react';
import { SliderContext } from '../../store/Slider.context';
import Body from './subcomponents/body/Body';
import Buttons from './subcomponents/buttons/Buttons';
import useSlider from '../../hooks/useSlider.js';

import styles from './Slider.module.css';
import Pagination from './subcomponents/pagination/Pagination';

const Slider = () => {
    const { pagination, images } = useContext(SliderContext);
    const { changeImage, sliderImages, numberOfImages } = useSlider(images);

    const nextImage = () => changeImage(true);
    const prevImage = () => changeImage(false);
    const certainImage = index => changeImage(null, index);

    const imageIndex = sliderImages.findIndex(img => img.active);

    return (
        <div className={styles.slider}>
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
};

export default Slider;

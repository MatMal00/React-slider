import { useCallback, useEffect, useState } from 'react';
import { NEXT, PREV } from '../store/Slider.actions';

const useSlider = (images = []) => {
    const [sliderImages, setSliderImages] = useState([]);
    const numberOfImages = images.length;

    useEffect(() => setSliderImages(images), [images]);

    const changeImage = useCallback(
        (direction, certain = null) => {
            const newImages = [...sliderImages];
            const index = sliderImages.findIndex(img => img.active);

            if (!Boolean(certain)) {
                if (direction === NEXT && numberOfImages !== index + 1) {
                    newImages[index].active = false;
                    newImages[index + 1].active = true;
                }
                if (direction === PREV && index !== 0) {
                    newImages[index].active = false;
                    newImages[index - 1].active = true;
                }
            } else {
                newImages[index].active = false;
                newImages[certain].active = true;
            }

            setSliderImages(newImages);
        },
        [numberOfImages, sliderImages]
    );

    return {
        changeImage,
        sliderImages,
        numberOfImages,
    };
};

export default useSlider;

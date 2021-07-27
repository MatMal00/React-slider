import { useCallback, useState } from 'react';

//DIRECTION: TRUE: RIGHT, FALSE: LEFT
const useSlider = (images = []) => {
    const [sliderImages, setSliderImages] = useState(images);
    const numberOfImages = images.length;

    const changeImage = useCallback(
        (direction, certain = null) => {
            const newImages = [...sliderImages];
            const index = sliderImages.findIndex(img => img.active);

            if (!Boolean(certain)) {
                if (direction === true && numberOfImages !== index + 1) {
                    newImages[index].active = false;
                    newImages[index + 1].active = true;
                }
                if (direction === false && index !== 0) {
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
    };
};

export default useSlider;

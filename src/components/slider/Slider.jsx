import Body from './subcomponents/body/Body';
import Buttons from './subcomponents/buttons/Buttons';
import useSlider from '../../hooks/useSlider.js';

import img1 from '../../images/works1.jpg';
import img2 from '../../images/works2.jpg';
import img3 from '../../images/works3.jpg';
import img4 from '../../images/works4.jpg';

import styles from './Slider.module.css';

const images = [
    {
        src: img1,
        alt: 'wokrks photo1',
        active: false,
    },
    {
        src: img2,
        alt: 'wokrks photo2',
        active: true,
    },
    {
        src: img3,
        alt: 'wokrks photo3',
        active: false,
    },
    {
        src: img4,
        alt: 'wokrks photo4',
        active: false,
    },
];

const Slider = () => {
    const { changeImage, sliderImages } = useSlider(images);

    const nextImage = () => changeImage(true);
    const prevImage = () => changeImage(false);

    // const prev = () => {
    //     const imagesToEdit = [...sliderImages];
    //     const index = imagesToEdit.findIndex(img => img.active);
    //     imagesToEdit[index].active = false;
    //     imagesToEdit[index - 1].active = true;

    //     setSliderImages(imagesToEdit);
    // };

    return (
        <div className={styles.slider}>
            <Body images={sliderImages} />
            <Buttons nextImage={nextImage} prevImage={prevImage} />
        </div>
    );
};

export default Slider;

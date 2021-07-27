import { createContext, useEffect, useReducer } from 'react';
import { SET_DATA, SET_ARROWS, SET_PAGINATION, LOADING, ERROR } from './Slider.actions';
import { fetchImages } from './Slider.services';

export const SliderContext = createContext({
    images: [],
    pagination: true,
    arrows: true,
    isLoading: false,
    error: '',
});

const initialState = {
    images: [],
    pagination: true,
    arrows: true,
    isLoading: false,
    error: '',
};

const sliderReducer = (state, { type, payload }) => {
    switch (type) {
        case SET_DATA:
            return {
                ...state,
                images: payload,
                isLoading: false,
            };
        case LOADING:
            return {
                ...state,
                isLoading: true,
            };
        case SET_PAGINATION:
            return {
                ...state,
                pagination: payload,
            };
        case SET_ARROWS:
            return {
                ...state,
                arrows: payload,
            };
        case ERROR:
            return {
                ...state,
                error: payload,
                isLoading: false,
            };

        default:
            break;
    }
};

const SliderProvider = ({ children }) => {
    const [state, dispatch] = useReducer(sliderReducer, initialState);

    const getImages = async () => {
        dispatch({ type: LOADING });
        try {
            const sliderImages = await fetchImages();
            dispatch({ type: SET_DATA, payload: sliderImages });
        } catch (err) {
            dispatch({ type: ERROR, payload: err.message });
        }
    };

    useEffect(() => getImages(), []);

    return <SliderContext.Provider value={{ dispatch, ...state }}>{children}</SliderContext.Provider>;
};

export default SliderProvider;

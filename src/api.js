import axios from 'axios';

export const api = () => {
    const instance = axios.create({
        baseURL: process.env.REACT_APP_SLIDER_API,
    });

    return instance;
};

export default api;

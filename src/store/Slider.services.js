import api from '../api';

export const fetchImages = async () => {
    const { data } = await api().get('/images.json');
    data.shift();

    return data ?? [];
};

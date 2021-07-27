import { createContext, useState } from 'react';

export const SliderContext = createContext({
    pagination: true,
    setPagination: () => {},
    arrows: true,
    setArrows: () => {},
});

const SliderProvider = ({ children }) => {
    const [pagination, setPagination] = useState(true);
    const [arrows, setArrows] = useState(true);

    return (
        <SliderContext.Provider value={{ pagination, setPagination, arrows, setArrows }}>
            {children}
        </SliderContext.Provider>
    );
};

export default SliderProvider;

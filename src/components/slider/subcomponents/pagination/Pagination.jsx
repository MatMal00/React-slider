import React from 'react';
import styles from './Pagination.module.css';

const Pagination = ({ changeImage, imageIndex, numberOfImages }) => {
    const handleChange = index => changeImage(index);

    const renderPagination = () => {
        let pagination = [];

        for (let i = 0; i < numberOfImages; i++) {
            pagination.push(
                <React.Fragment key={i}>
                    <button
                        disabled={i === imageIndex}
                        onClick={() => handleChange(`${i}`)}
                        className={i === imageIndex ? styles.active : ''}>
                        {i + 1}
                    </button>
                </React.Fragment>
            );
        }
        return pagination;
    };

    return <div className={styles.pagination}>{renderPagination()}</div>;
};

export default Pagination;

import { useContext } from 'react';
import { SliderContext } from '../../store/Slider.context';
import styles from './Dropdown.module.css';

const Dropdown = () => {
    const { setPagination, pagination, setArrows, arrows } = useContext(SliderContext);

    const handlePagination = () => setPagination(!pagination);
    const handleArrows = () => setArrows(!arrows);

    return (
        <div className={styles.dropdown}>
            <button>Slider options</button>
            <ul>
                <li>
                    <label htmlFor="pagination">
                        Pagination
                        <input
                            onChange={handlePagination}
                            id="pagination"
                            type="checkbox"
                            checked={pagination}
                        />
                    </label>
                </li>
                <li>
                    <label htmlFor="arrows">
                        Arrows <input onChange={handleArrows} id="arrows" type="checkbox" checked={arrows} />
                    </label>
                </li>
            </ul>
        </div>
    );
};

export default Dropdown;

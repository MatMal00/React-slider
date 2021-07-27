import { useContext } from 'react';
import { SliderContext } from '../../store/Slider.context';
import { SET_ARROWS, SET_PAGINATION } from '../../store/Slider.actions';
import styles from './Dropdown.module.css';

const Dropdown = () => {
    const { arrows, pagination, dispatch } = useContext(SliderContext);

    const handleArrows = () => dispatch({ type: SET_ARROWS, payload: !arrows });
    const handlePagination = () => dispatch({ type: SET_PAGINATION, payload: !pagination });

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

import styles from './Dropdown.module.css';

const Dropdown = () => {
    return (
        <div className={styles.dropdown}>
            <button>Slider options</button>
            <ul>
                <li>
                    <label htmlFor="pagination">
                        Pagination <input id="pagination" type="checkbox" checked={true} />
                    </label>
                </li>
                <li>
                    <label htmlFor="arrows">
                        Arrows <input id="arrows" type="checkbox" checked={true} />
                    </label>
                </li>
            </ul>
        </div>
    );
};

export default Dropdown;

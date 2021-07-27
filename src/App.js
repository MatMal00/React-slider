import './App.css';
import Dropdown from './components/dropdown/Dropdown';
import Slider from './components/slider/Slider';

const App = () => {
    return (
        <>
            <Dropdown />
            <div className="container">
                <Slider />
            </div>
        </>
    );
};

export default App;

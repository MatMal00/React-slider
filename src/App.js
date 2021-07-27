import SliderProvider from './store/Slider.context';
import Dropdown from './components/dropdown/Dropdown';
import Slider from './components/slider/Slider';
import './App.css';

const App = () => {
    return (
        <SliderProvider>
            <Dropdown />
            <div className="container">
                <Slider />
            </div>
        </SliderProvider>
    );
};

export default App;

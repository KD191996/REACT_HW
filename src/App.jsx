import React from 'react';
import Carousel from './components/Carousel.jsx';
import firstImage from './images/first.jpeg';
import secondImage from './images/second.jpeg';
import thirdImage from './images/third.jpeg';

class App extends React.Component {

    render() {

        const images = [firstImage, secondImage, thirdImage];



        return (
            <div className="App">
                <Carousel images={images} />
            </div>
        );
    }
}


export default App

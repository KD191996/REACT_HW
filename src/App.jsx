import React from 'react';
import Carousel from './components/Carousel.jsx';


class App extends React.Component {

    render() {

        const images = [
            '/images/first.jpeg',
            '/images/second.jpeg',
            '/images/third.jpeg'
        ];
        return (
            <div className="App">
                <Carousel images={images} />
            </div>
        );
    }
}


export default App

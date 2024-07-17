import React from 'react';
import classNames from 'classnames';

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 0
        };
    }

    handleNext = () => {
        this.setState((prevState, props) => ({
            currentIndex: (prevState.currentIndex + 1) % props.images.length
        }));
    };

    handlePrev = () => {
        this.setState((prevState, props) => ({
            currentIndex: (prevState.currentIndex - 1 + props.images.length) % props.images.length
        }));
    };

    render() {
        const { images } = this.props;
        const { currentIndex } = this.state;

        return (
            <div className="container">
                <div id="carousel" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        {images.map((image, index) => (
                            <div
                                key={index}
                                className={classNames('carousel-item', { 'active': index === currentIndex })}
                            >
                                <img src={image} className="d-block w-100" alt="" />
                            </div>
                        ))}
                    </div>
                    <button
                        className="carousel-control-prev"
                        data-bs-target="#carousel"
                        type="button"
                        data-bs-slide="prev"
                        onClick={this.handlePrev}
                    >
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next"
                        data-bs-target="#carousel"
                        type="button"
                        data-bs-slide="next"
                        onClick={this.handleNext}
                    >
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

        );
    }
}

export default Carousel;
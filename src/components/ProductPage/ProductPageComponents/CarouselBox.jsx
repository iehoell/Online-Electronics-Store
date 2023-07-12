import React, {Component} from 'react';
import Carousel from "react-bootstrap/Carousel";
import firstImage from '../../../assets/products/product1/firstImage.webp';
import secondImage from '../../../assets/products/product1/secondImage.webp';
import thirdImage from '../../../assets/products/product1/thirdImage.webp';
import fourthImage from '../../../assets/products/product1/fourthImage.webp';
import fifthImage from '../../../assets/products/product1/fifthImage.webp';

class CarouselBox extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className='d-block w-400px'
                        src={firstImage}
                        alt='first image'
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className='d-block w-400px'
                        src={secondImage}
                        alt='second image'
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className='d-block w-400px'
                        src={thirdImage}
                        alt='third image'
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className='d-block w-400px'
                        src={fourthImage}
                        alt='fourth image'
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className='d-block w-400px'
                        src={fifthImage}
                        alt='fifth image'
                    />
                </Carousel.Item>
            </Carousel>
        );
    }
}

export default CarouselBox;
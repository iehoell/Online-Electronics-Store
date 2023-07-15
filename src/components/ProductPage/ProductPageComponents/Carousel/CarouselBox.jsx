import React, {Component} from 'react';
import CarouselItem from "./CarouselItem";
import productsData from "./productsPhotos";
import Carousel from "react-bootstrap/Carousel";

class CarouselBox extends Component {
    render() {
        const productsComponents = productsData.map(carousel => <CarouselItem key={carousel.id} src={carousel.src}/>)
        return (
            <div>
                <Carousel>
                    <CarouselItem>
                        {productsComponents}
                    </CarouselItem>
                </Carousel>
            </div>
        );
    }
}

export default CarouselBox;
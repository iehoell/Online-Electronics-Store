import React, {Component} from 'react';
//import CarouselItem from "./CarouselItem";
import productsData from "./productsPhotos";
import CarouselPhotos from "./productsPhotos";

class CarouselBox extends Component {
    render() {
        return (
            <div>
                <CarouselPhotos
                    key = {productsData.id}
                    src = {productsData.src}
                />
            </div>
        );
    }
}

export default CarouselBox;
import React from 'react';
import Carousel from "react-bootstrap/Carousel";

function CarouselItem(props){
    return(
        <img
            className='d-block w-400px'
            src={props.src}
            alt='image'
        />
    );
}

export default CarouselItem;
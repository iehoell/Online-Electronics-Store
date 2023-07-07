import React, {Component} from 'react';
import Carousel from "react-bootstrap/Carousel";

class CarouselBox extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className='d-block w-400px'
                        src='https://c.dns-shop.ru/thumb/st4/fit/500/500/35847a5eb46c9cc12a9a786f9b4d9140/cbd51a7e8677521d28cb226b83f2f44fe3571ae8e2992d2c4b10506e3587abec.jpg.webp'
                        alt='first image'
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className='d-block w-400px'
                        src='https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/6ef1754c5ec7923c3ccb3ddd4b78e97d/23e0873be4271b9662038bbf5ae06bdf1017b0e26c3979af587ed737a64b1df9.jpg.webp'
                        alt='second image'
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className='d-block w-400px'
                        src='https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/01f63a673a3e8bf83c301fda63adf0b2/34159835cb84a90e75b19e686538ebbefc24a3371cd7876fd3822f597120b734.jpg.webp'
                        alt='third image'
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className='d-block w-400px'
                        src='https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/f4a01e9e9fe38274fc0bc694ffb0cbcf/a3832d3bdf2b4dd2a698c4df4e6c849d5b0d78964ab80c7b5b10ab215960f5b7.jpg.webp'
                        alt='fourth image'
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className='d-block w-400px'
                        src='https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/138fc4e81ffa7cb559f7c68cf0f4eea1/e8e5be489ca33164ae68e5f7d01495fce2d03c07f4a85fed07116e541c5c18b1.jpg.webp'
                        alt='fifth image'
                    />
                </Carousel.Item>
            </Carousel>
        );
    }
}

export default CarouselBox;
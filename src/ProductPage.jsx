import React, {useState} from 'react';
import './styles/productPage.scss'
import MainParameters from './components/MainParameters';
import Reviews from './components/Reviews';
import Modal from './components/modalBuy';
import CarouselBox from "./components/CarouselBox";
import Graphic from "./components/Graphic";
import favourites from './assets/favourites.png';

let products = require('./mockData/products.json');

function ProductPage(){
    const [modalActive, setModalActive] = useState(true)
    return(
      <div className="ProductPage">
            <h3>{products.product1.type + " " + products.product1.model}
            </h3>
          <div className="productPage__main-container">
              <div className="main-container__photos">
                  <CarouselBox/>
              </div>
              <div className="main-container__product-info">
                <p className="lastName">
                    [PCI-E 4.0 12 ГБ GDDR6, 192 бит, DisplayPort x3, HDMI, GPU 1320 МГц]
                </p>
                  <div className="product-info__infoAbout">
                    <div className="product-info__price">
                        <div className="product-info__priceBar">
                            <h3>{products.product1.price}</h3>
                            <button
                                className="priceGraphic">
                                <a
                                    href='#graphic'
                                    className='anchor'>
                                    график
                                </a>
                            </button>
                        </div>
                        <button
                            className="favourites">
                            <img
                                className='favouritesImage'
                                src={favourites}>
                            </img>
                        </button>
                        <button
                            id="buyButton"
                            className="buyButton"
                            onClick={() => setModalActive(true)}>
                            Купить
                        </button>
                    </div>
                    <div className="product-info__price__delivery">
                      <div className="inStock"><p>В наличии: в 1 магазине</p></div>
                      <div className="pickUpPoints"><p>Пункты выдачи: доступны</p></div>
                      <div className="deliveryToHome"><p>Доставим на дом: сегодня</p></div>
                    </div>
                  </div>
              </div>
          </div>
          <h5 id='graphic'>График изменения цен на товар</h5>
          <p>Выберите тип графика: </p>
          <Graphic/>
          <h5>Характеристики {products.product1.type} {products.product1.model} {products.product1.code}</h5>
          <MainParameters />
          <h5>Описание</h5>
          <div className="productPage__description">
              <p id="description">
                  {products.product1.description}
              </p>
          </div>
          <Reviews />
          <Modal active={modalActive} setActive={setModalActive}/>
      </div>
    );
}

export default ProductPage;
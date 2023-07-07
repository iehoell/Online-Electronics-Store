import React, {useState} from 'react';
import './styles/productPage.scss'
import MainParameters from './MainParameters';
import Reviews from './Reviews';
import Modal from './modalBuy';
import CarouselBox from "./components/CarouselBox";
let products = require('./mockData/products.json');

function ProductPage(){
    const [modalActive, setModalActive] = useState(false)
    return(
      <div className="ProductPage">
            <h3>{products.product1.type + " " + products.product1.model}
            </h3>
          <div className="productPage__main-container">
              <div className="productPage__main-container__photos">
                  <CarouselBox/>
              </div>
              <div className="productPage__main-container__product-info">
                <p className="lastName">
                    [PCI-E 4.0 12 ГБ GDDR6, 192 бит, DisplayPort x3, HDMI, GPU 1320 МГц]
                </p>
                  <div className="productPage__main-container__product-info__infoAbout">
                    <div className="productPage__main-container__product-info__price">
                        <div className="productPage__main-container__product-info__priceBar">
                            <h3>{products.product1.price}</h3>
                            <button className="priceGraphic">гр</button>
                        </div>
                        <button className="favourites">3</button>
                        <button id="buyButton" className="buyButton" onClick={() => setModalActive(true)}>Купить</button>
                    </div>
                    <div className="productPage__main-container__product-info__price__delivery">
                      <div className="inStock"><p>В наличии: в 1 магазине</p></div>
                      <div className="pickUpPoints"><p>Пункты выдачи: доступны</p></div>
                      <div className="deliveryToHome"><p>Доставим на дом: сегодня</p></div>
                    </div>
                  </div>
              </div>
          </div>
          <h5>График изменения цен на товар</h5>
          <canvas className='myChart'/>
          <h5>Характеристики Видеокарта Palit GeForce RTX 3060 Dual (LHR) [NE63060019K9-190AD]</h5>
          <MainParameters />
          <h5>Описание</h5>
          <div className="productPage__description">
              <p id="description">
                  {products.product1.description}
              </p>
          </div>
          <Reviews />
          <Modal active={modalActive} setActive={setModalActive}>
          </Modal>
      </div>
    );
}

export default ProductPage;
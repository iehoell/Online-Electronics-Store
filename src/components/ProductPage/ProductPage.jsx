import React, {useState} from 'react';
import productPage from './productPage.module.scss'
import MainParameters from './ProductPageComponents/MainParameters';
import Reviews from './ProductPageComponents/Reviews/Reviews';
import Modal from '../ModalBuy/modalBuy';
import CarouselBox from "./ProductPageComponents/Carousel/CarouselBox";
import Graphic from "./ProductPageComponents/Graphic";
import favourites from '../../assets/favourites.png';

let products = require('../../mockData/products.json');

function ProductPage(){
    const [modalActive, setModalActive] = useState(true)
    return(
      <div className={productPage.ProductPage}>
            <h3 className={productPage.mainTitle}>{products.product1.type + " " + products.product1.model}
            </h3>
          <div className={productPage.mainContainer}>
              <div className={productPage.photos}>
                  <CarouselBox/>
              </div>
              <div className={productPage.productInfo}>
                <p className={productPage.lastName}>
                    [PCI-E 4.0 12 ГБ GDDR6, 192 бит, DisplayPort x3, HDMI, GPU 1320 МГц]
                </p>
                  <div className={productPage.infoAbout}>
                    <div className={productPage.price}>
                        <div className={productPage.priceBar}>
                            <h3>{products.product1.price}</h3>
                            <button
                                className={productPage.priceGraphic}>
                                <a
                                    href='#graphic'
                                    className={productPage.anchor}>
                                    график
                                </a>
                            </button>
                        </div>
                        <button
                            className={productPage.favourites}>
                            <img
                                className={productPage.favouritesImage}
                                src={favourites}
                                alt='картинка добавления в корзину'>
                            </img>
                        </button>
                        <button
                            id="buyButton"
                            className={productPage.buyButton}
                            onClick={() => setModalActive(true)}>
                            Купить
                        </button>
                    </div>
                    <div className={productPage.delivery}>
                      <div className={productPage.inStock}><p>В наличии: в 1 магазине</p></div>
                      <div className={productPage.pickUpPoints}><p>Пункты выдачи: доступны</p></div>
                      <div className={productPage.deliveryToHome}><p>Доставим на дом: сегодня</p></div>
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
          <div className={productPage.description}>
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
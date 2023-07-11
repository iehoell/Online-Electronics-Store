import { Link } from 'react-router-dom';
import React, {useState} from 'react';
import Modal from './components/modalBuy';
import product1 from './assets/products/product1/product1.webp';
import product2 from './assets/products/product2.webp';
import product3 from './assets/products/product3.webp';
import product4 from './assets/products/product4.webp';
import product5 from './assets/products/product5.webp';


function MainPage(){
    const [modalActive, setModalActive] = useState(true)
    return(
        <div className="MainPage">
            <div className="content__main-container">
                <div className="main-container__configuration-of-products">
                    <div className="main-container__categories">
                        <h3>Категория</h3>
                        <ul>
                            <li className="categories__listItem">
                                <a href="/">
                                    Все категории
                                </a>
                            </li>
                            <li className="categories__listItem">
                                <a href="/">
                                    Комплектующие для ПК
                                </a>
                            </li>
                            <li className="categories__listItem">
                                <a href="/">
                                    Мобильные устройства
                                </a>
                            </li>
                            <li className="categories__listItem">
                                <a href="/">
                                    Приставки
                                </a>
                            </li>
                        </ul>
                        <div className="categories__onSale">
                            <b className="categories__onSaleText">
                                По акции
                            </b>
                            <label className="categories__switch">
                                <input type="checkbox"/>
                                    <span className="slider round"></span>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="main-container__products-list">
                    <div className="products-list__dropdownSorting">
                        <select className="sortingSelect">
                            <option selected value="Популярные">Популярные</option>
                            <option value="По скидке (%)">По скидке (%)</option>
                            <option value="Сначала недорогие">Сначала недорогие</option>
                            <option value="Сначала дорогие">Сначала дорогие</option>
                        </select>
                    </div>
                    <div className="products-list__underline"></div>
                    <div className="products-list__products">
                        <h3>Видеокарты</h3>
                        <div className="products__product">
                            <div className="product__card">
                                <div className="product__photo">
                                    <img
                                        src={product1}
                                        alt=""/>
                                </div>
                                <a href="/ProductPage" id="product1"
                                   className="product__name">
                                    Видеокарта Palit GeForce RTX 3060 Dual (LHR) [NE63060019K9-190AD] [PCI-E 4.0 12 ГБ
                                    GDDR6,
                                    192 бит, DisplayPort x3, HDMI, GPU 1320 МГц]
                                </a>
                                <div className="product__card__buy">
                                    <b className="product__card__price">
                                        30499 ₽
                                    </b>
                                    <button
                                        id="buyButton"
                                        className="buyButton"
                                        onClick={() => setModalActive(true)}>
                                        Купить
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="products__product">
                            <div className="product__card">
                                <div className="product__photo">
                                    <img
                                        src={product2}
                                        alt=""/>
                                </div>
                                <a href="/ProductPage" id="product2"
                                   className="product__name">
                                    Видеокарта Palit GeForce RTX 4070 Ti GamingPro [NED407T019K9-1043A]
                                    [PCI-E 4.0 12 ГБ GDDR6X, 192 бит, DisplayPort x3, HDMI, GPU 2310 МГц]
                                </a>
                                <div className="product__card__buy">
                                    <b className="product__card__price">
                                        81999 ₽
                                    </b>
                                    <button
                                        id="buyButton"
                                        className="buyButton"
                                        onClick={() => setModalActive(true)}>
                                        Купить
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="products__product">
                            <div className="product__card">
                                <div className="product__photo">
                                    <img
                                        src={product3}
                                        alt=""/>
                                </div>
                                <a href="/ProductPage" id="product3"
                                   className="product__name">
                                    Видеокарта MSI GeForce RTX 4090 SUPRIM X [RTX 4090 SUPRIM X 24G]
                                    [PCI-E 4.0 24 ГБ GDDR6X, 384 бит, DisplayPort x3, HDMI, GPU 2235 МГц]
                                </a>
                                <div className="product__card__buy">
                                    <b className="product__card__price">
                                        190499 ₽
                                    </b>
                                    <button
                                        id="buyButton"
                                        className="buyButton"
                                        onClick={() => setModalActive(true)}>
                                        Купить
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="products__product">
                            <div className="product__card">
                                <div className="product__photo">
                                    <img
                                        src={product4}
                                        alt=""/>
                                </div>
                                <a href="/ProductPage" id="product4"
                                   className="product__name">
                                    Видеокарта MSI AMD Radeon RX 6750 XT MECH 2X OC [RX 6750 XT MECH 2X 12G OC]
                                    [PCI-E 4.0 12 ГБ GDDR6, 192 бит, DisplayPort x3, HDMI, GPU 2150 МГц]
                                </a>
                                <div className="product__card__buy">
                                    <b className="product__card__price">
                                        40999 ₽
                                    </b>
                                    <button
                                        id="buyButton"
                                        className="buyButton"
                                        onClick={() => setModalActive(true)}>
                                        Купить
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="products__product">
                            <div className="product__card">
                                <div className="product__photo">
                                    <img
                                        src={product5}
                                        alt=""/>
                                </div>
                                <a href="/ProductPage" id="product5"
                                   className="product__name">
                                    Видеокарта ASUS GeForce RTX 4080 TUF Gaming OC Edition [TUF-RTX4080-O16G-GAMING]
                                    [PCI-E 4.0 16 ГБ GDDR6X, 256 бит, DisplayPort x3, HDMI x2, GPU 2210 МГц]
                                </a>
                                <div className="product__card__buy">
                                    <b className="product__card__price">
                                        137999 ₽
                                    </b>
                                    <button
                                        id="buyButton"
                                        className="buyButton"
                                        onClick={() => setModalActive(true)}>
                                        Купить
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal active={modalActive} setActive={setModalActive}/>
        </div>
    );
}
export default MainPage;
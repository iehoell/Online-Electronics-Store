import { Link } from 'react-router-dom';
import React, {useState} from 'react';
import Modal from '../ModalBuy/modalBuy';
import mainPage from './MainPage.module.scss';
import product1 from '../../assets/products/product1/product1.webp';
import product2 from '../../assets/products/product2.webp';
import product3 from '../../assets/products/product3.webp';
import product4 from '../../assets/products/product4.webp';
import product5 from '../../assets/products/product5.webp';


function MainPage(){
    const [modalActive, setModalActive] = useState(true)
    const slider = mainPage.slider + ' ' + mainPage.round;
    return(
        <div className={mainPage.MainPage}>
            <div className={mainPage.mainContainer}>
                <div className={mainPage.categories}>
                    <h3>Категория</h3>
                    <ul>
                        <li className={mainPage.listItem}>
                            <a className={mainPage.categoriesItem}
                                href="/">
                                Все категории
                            </a>
                        </li>
                        <li className={mainPage.listItem}>
                            <a className={mainPage.categoriesItem} href="/">
                                Комплектующие для ПК
                            </a>
                        </li>
                        <li className={mainPage.listItem}>
                            <a className={mainPage.categoriesItem} href="/">
                                Мобильные устройства
                            </a>
                        </li>
                        <li className={mainPage.listItem}>
                            <a className={mainPage.categoriesItem} href="/">
                                Приставки
                            </a>
                        </li>
                    </ul>
                    <div className={mainPage.onSale}>
                        <b className={mainPage.onSaleText}>
                            По акции
                        </b>
                        <label className={mainPage.switch}>
                            <input type="checkbox"/>
                            <span className={slider}/>
                        </label>
                    </div>
                </div>
                <div className={mainPage.productsList}>
                    <div>
                        <select className={mainPage.sortingSelect}>
                            <option selected value="Популярные">Популярные</option>
                            <option value="По скидке (%)">По скидке (%)</option>
                            <option value="Сначала недорогие">Сначала недорогие</option>
                            <option value="Сначала дорогие">Сначала дорогие</option>
                        </select>
                    </div>
                    <div className={mainPage.underline}></div>
                    <h3 className={mainPage.chapterTitle}>Видеокарты</h3>
                    <div className={mainPage.card}>
                        <div>
                            <img
                                src={product1}
                                alt=""
                                className={mainPage.productPhoto}
                            />
                        </div>
                        <a href="/ProductPage" id="product1"
                           className={mainPage.name}>
                            Видеокарта Palit GeForce RTX 3060 Dual (LHR) [NE63060019K9-190AD] [PCI-E 4.0 12 ГБ
                            GDDR6,
                            192 бит, DisplayPort x3, HDMI, GPU 1320 МГц]
                        </a>
                        <div className={mainPage.buy}>
                            <b className={mainPage.price}>
                                30499 ₽
                            </b>
                            <button
                                id="buyButton"
                                className={mainPage.buyButton}
                                onClick={() => setModalActive(true)}>
                                Купить
                            </button>
                        </div>
                    </div>
                    <div className={mainPage.card}>
                        <div>
                            <img
                                src={product2}
                                alt=""
                                className={mainPage.productPhoto}
                            />
                        </div>
                        <a href="/ProductPage" id="product2"
                           className={mainPage.name}>
                            Видеокарта Palit GeForce RTX 4070 Ti GamingPro [NED407T019K9-1043A]
                            [PCI-E 4.0 12 ГБ GDDR6X, 192 бит, DisplayPort x3, HDMI, GPU 2310 МГц]
                        </a>
                        <div className={mainPage.buy}>
                            <b className={mainPage.price}>
                                81999 ₽
                            </b>
                            <button
                                id="buyButton"
                                className={mainPage.buyButton}
                                onClick={() => setModalActive(true)}>
                                Купить
                            </button>
                        </div>
                    </div>
                    <div className={mainPage.card}>
                        <div>
                            <img
                                src={product3}
                                alt=""
                                className={mainPage.productPhoto}
                            />
                        </div>
                        <a href="/ProductPage" id="product3"
                           className={mainPage.name}>
                            Видеокарта MSI GeForce RTX 4090 SUPRIM X [RTX 4090 SUPRIM X 24G]
                            [PCI-E 4.0 24 ГБ GDDR6X, 384 бит, DisplayPort x3, HDMI, GPU 2235 МГц]
                        </a>
                        <div className={mainPage.buy}>
                            <b className={mainPage.price}>
                                190499 ₽
                            </b>
                            <button
                                id="buyButton"
                                className={mainPage.buyButton}
                                onClick={() => setModalActive(true)}>
                                Купить
                            </button>
                        </div>
                    </div>
                    <div className={mainPage.card}>
                        <div>
                            <img
                                src={product4}
                                alt=""
                                className={mainPage.productPhoto}
                            />
                        </div>
                        <a href="/ProductPage" id="product4"
                           className={mainPage.name}>
                            Видеокарта MSI AMD Radeon RX 6750 XT MECH 2X OC [RX 6750 XT MECH 2X 12G OC]
                            [PCI-E 4.0 12 ГБ GDDR6, 192 бит, DisplayPort x3, HDMI, GPU 2150 МГц]
                        </a>
                        <div className={mainPage.buy}>
                            <b className={mainPage.price}>
                                40999 ₽
                            </b>
                            <button
                                id="buyButton"
                                className={mainPage.buyButton}
                                onClick={() => setModalActive(true)}>
                                Купить
                            </button>
                        </div>
                    </div>
                    <div className={mainPage.card}>
                        <div>
                            <img
                                src={product5}
                                alt=""
                                className={mainPage.productPhoto}
                            />
                        </div>
                        <a href="/ProductPage" id="product5"
                           className={mainPage.name}>
                            Видеокарта ASUS GeForce RTX 4080 TUF Gaming OC Edition [TUF-RTX4080-O16G-GAMING]
                            [PCI-E 4.0 16 ГБ GDDR6X, 256 бит, DisplayPort x3, HDMI x2, GPU 2210 МГц]
                        </a>
                        <div className={mainPage.buy}>
                            <b className={mainPage.price}>
                                137999 ₽
                            </b>
                            <button
                                id="buyButton"
                                className={mainPage.buyButton}
                                onClick={() => setModalActive(true)}>
                                Купить
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Modal active={modalActive} setActive={setModalActive}/>
        </div>
    );
}
export default MainPage;
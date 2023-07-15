import React, {useState} from 'react';
import Modal from '../ModalBuy/modalBuy';
import mainPage from './MainPage.module.scss';
import ProductCards from "./productCards/ProductCards";
import productCardsData from "../../mockData/productCardsData";

function MainPage(){
    const [modalActive, setModalActive] = useState(true)
    const slider = mainPage.slider + ' ' + mainPage.round;
    const cardsComponents = productCardsData.map(cards => <ProductCards key={cards.id} price={cards.price} type={cards.type} model={cards.model} code={cards.code} color={cards.color} src={cards.src}/>)
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
                    {cardsComponents}
                </div>
            </div>
            <Modal active={modalActive} setActive={setModalActive}/>
        </div>
    );
}
export default MainPage;
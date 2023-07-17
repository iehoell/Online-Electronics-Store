import React, {useState} from 'react';
import Modal from '../ModalBuy/modalBuy';
import mainPage from './MainPage.module.scss';
import ProductCards from "./productCards/ProductCards";
import CategoriesList from "./CategoriesList";
import Selector from "./Selector";
import categoriesData from "../../mockData/categoriesData";
import productCardsData from "../../mockData/productCardsData";
import selectorData from "../../mockData/selectorData";

function MainPage(){
    const [modalActive, setModalActive] = useState(true)
    const slider = mainPage.slider + ' ' + mainPage.round;
    const cardsComponents = productCardsData.map(cards => <ProductCards key={cards.id} price={cards.price} type={cards.type} model={cards.model} code={cards.code} color={cards.color} src={cards.src}/>)
    const categoriesListComponents = categoriesData.map(categories => <CategoriesList key={categories.id} text={categories.text}/>)
    const selectorComponents = selectorData.map(options => <Selector key={options.key} text={options.key} value={options.value}/>)
    return(
        <div className={mainPage.MainPage}>
            <div className={mainPage.mainContainer}>
                <div className={mainPage.categories}>
                    <h3>Категория</h3>
                    <ul>
                        {categoriesListComponents}
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
                            {selectorComponents}
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
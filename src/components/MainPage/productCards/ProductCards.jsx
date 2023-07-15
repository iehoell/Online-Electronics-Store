import React from 'react';
import mainPage from "../MainPage.module.scss";
function ProductCards(props) {
    return(
      <div>
          <div className={mainPage.card}>
              <div>
                  <img
                      src={props.src}
                      alt=""
                      className={mainPage.productPhoto}
                  />
              </div>
              <a href="/ProductPage" id="product1"
                 className={mainPage.name}>
                  {props.type + props.model + props.code + props.color}
              </a>
              <div className={mainPage.buy}>
                  <b className={mainPage.price}>
                      {props.price}
                  </b>
                  <button
                      id="buyButton"
                      className={mainPage.buyButton}>
                      Купить
                  </button>
              </div>
          </div>
      </div>
    );
}

export default ProductCards;
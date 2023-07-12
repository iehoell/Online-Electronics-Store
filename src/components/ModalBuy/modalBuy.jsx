import React from 'react';
import './modalBuy.scss'

const Modal = ({active, setActive, children}) => {
    return(
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className={active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
                {children}
                <div className='form'>
                    <b>Имя</b>
                    <input className='form__firstName' placeholder="Имя"></input>
                    <b>Фамилия</b>
                    <input className='form__secondName' placeholder="Фамилия"></input>
                    <b>Электронная почта</b>
                    <input className='form__email' type='email' placeholder="Электронная почта"></input>
                    <b>Номер телефона</b>
                    <input className='form__telephone' placeholder="Телефон"></input>
                    <b>Комментарий</b>
                    <textarea/>
                    <div className='form__buttons'>
                        <button className='close' onClick={() => setActive(false)}>Закрыть</button>
                        <button className='buy'>Купить</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;
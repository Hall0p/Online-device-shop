import React from 'react';
import './style/style.css';
import cart from './assets/img/shop-cart.svg'

function App() {

  return (
    <div className="App">
        <header className="header">
      <div className="container">
          <div className='header__wrapper'>
              <span className="header__logo">
                  КупиДевайс
              </span>
              <div className="header__user">
                  <div className="header__user">
                      Админ
                  </div>
                  <img src={cart} alt={'cart'} className="header__cart"/>
                  <div className="header__login">
                      Выйти
                  </div>
              </div>
          </div>
      </div>
        </header>

            <div className="container">
                <main className="main">
                    <ul className="sidebar">
                        <li className="sidebar__list">Холодильники</li>
                        <li className="sidebar__list">Телефоны</li>
                        <li className="sidebar__list">Стиральные машины</li>
                        <li className="sidebar__list">Ноутбуки</li>
                        <li className="sidebar__list">Планшеты</li>
                    </ul>
                    <div className="content">
                        <ul className="content-brands">
                            <li className="content-brands__brand">Samsung</li>
                            <li className="content-brands__brand">Apple</li>
                        </ul>
                        <div className="devices">
                            <div className="device">
                                <img src="#" alt="device image" className="device__img"/>
                                <div className="device-info">
                                    <span className="device__type">
                                    Смартфон Samsung
                                    </span>
                                    <div className="device-rating">
                                        <span className="device-rating__rating">4.2</span>
                                        <img src="#" alt="star" className="device-rating__star"/>
                                    </div>
                                    <span className="device__name">Galaxy a51</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>

    </div>
  );
}

export default App;

import React, {useContext} from 'react';
import {Link, Outlet, NavLink, useNavigate} from "react-router-dom";
import cartImage from "../assets/img/shop-cart.svg";
import {AuthContext} from "../context";

const Header = () => {
  const {setIsAuth} = useContext(AuthContext)
  const navigate = useNavigate()

  return (
    <div>
      <header className="header">
        <div className="container">
          <div className='header__wrapper'>
            <Link to='/' className="header__logo tdn ci">
              КупиДевайс
            </Link>
            <div className="header__user">
              <NavLink to='admin' className="header__user tdn ci">
                Админ
              </NavLink>
              <img
                onClick={() => navigate('/cart')}
                src={cartImage} alt={'cart'}
                className="header__cart"
              />
              <button onClick={() => {
                setIsAuth(false)
                navigate('/')
              }} className="header__leave">
                Выйти
              </button>
            </div>
          </div>
        </div>
      </header>
      <div className="container main-container">
        <Outlet/>
      </div>
    </div>
  );
};

export default Header;
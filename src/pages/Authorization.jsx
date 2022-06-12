import React, {useContext} from 'react';
import MyInput from "../components/UI/input/MyInput";
import {Link} from "react-router-dom";
import MyButton from "../components/UI/button/MyButton";
import {AuthContext} from "../context";

const Authorization = () => {
  const {setIsAuth} = useContext(AuthContext)

  const auth = event => {
    event.preventDefault();
    setIsAuth(true)
    localStorage.setItem('auth', 'true')
  }

  return (
    <form
      onSubmit={(event) => auth(event)}
      className='auth'
    >
      <div className="auth-container">
        <h2 className="auth__header">Авторизация</h2>
        <div className="auth__inputs">
          <MyInput type='text' placeholder='Введите ваш email...' />
          <MyInput type='password' placeholder='Введите ваш пароль...' />
        </div>
        <div className="auth-bottom">
          <span className="auth__redirect">
            <span>Нет аккаунта? </span>
            <Link to='/registration' className='tdn'>Регистрация</Link>
          </span>
          <MyButton>Войти</MyButton>
        </div>
      </div>
    </form>
  );
};

export default Authorization
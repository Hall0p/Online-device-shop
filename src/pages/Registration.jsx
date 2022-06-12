import React, {useContext} from 'react';
import MyInput from "../components/UI/input/MyInput";
import {Link, useNavigate} from "react-router-dom";
import MyButton from "../components/UI/button/MyButton";
import {AuthContext} from "../context";

const Authorization = () => {
  const {setIsAuth} = useContext(AuthContext)
  const navigate = useNavigate()

  return (
    <form onSubmit={() => {
      setIsAuth(true)
      navigate('/')
    }}
          className='auth'>
      <div className="auth-container">
        <h2 className="auth__header">Регистрация</h2>
        <div className="auth__inputs">
          <MyInput placeholder='Введите ваш email...' />
          <MyInput placeholder='Введите новый пароль...' />
        </div>
        <div className="auth-bottom">
          <span className="auth__redirect">
            <span>Есть аккаунт? </span>
            <Link to='/' className='tdn'>Войти</Link>
          </span>
          <MyButton>Создать аккаунт</MyButton>
        </div>
      </div>
    </form>
  );
};

export default Authorization
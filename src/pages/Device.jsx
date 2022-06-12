import React from 'react';
import star from '../assets/img/Star 1.png'
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import MyButton from "../components/UI/button/MyButton";
import {addInCartAction} from "../app/cartReducer";

const Device = () => {
  const {deviceId} = useParams()
  const devices = useSelector(state => state.devices)
  const features = useSelector(state => state.feature)

  const device = devices.find(item => item.id === Number(deviceId))
  const featuresById = features.find(item => item.id === Number(deviceId)).options

  const dispatch = useDispatch()

  const addInCart = () => {
    dispatch(addInCartAction(device))
  }

  return (
    <div className='feature-wrapper'>
      <main className="feature-top">
        <img src={device.image} alt="" className="feature__image"/>
        <div className="feature__about">
          <div className="feature-rating">
            <img src={star} alt="star" className="feature-rating__star"/>
            <span className="feature-rating__rating">{device.rating}</span>
          </div>
        </div>
        <div className="feature-price">
          <div className="feature-price__price">{device.price} руб.</div>
          <MyButton
            onClick={() => addInCart()}
            style={{fontSize: 32}}
          >Добавить в корзину</MyButton>
        </div>
      </main>

      <div className="feature-bottom">
        <h2 className="feature__name">{device.brand + ' ' + device.name}</h2>
        <h2 className="feature-bottom__header">Характеристики</h2>
        <ul className="feature-bottom__features">
          {featuresById.map(feature =>
          <li className="feature-bottom__feature">
            {feature.feature + ': ' + feature.value}
          </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Device;
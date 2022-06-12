import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import MyButton from "../components/UI/button/MyButton";
import {addInCartAction, removeFromCartAction, removeOneFromCartAction} from "../app/cartReducer";
import GrayButton from "../components/UI/button/GrayButton";

const Cart = () => {
  const dispatch = useDispatch()
  const [cart, setCart] = useState(useSelector((state) => state.cart))

  const cartPriceSum = () => {
    return cart.reduce((sum, device) => sum + (Number(device.price) * device.amount), 0)
  }

  const select = (index) => {
    const cartCopy = cart.slice(0)
    cartCopy.splice(index, 1, {...cart[index], checked: true})
    setCart(cartCopy)
  }
  const unselect = (index) => {
    const cartCopy = cart.slice(0)
    cartCopy.splice(index, 1, {...cart[index], checked: false})
    setCart(cartCopy)
  }
  const massSelect = () => {
    setCart(cart.map((device) => ({...device, checked: true})
    ))
  }
  const massUnselect = () => {
    setCart(cart.map((device) => ({...device, checked: false})
    ))
  }
  const removeSelected = () => {
    setCart(cart.filter(device =>
      !device.checked
    ))
    cart.map(device => {
        if (device.checked) dispatch(removeFromCartAction(device.id))
      }
    )
  }
  const increaseAmount = (item) => {
    dispatch(addInCartAction(item))
    setCart(cart.map((device) => {
        if (device.id === item.id) return {...device, amount: device.amount + 1}
        return device
      }
    ))
  }
  const decreaseAmount = (item) => {
    if (item.amount <= 1) return
    dispatch(removeOneFromCartAction(item))
    setCart(cart.map((device) => {
        if (device.id === item.id) return {...device, amount: device.amount - 1}
        return device
      }
    ))
  }


  return (
    <div className='cart'>
      <div className="cart-redact">
        <div className="cart-top">
          <div className="mass-selection">
            <GrayButton
              onClick={removeSelected}
              className="cart-top__delete"
            >Удалить выделенные</GrayButton>
            <div>
              <label htmlFor="mass-selection">Выделить все</label>
              <input
                onChange={(event) => {
                  event.target.checked ? massSelect() : massUnselect()
                }}
                type="checkbox"
                name='mass-selection'
              />
            </div>
          </div>
        </div>
        <div className="cart-main">
          {cart.map((device, index) =>
            <div className="cart-device">
              <img src={device.image} alt="device" className="cart-device__image"/>
              <div className="cart-device__info">
                <div className='cart-device__wrapper'>
                  <div className="cart-device__name">{device.brand} {device.name}</div>
                  <input
                    onChange={(event) => {
                      event.target.checked ? select(index) : unselect(index)
                    }}
                    checked={cart[index].checked}
                    type="checkbox"
                    className="cart-device__selection"
                  />
                </div>
                <div className="cart-device-buy">
                  <div className="cart-device-counter">
                    <button
                      onClick={() => decreaseAmount(device)}
                      className="counter__button counter__button__minus"
                    >-</button>
                    <span className="counter">{cart[index].amount}</span>
                    <button
                      onClick={() => increaseAmount(device)}
                      className="counter__button counter__button__plus"
                    >+</button>
                  </div>
                  <div className="cart-device-buy__price">{device.price} ₽</div>
                  <MyButton>Купить</MyButton>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="cart-sum">
        <div className="cart-sum__sum">{cartPriceSum()} ₽</div>
        <MyButton className="cart-sum__button">Купить</MyButton>
      </div>
    </div>
  );
};

export default Cart;
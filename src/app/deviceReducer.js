import samsung from "../assets/img/devices/samsung-a51.jpg";
import iphone from '../assets/img/devices/iphone-13.jpg'
import notebook from '../assets/img/devices/notebook.jpg'
import fridge from '../assets/img/devices/fridge.jpg'
import washer from '../assets/img/devices/washer.jpg'
import tablet from '../assets/img/devices/tablet.jpg'

const defaultState = [
  {id: 1, price: 15000,category: 'Смартфоны', brand: 'Samsung', name: 'Galaxy a31', rating: 4.8, image: samsung},
  {id: 2, price: 25000,category: 'Смартфоны', brand: 'Samsung', name: 'Galaxy a51', rating: 5, image: samsung},
  {id: 3, price: 17000,category: 'Смартфоны', brand: 'Apple', name: 'Iphone 11', rating: 4.9, image: iphone},
  {id: 4, price: 45000,category: 'Смартфоны', brand: 'Apple', name: 'Iphone 11 pro', rating: 4.7, image: iphone},
  {id: 5, price: 12000,category: 'Смартфоны', brand: 'Lenovo', name: 'Legion 2', rating: 4.5, image: samsung},
  {id: 6, price: 18000,category: 'Смартфоны', brand: 'Poco', name: 'M3 PRO', rating: 4, image: samsung},
  {id: 7, price: 45000,category: 'Холодильники', brand: 'Samsung', name: 'Siberian Freeze', rating: 4.4, image: fridge},
  {id: 8, price: 14999,category: 'Холодильники', brand: 'Atlant', name: '6023.031', rating: 3.8, image: fridge},
  {id: 9, price: 300,category: 'Холодильники', brand: 'POZIS', name: 'RK-102', rating: 4.5, image: fridge},
  {id: 10, price: 1000,category: 'Стиральные машины', brand: 'LG', name: 'F1296WDS0', rating: 5, image: washer},
  {id: 11, price: 6000,category: 'Стиральные машины', brand: 'HAIER', name: 'HW60-BP12929BS', rating: 5, image: washer},
  {id: 12, price: 75000,category: 'Стиральные машины', brand: 'Samsung', name: 'WW60A4S00VE', rating: 2.8, image: washer},
  {id: 13, price: 99000,category: 'Стиральные машины', brand: 'BOSCH', name: 'WLP 20260 OE', rating: 4, image: washer},
  {id: 14, price: 23000,category: 'Планшеты', brand: 'Xiaomi', name: 'Pad 5 128Gb Gray', rating: 4.8, image: tablet},
  {id: 15, price: 45000,category: 'Планшеты', brand: 'Samsung', name: 'Galaxy Tab A7 Lite 8.7 32Gb Wi-Fi SM-T220 gray (2021)', rating: 5, image: tablet},
  {id: 16, price: 56000,category: 'Планшеты', brand: 'Prestigio', name: 'Smartkids UP 3104 (10.1) 16Gb', rating: 3.6, image: tablet},
  {id: 17, price: 123000,category: 'Ноутбуки', brand: 'Honor', name: 'MagicBook X14/53011TVN-001/Intel Core i3-10110U/8Gb/256GB/14FHD/Win10 серый', rating: 3.6, image: notebook},
  {id: 18, price: 24560,category: 'Ноутбуки', brand: 'Lenovo', name: 'IdeaPad 3 17ITL6/82H9008YRU/Celeron 6305/4GB/128GB/ 17.3HD+/Win10 серый', rating: 3.6, image: notebook},
  {id: 19, price: 1234000,category: 'Ноутбуки', brand: 'HAIER', name: 'GG1502X Core i5-11400H/16Gb/512Gb/15.6FHD/RTX 3050 Ti 4GB/Win11 черный', rating: 3.6, image: notebook},
  {id: 20, price: 546000,category: 'Ноутбуки', brand: 'ASUS', name: 'TUF FX516PC-HN107/90NR05U1-M005D0/Core i5 11300H/16Gb/512Gb/15.6FHD/RTX3050 4Gb/DOS серый', rating: 3.6, image: notebook},
]

const ADD_DEVICE = 'ADD_DEVICE'
const REMOVE_DEVICE = 'REMOVE_DEVICE'

export const deviceReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_DEVICE:
      return [...state, action.payload]
    case REMOVE_DEVICE:
      return state.filter(device => action.payload !== device.id)
    default:
      return state
  }
}

export const addDeviceAction = (payload) => ({type: ADD_DEVICE, payload})
export const removeDeviceAction = (payload) => ({type: REMOVE_DEVICE, payload})
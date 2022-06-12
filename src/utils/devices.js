import samsung from "../assets/img/devices/samsung-a51.jpg";

const devices = [
  {id: 1, category: 'devices', brand: 'Samsung', name: 'Galaxy a31', rating: 4.8, image: samsung},
  {id: 2, category: 'devices', brand: 'Samsung', name: 'Galaxy a51', rating: 5, image: samsung},
  {id: 3, category: 'devices', brand: 'Apple', name: 'Iphone 11', rating: 4.9, image: samsung},
  {id: 4, category: 'devices', brand: 'Apple', name: 'Iphone 11 pro', rating: 4.7, image: samsung},
  {id: 5, category: 'devices', brand: 'Lenovo', name: 'Legion 2', rating: 4.5, image: samsung},
  {id: 6, category: 'devices', brand: 'Poco', name: 'M3 PRO', rating: 4, image: samsung},
  {id: 7, category: 'refrigerators', brand: 'Samsung', name: 'Siberian Freeze', rating: 4.4, image: samsung},
  {id: 8, category: 'refrigerators', brand: 'Atlant', name: '6023.031', rating: 3.8, image: samsung},
  {id: 9, category: 'refrigerators', brand: 'POZIS', name: 'RK-102', rating: 4.5, image: samsung},
  {id: 10, category: 'washers', brand: 'LG', name: 'F1296WDS0', rating: 5, image: samsung},
  {id: 11, category: 'washers', brand: 'HAIER', name: 'HW60-BP12929BS', rating: 5, image: samsung},
  {id: 12, category: 'washers', brand: 'Samsung', name: 'WW60A4S00VE', rating: 2.8, image: samsung},
  {id: 13, category: 'washers', brand: 'BOSCH', name: 'WLP 20260 OE', rating: 4, image: samsung},
  {id: 14, category: 'tablets', brand: 'Xiaomi', name: 'Pad 5 128Gb Gray', rating: 4.8, image: samsung},
  {id: 15, category: 'tablets', brand: 'Samsung', name: 'Galaxy Tab A7 Lite 8.7 32Gb Wi-Fi SM-T220 gray (2021)', rating: 5, image: samsung},
  {id: 16, category: 'tablets', brand: 'Prestigio', name: 'Smartkids UP 3104 (10.1) 16Gb', rating: 3.6, image: samsung},
  {id: 17, category: 'notebooks', brand: 'Honor', name: 'MagicBook X14/53011TVN-001/Intel Core i3-10110U/8Gb/256GB/14FHD/Win10 серый', rating: 3.6, image: samsung},
  {id: 18, category: 'notebooks', brand: 'Lenovo', name: 'IdeaPad 3 17ITL6/82H9008YRU/Celeron 6305/4GB/128GB/ 17.3HD+/Win10 серый', rating: 3.6, image: samsung},
  {id: 19, category: 'notebooks', brand: 'HAIER', name: 'GG1502X Core i5-11400H/16Gb/512Gb/15.6FHD/RTX 3050 Ti 4GB/Win11 черный', rating: 3.6, image: samsung},
  {id: 20, category: 'notebooks', brand: 'ASUS', name: 'TUF FX516PC-HN107/90NR05U1-M005D0/Core i5 11300H/16Gb/512Gb/15.6FHD/RTX3050 4Gb/DOS серый', rating: 3.6, image: samsung},
]

const categories = [
  {name: 'Холодильники', category: 'refrigerators'},
  {name: 'Смартфоны', category: 'devices'},
  {name: 'Стиральные машины', category: 'washers'},
  {name: 'Ноутбуки', category: 'notebooks'},
  {name: 'Планшеты', category: 'tablets'},
]

const brands = [
  'Samsung', 'Apple', 'HAIER', 'BOSCH', 'Prestigio', 'ASUS', 'Xiaomi', 'Honor', 'LG', 'POZIS', 'Atlant', 'Lenovo'
]

export const getDeviceById = (id) => {
  return devices.find(device => device.id === +id)
}

export const getAllDevices = () => {
  return devices
}

export const getAllCats = () => {
  return categories
}

export const getAllBrands = () => {
  return brands
}
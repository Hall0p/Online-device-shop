import React from 'react';
import MySelect from "../UI/select/MySelect";
import MyInput from "../UI/input/MyInput";
import MyButton from "../UI/button/MyButton";
import {useSelector} from "react-redux";

const DeviceFeature = ({device, setDevice, image, setImage}) => {
  const brands = useSelector(state => state.brand)
  const categories = useSelector(state => state.category)



  const addCategory = (value) => {
    setDevice({...device, category: value})
  }
  const addBrand = (value) => {
    setDevice({...device, brand: value})
  }
  const addName = (value) => {
    setDevice({...device, name: value})
  }
  const addPrice = (value) => {
    setDevice({...device, price: value})
  }
  const addRating = (value) => {
    setDevice({...device, rating: value})
  }

  const addImage = (target) => {
    setImage(target.value)
    const fileReader = new FileReader()
    fileReader.onload = () => {
      setDevice({...device, image: fileReader.result})
    }
    fileReader.readAsDataURL(target.files[0])
  }

  const inputs = [
    {type: 'text', placeholder: 'Введите название', onChange: addName, name: 'name'},
    {type: 'number', placeholder: 'Введите цену ₽', onChange: addPrice, name: 'price'},
    {type: 'number', placeholder: 'Введите рейтинг', onChange: addRating, name: 'rating'},
    {type: 'file', placeholder: 'Вставьте картинку', onChange: addImage, name: 'image'},
  ]

  return (
    <span className='modal-device__device'>
          <h3 className='modal-device__header'>Внесите устройство</h3>
          <MySelect
            onChange={event => addCategory(event.target.value)}
            name="categories"
            array={categories}
            required
          />
          <MySelect
            onChange={event => addBrand(event.target.value)}
            name="brands"
            array={brands}
            required
          />
      {inputs.map(input => (
        input.type === 'file'
          ?
          <span>
                <label style={{fontSize: 18, marginLeft: 18}} htmlFor="image">Выберите изображение</label>
                <MyInput
                  onChange={event => input.onChange(event.target)}
                  value={image}
                  type={input.type}
                  placeholder={input.placeholder}
                  name={input.name}
                />
              </span>
          :
          <MyInput
            onChange={event => input.onChange(event.target.value)}
            value={device[input.name]}
            type={input.type}
            placeholder={input.placeholder}
            name={input.name}
          />
      ))}
      <MyButton style={{marginLeft: 'auto', marginTop: 20}}>Добавить</MyButton>
        </span>
  );
};

export default DeviceFeature;
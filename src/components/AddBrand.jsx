import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";
import MyModal from "./UI/MyModal/MyModal";
import {useDispatch} from "react-redux";
import {addBrandAction} from "../app/brandReducer";

const AddBrand = ({modalBrand, setModalBrand}) => {
  const [brand, setBrand] = useState('')
  const dispatch = useDispatch()

  const addBrand = (value) => {
    setBrand(value)
  }

  const setNewBrand = (event) => {
    event.preventDefault()
    dispatch(addBrandAction(brand))
    setModalBrand(false)
  }

  return (
    <MyModal
      visible={modalBrand}
      setVisible={setModalBrand}
    >
      <form
        onSubmit={setNewBrand}
        action="#"
      >
        <MyInput
          onChange={event => addBrand(event.target.value)}
          type='text'
          placeholder='Введите название бренда'
        />
        <MyButton style={{marginLeft: 'auto', marginTop: 20}}>Добавить</MyButton>
      </form>
    </MyModal>
  );
};

export default AddBrand;
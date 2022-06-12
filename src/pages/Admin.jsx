import React, {useState} from 'react';
import GrayButton from "../components/UI/button/GrayButton";
import AddCategory from "../components/AddCategory";
import AddBrand from "../components/AddBrand";
import AddDevice from "../components/AddDevice";

const Admin = () => {
  const [modalCategory, setModalCategory] = useState(false)
  const [modalBrand, setModalBrand] = useState(false)
  const [modalDevice, setModalDevice] = useState(false)

  return (
    <div className='admin'>
      <GrayButton
        onClick={() => {setModalCategory(true)}}
        className='admin__button'
      >
        Добавить новый тип
      </GrayButton>
      <GrayButton
        onClick={() => {setModalBrand(true)}}
        className='admin__button'
      >
        Добавить новый брэнд
      </GrayButton>
      <GrayButton
        onClick={() => {setModalDevice(true)}}
        className='admin__button'>
        Добавить новый девайс
      </GrayButton>
      <AddCategory modalCategory={modalCategory} setModalCategory={setModalCategory} />
      <AddBrand modalBrand={modalBrand} setModalBrand={setModalBrand} />
      <AddDevice modalDevice={modalDevice} setModalDevice={setModalDevice} />
    </div>
  );
};

export default Admin;
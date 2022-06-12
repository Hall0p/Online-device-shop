import React from 'react';
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addCategoryAction} from "../app/categoryReducer";
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";
import MyModal from "./UI/MyModal/MyModal";

const AddCategory = ({modalCategory, setModalCategory}) => {
  const [category, setCategory] = useState([])
  const dispatch = useDispatch()

  const setNewCategory = (event) => {
    event.preventDefault()
    dispatch(addCategoryAction(category))
    setModalCategory(false)
  }

  return (
    <MyModal
      visible={modalCategory}
      setVisible={setModalCategory}
    >
      <form
        onSubmit={(event) => setNewCategory(event)}
        action="#"
      >
        <MyInput
          onChange={event => setCategory(event.target.value)}
          type='text'
          placeholder='Введите название типа'
        />
        <MyButton style={{marginLeft: 'auto', marginTop: 20}}>Добавить</MyButton>
      </form>
    </MyModal>
  );
};

export default AddCategory;
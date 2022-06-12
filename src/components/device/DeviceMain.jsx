import React from 'react';
import MyInput from "../UI/input/MyInput";
import MyButton from "../UI/button/MyButton";

const DeviceMain = ({options, setOptions}) => {
  return (
    <span className='modal-device__feature' >
            <h3 className='modal-device__header'>Внесите характеристики</h3>
            <span className='modal-device__wrapper'>
              {options.map((option, index) =>
                <span>
                  <MyInput
                    onChange={(event) => setOptions(options.map((item, itemIndex) => {
                      if (itemIndex === index) return {...item, feature: event.target.value}
                      return item
                    }))}
                    value={options[index].feature}
                    type='text'
                    placeholder='Название'
                  />
                  <MyInput
                    onChange={(event) => setOptions(options.map((item, itemIndex) => {
                      if (itemIndex === index) return {...item, value: event.target.value}
                      return item
                    }))}
                    value={options[index].value}
                    type='text'
                    placeholder='Описание'
                    style={{marginBottom: 20}}
                  />
                </span>
              )}
              <MyButton
                onClick={(e) => {
                  e.preventDefault()
                  setOptions([...options, {feature: '', value: ''}])
                }}
              >
              Добавить поле
            </MyButton>
          </span>
        </span>
  );
};

export default DeviceMain;
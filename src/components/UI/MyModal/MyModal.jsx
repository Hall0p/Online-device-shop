import React, {useState} from 'react';
import cl from './MyModal.module.css'
import MyInput from "../input/MyInput";
import MyButton from "../button/MyButton";

const MyModal = ({visible, setVisible, children, ...props}) => {
  const rootClasses = [cl.MyModal]

  if (visible) {
    rootClasses.push(cl.active)
  }

  return (
    <div
      onClick={() => {
        setVisible(false)
      }}
      className={rootClasses.join(' ')}
    >
      <div {...props} className={cl.modalContainer} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default MyModal;
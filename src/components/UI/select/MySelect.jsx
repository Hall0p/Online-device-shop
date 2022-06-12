import React from 'react';
import classes from '../input/MyInput.module.css'
import cl from './MySelect.module.css'

const MySelect = ({array, ...props}) => {
  return (
    <select className={classes.MyInput + ' ' + cl.MySelect} {...props}>
      {array.map(item => (
        <option className={cl.option} value={item}>{item}</option>
      ))}
    </select>
  );
};

export default MySelect;
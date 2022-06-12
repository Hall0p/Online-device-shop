import React from 'react';
import cl from './GrayButton.module.css'

const GrayButton = ({children, className, ...props}) => {
  return (
    <button {...props} className={className + ' ' + cl.GrayButton}>
      {children}
    </button>
  );
};

export default GrayButton;
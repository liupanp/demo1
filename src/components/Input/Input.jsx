import React from 'react';
import InputStyled from './InputStyled';

const Input = (props) => {
  const { placeholder, ...rest } = props;
  return <InputStyled {...rest} placeholder={placeholder}></InputStyled>;
};

export default Input;

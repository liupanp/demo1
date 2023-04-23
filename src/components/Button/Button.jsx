import React from 'react';
import ButtonStyled from './ButtonStyled';

const Button = (props) => {
  const { children, ...rest } = props;
  return <ButtonStyled {...rest}>{children}</ButtonStyled>;
};

export default Button;

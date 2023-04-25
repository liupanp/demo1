import React from 'react';
import CardStyled from './CardStyled';

const Card = (props) => {
  const { children, ...rest } = props;
  return <CardStyled {...rest}>{children}</CardStyled>;
};

export default Card;

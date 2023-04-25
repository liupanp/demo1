import React from 'react';
import CardStyled from './CardStyled';

const Card = (props) => {
  const { title,content, ...rest } = props;
  return <CardStyled {...rest} title={title||'标题'}>{content}</CardStyled>;
};

export default Card;

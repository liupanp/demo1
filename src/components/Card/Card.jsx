import React from 'react';
import CardStyled from './CardStyled';

const Card = (props) => {
  const { title,content,bodyStyle, ...rest } = props;
  const headerStyle={
    padding:'4px 0 18px 0px',
    justifyContent:'center',
  }
  return <CardStyled {...rest} headerStyle={headerStyle} title={title} bodyStyle={bodyStyle}>{content}</CardStyled>;
};

export default Card;

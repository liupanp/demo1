import styled from 'styled-components';
import React from "react";

const TabStyled = styled.div`
  display: flex;
  align-items:center;
  justify-content:center;
  width:100%;
  height: 0.96rem;
  background:#fff;
  font-size: 0.32rem;
  position:fixed;
  bottom:0;
  .tab_content{
    font-weight: 500;
    color: #767676;
    line-height: 48px;
    text-align:center;
  }
`;
export default TabStyled;

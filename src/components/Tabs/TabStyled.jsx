import styled from 'styled-components';
import React from "react";

const TabStyled = styled.div`
  display: flex;
  align-items:center;
  justify-content:center;
  width:100%;
  height: 0.96rem;
  /* height: 96px; */
  background:#fff;
  position:fixed;
  box-shadow:5px 5px 5px 5px #989898;
  bottom:0;
  .adm-tab-bar{
    width:100%;
  font-size: 0.32rem;
  /* font-size: 32px; */
  }
  .tab_content{
    font-weight: 500;
    color: #767676;
    line-height: 48px;
    text-align:center;
  }
`;
export default TabStyled;

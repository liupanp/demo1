import styled from 'styled-components';

const TabStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 96px;
  height: 0.96rem;
  background: #fff;
  position: fixed;
  box-shadow: 0 -4px 12px 0 #01093f0f;
  bottom: 0;
  :global {
    .adm-tab-bar-item-title {
      font-size: 0.32rem;
    }
  }
  .adm-tab-bar {
    width: 100%;
    font-size: 0.32rem;
    /* font-size: 32px; */
  }
  .tab_content {
    font-weight: 500;
    color: #767676;
    line-height: 48px;
    text-align: center;
  }
`;
export default TabStyled;

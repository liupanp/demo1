import { TabBar } from 'antd-mobile';
import React, { useState } from 'react';
import { history, useLocation } from 'umi';
import TabStyled from './TabStyled';

const Tabs = (props) => {
  const { content, ...rest } = props;
  const [tabIdx, setTabIdx] = useState(0);
  const location = useLocation();
  const { pathname } = location;

  const setRouteActive = (value) => {
    history.push(value);
  };

  return (
    <TabStyled {...rest}>
      <TabBar activeKey={pathname} onChange={(value) => setRouteActive(value)}>
        {content.map((item) => (
          <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
        ))}
      </TabBar>
    </TabStyled>
  );
};

export default Tabs;

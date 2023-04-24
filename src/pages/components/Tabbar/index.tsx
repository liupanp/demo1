import React from "react";
import Tab from '@/components/Tabs/index';
import {history} from 'umi';

const Tabbar = () => {
  const content=[
    {
      key: '/',
      title: '首页',
      // icon: <AppOutline />,
    },
    {
      key: '/my',
      title: '我的',
      // icon: <UnorderedListOutline />,
    },
  ];
  return (
    <div>
     <Tab content={content}></Tab>
    </div>
  );
};

export default Tabbar;

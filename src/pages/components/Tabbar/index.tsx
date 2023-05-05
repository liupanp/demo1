import Tab from '@/components/Tabs/index';
import React from 'react';

const Tabbar = () => {
  const content = [
    {
      key: '/',
      title: '首页',
      // icon: <AppOutline />,
    },
    {
      key: '/tabbar/my',
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

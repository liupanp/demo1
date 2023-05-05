import Tabbar from '@/pages/components/Tabbar/index';
import Login from '@/pages/login/login';
import 'antd-mobile/cjs/global'; // 必须引入该组件，否则antd-mobile部分组件touch会失效。
import React from 'react';
import { AliveScope } from 'react-activation';
import { ThemeProvider } from 'styled-components';
import { Outlet, useLocation } from 'umi';
import { Globalstyle } from '../GlobalStyled';
import theme from '../theme/index';

export default function Layout() {
  const location = useLocation();
  console.log(location, 'location');

  if (location.pathname === '/login') {
    return <Login />;
  }
  if (location.pathname?.includes('tabbar') || location.pathname === '/') {
    return (
      <div>
        <ThemeProvider theme={theme}>
          {/* 页面缓存 */}
          <AliveScope>
            <Globalstyle />
            <Outlet />
            {/* 根据路由判断是否用tabbar */}
            {/* /tabbar */}
            <Tabbar />
          </AliveScope>
        </ThemeProvider>
      </div>
    );
  }
  return (
    <div>
      <ThemeProvider theme={theme}>
        {/* 页面缓存 */}
        <AliveScope>
          <Globalstyle />
          <Outlet />
          {/* 根据路由判断是否用tabbar */}
          {/* <Tabbar /> */}
        </AliveScope>
      </ThemeProvider>
    </div>
  );
}

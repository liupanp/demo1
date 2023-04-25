import { useLocation, Outlet,history } from 'umi';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../theme/index';
import { AliveScope, KeepAlive } from 'react-activation';
import Login from '@/pages/login/login';
import Tabbar from '@/pages/components/Tabbar/index';
import 'antd-mobile/cjs/global'; // 必须引入该组件，否则antd-mobile部分组件touch会失效。
import { Globalstyle } from '../GlobalStyled';

export default function Layout() {
  const location = useLocation();
  console.log(location,'location');
  
  if (location.pathname === '/login') {
    return <Login />
  }
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

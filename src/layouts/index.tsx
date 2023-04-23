import { useLocation, Outlet } from 'umi';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../theme/index';
import { AliveScope, KeepAlive } from 'react-activation';
import Login from '@/pages/login/login';

export default function Layout() {
  const location = useLocation();
  
  if (location.pathname === '/login') {
    return <><Login /></>
  }
  return (
    <div>
      <ThemeProvider theme={theme}>
        {/* 页面缓存 */}
      <AliveScope>
      <Outlet />
      </AliveScope>       
    </ThemeProvider>
    </div>
  );
}

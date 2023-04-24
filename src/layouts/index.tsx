import { useLocation, Outlet,history } from 'umi';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../theme/index';
import { AliveScope, KeepAlive } from 'react-activation';
import Login from '@/pages/login/login';
import Tabs from '@/components/Tabs/index';

export default function Layout() {
  const location = useLocation();
const content=[
    {
      tabs:'首页',
      handleClick:()=>{
        // 首页tab点击事件
        history.push('/');
      },

    },
    {
      tabs:'我的',
      handleClick:()=>{
        // 首页tab点击事件
        history.push('/myPage');
      },

    },
  ];

  if (location.pathname === '/login') {
    return <><Login /></>
  }
  return (
    <div>
      <ThemeProvider theme={theme}>
        {/* 页面缓存 */}
      <AliveScope>
        {/* 根据路由判断是否用tabbar */}
      <Tabs content={content}></Tabs>
      <Outlet />
      </AliveScope>       
    </ThemeProvider>
    </div>
  );
}

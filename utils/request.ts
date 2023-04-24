import { useRequest } from 'umi';
import type { RequestConfig } from 'umi';
import {  Toast } from 'antd-mobile';
import { getToken, setToken, removeToken, getRefreshToken } from '@UTILS/token';

const agentId='';//mock特定agentId 
const corpId='';//mock特定corpId 
const baseUrl='';//域名前缀
const CACHE_AUTH_CODE='AUTH_CODE';//存储的特定命名code
const oauthUrl='';//授权时接口

// 企微api授权登陆
export const authRedirect = () => {
  if (process.env.NODE_ENV === 'development') {
    return;
  }
  const url = baseUrl +
        `/qyapi/auth/redirect?scope=snsapi_privateinfo&agentId=${agentId}&corpId=${corpId}&redirect_uri=${encodeURIComponent(
          window.location.href,
        )}`;
  // if (isIOS) {
  const handlePageshow = () => {
    setTimeout(() => {
      // 是否有缓存信息
      const bool = !!window.sessionStorage.getItem(CACHE_AUTH_CODE);
      if (bool) {
        window.location.reload();
      }
      console.log(' page-show => bool', bool);
    }, 300);
    window.removeEventListener('pageshow', handlePageshow);
  };
  window.addEventListener('pageshow', handlePageshow);
  // }
  console.log(' auth-redirect => url', url);
  window.sessionStorage.setItem('FISRT-ROUTER-LENGTH', window.history.length);
  window.location.href = url;
};

// 错误处理
const errorHandler = (error: { response: any; }) => {
  const { response } = error;
  if (response && response.status) {
    const errorText = httpErrorMessage[lang][response.status] || response.statusText;
    Toast.show({
              content: errorText,
              afterClose: () => {
                console.log('after')
              },
      })
  }
  return response;
};

export const request:RequestConfig = {
  errorHandler,
  requestInterceptors: [    // 请求拦截器，接收数组，可设置多个拦截器
    (url: any, options: { headers: any; }) => {
      let optionsCustom = options;
      const token = getToken();
        // 非OAuth的url，添加heade
  if (!url.includes(oauthUrl)) {
    optionsCustom.headers = {
      ...optionsCustom.headers,
      Authorization: token ? `Bearer ${token}` : '',
    };
    }
      return {
        options: {
          ...options,
          headers: {
            ...(options?.headers ?? {}),
            Authorization:  token ? `Bearer ${token}` : '',    // 这里获取自己的token携带在请求头上
          },
        },
      };
    },
  ],
  responseInterceptors: [  // 相应拦截器，也接受数组
    async (response: { status: number; clone: () => { (): any; new(): any; json: { (): any; new(): any; }; }; }) => {
      if (response) {
        const { status, url } = response;
        if (response.status === 401) {   // token过期的时候自动刷新获取新的token自动登录，当然这是根据自己页面的需求决定，大多都是token过期跳转登录页面，重新登陆
          console.error(' => token 失效或过期', status, url);
          removeToken();
          authRedirect();
        }
        if (response.status === 200) {  // 后端规定了一些自定义返回的errorCode码，返回后端的自定义提示信息
          const data = await response.clone().json();
          if (data && data.messageCode) {
            const errorText = 'error';          // 从自定义的error里取
            Toast.show({
              content: errorText,
              afterClose: () => {
                console.log('after')
              },
      })
          }
        }
      } else {
        Toast.show({
             content: lang == 'zh-CN' ? '您的网络发生异常，无法连接服务器' : 'Your network is abnormal and you cannot connect to the server',
              afterClose: () => {
                console.log('after')
              },
            })
      }
      return response;
    },
  ],
};

export default request;

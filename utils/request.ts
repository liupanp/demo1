import { request, useRequest } from 'umi';
import type { RequestConfig } from 'umi';
import {  Toast } from 'antd-mobile';

// 为 request 方法添加响应阶段的拦截器
const request: RequestConfig = {
  responseInterceptors: [
    // 直接写一个 function，作为拦截器
    (response) =>
      {
        // 不再需要异步处理读取返回体内容，可直接在data中读出，部分字段可在 config 中找到
        const { data = {} as any, config } = response;
        // do something
        return response
      },
    // 一个二元组，第一个元素是 request 拦截器，第二个元素是错误处理
    [(response) => {return response}, (error) => {return Promise.reject(error)}],
    // 数组，省略错误处理
    [(response) => {return response}]
  ]
 
}

// 封装请求
const errorHandler = (error) => {
  const { response } = error;
  if (response && response.status) {
    const errorText = httpErrorMessage[lang][response.status] || response.statusText;
    // message.error({
    //   content: errorText,
    // });
    Toast.show({
              content: errorText,
              afterClose: () => {
                console.log('after')
              },
            })
  }
  return response;
};
export const request = {
  errorHandler,
  requestInterceptors: [    // 请求拦截器，接收数组，可设置多个拦截器
    (_, options) => {
      return {
        options: {
          ...options,
          headers: {
            ...(options?.headers ?? {}),
            Authorization: `bearer ${initialState?.auth?.[0]?.id_token}`,    // 这里获取自己的token携带在请求头上
          },
        },
      };
    },
  ],
  responseInterceptors: [  // 相应拦截器，也接受数组
    async (response) => {
      if (response) {
        if (response.status === 401) {   // token过期的时候自动刷新获取新的token自动登录，当然这是根据自己页面的需求决定，大多都是token过期跳转登录页面，重新登陆
           
        }
        if (response.status === 200) {  // 后端规定了一些自定义返回的errorCode码，返回后端的自定义提示信息
          const data = await response.clone().json();
          if (data && data.messageCode) {
            const errorText = codeErrorMessage[lang][data.messageCode] || codeErrorMessage[lang][10000];          //  codeErrorMessage支持多语言环境的json文件，和httpErrorMessage 一样写法
            message.error({
              content: errorText,
            })
          }
        }
      } else {
        // message.error({
        //   content: lang == 'zh-CN' ? '您的网络发生异常，无法连接服务器' : 'Your network is abnormal and you cannot connect to the server',
        // })
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
import { RequestConfig } from 'umi';
const token='JWT ...'
const requestInterceptor = (url: string, options: any) => {
  options.headers = {
    Authorization: token,
  };
  options.interceptors = true;
  return {
    url,
    options,
  };
};
export const request: RequestConfig = {
  requestInterceptors: [requestInterceptor],
};
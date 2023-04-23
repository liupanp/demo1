import webStorage from './storageManager';

const TOKEN_INFO='TOKEN_INFO';
const REFRESH_TOKEN='REFRESH_TOKEN';

export const setToken = (tokenData: { access_token: any; expires_in: any; refresh_token: any; refresh_expires_in: any; }) => {
  // token
  webStorage.set(TOKEN_INFO, tokenData.access_token, {
    exp: tokenData.expires_in ?? 2 * 3600, // 过期时间默认2小时
  });
  // 刷新token
  webStorage.set(REFRESH_TOKEN, tokenData.refresh_token, {
    exp: tokenData.refresh_expires_in ?? 2 * 3600, // 过期时间默认2小时
  });
};

export const getToken = () => {
  return webStorage.get(TOKEN_INFO);
};

export const getRefreshToken = () => {
  return webStorage.get(REFRESH_TOKEN);
};

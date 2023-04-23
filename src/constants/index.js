import config from '@CONFIG/dynamicBaseUrl';

export const APP_TITLE = config.title;
export const APP_NAME = config.appName;

const getCacheKey = (key) =>
  `${config.appName}/${config.corpId}/${config.agentId}/${key}`; // 多租户需要区分
export const SHOW_REFRESH_LAYOUT = getCacheKey('SHOW_REFRESH_LAYOUT');
export const CACHE_AUTH_CODE = getCacheKey('AUTH_CODE');
export const CACHE_AUTH_TRYTIME = getCacheKey('AUTH_CODE_TRYTIME');
export const CACHE_USER_INFO = `${config.appName}/USER_INFO`;
export const TOKEN_INFO = getCacheKey('TOKEN_INFO');
export const REFRESH_TOKEN = getCacheKey('REFRESH_TOKEN');
export const CACHE_PRIVACY_POLICY = getCacheKey('PRIVACY_POLICY');
export const TOKEN_EXPIRES_TIME = getCacheKey('TOKEN_EXPIRES_TIME'); // token过期时间YYYYMMDDHHmmss
export const TOKEN_REFRESH_TIME = getCacheKey('TOKEN_REFRESH_TIME'); // token刷新时间YYYYMMDDHHmmss

// 文件类型
export const FILE_DISTS = {
  jpg: 'IMAGE',
  jpeg: 'IMAGE',
  png: 'IMAGE',
  gif: 'IMAGE',
  mp4: 'VIDEO',
  wmv: 'VIDEO',
  MOV: 'VIDEO',
};

import WebStorageCache from 'web-storage-cache';

const webStorage = new WebStorageCache({
  // [可选] 'localStorage', 'sessionStorage', window.localStorage, window.sessionStorage
  //        或者其他实现了 [Storage API] 的storage实例.
  //        默认 'localStorage'.
  storage: 'localStorage',
  // [可选]  类型Number，公共超时事件设置。默认无限大
  exp: Infinity,
});

export default webStorage;

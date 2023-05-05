import dayjs from 'dayjs';

// 时间转换格式
export const formatSeconds = (value: any) => {
  return dayjs.unix(value).format('mm:ss');
};

const now = dayjs().format('YYYY/MM/DD');
export const formatDate = (date = '') => {
  const cur = dayjs(date).format('YYYY/MM/DD');
  return now === cur ? '今天' : cur;
};

const ua = window.navigator.userAgent.toLowerCase();
const WEEKDAY = {
  zh: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
  en: ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'],
};

export const isAndroid = ua.match(/(android);?[\s/]+([\d.]+)?/);
export const isIPad = ua.match(/(ipad).*os\s([\d_]+)/);
export const isIPod = ua.match(/(ipod)(.*os\s([\d_]+))?/);
export const isIPhone = !isIPad && ua.match(/(iphone\sos|ios)\s([\d_]+)/);
export const isIOS = isIPad || isIPod || isIPhone;
export const isMobile = isAndroid || isIOS;

/**
 * 按字节计算字符串长度
 * @param bytes 字节数
 * @returns
 */
export const byteLength = (str: string) => {
  if (typeof str !== 'string') {
    return 0;
  }
  let len = 0;
  for (let i = 0; i < str.length; i++) {
    //UTF8编码一个中文按2个字节算
    len += str.charCodeAt(i) > 255 ? 2 : 1;
  }
  return len;
};

/**
 * 按字节截取字符串
 * @param bytes 字节数
 * @returns
 */
export const subStringByBytes = (str: string, bytes: number) => {
  if (typeof str !== 'string') {
    return '';
  }
  let len = 0;
  for (let i = 0; i < str.length; i++) {
    //UTF8编码一个中文按2个字节算
    len += str.charCodeAt(i) > 255 ? 2 : 1;
    if (len > bytes) {
      return str.substring(0, i);
    }
  }
  return str;
};
/**
 * 按字节截取字符串（从字符串后边截取）
 * @param bytes 字节数
 * @returns
 */
export const subStringByBytesReverseSub = (str: string, bytes: number) => {
  if (typeof str !== 'string') {
    return '';
  }
  let len = 0;
  let s = '';
  let rs = '';
  for (let i = str.length - 1; i >= 0; i--) {
    s = s + str.charAt(i);
    //UTF8编码一个中文按2个字节算
    len += str.charCodeAt(i) > 255 ? 2 : 1;
    if (len >= bytes) {
      for (let j = s.length - 1; j >= 0; j--) {
        rs = rs + s.charAt(j);
      }
      return rs;
    }
  }
  return str;
};

export const ellipsisStringByBytes = (str: string | any[], bytes: number) => {
  if (typeof str !== 'string') {
    return '';
  }

  const subStr = subStringByBytes(str, bytes);
  return str.length > subStr.length ? `${subStr}...` : str;
};
export const memberFlattening = (memberData: any) => {
  const list: never[] = [];
  const obj = {};
  const getDataList = function (data: any[], arr: any[]) {
    if (Array.isArray(data)) {
      data?.forEach((cell) => {
        const { children, userId, ...otherProps } = cell;
        if (Array.isArray(children)) {
          getDataList(children, arr);
        }
        if (userId && !obj[userId]) {
          obj[userId] = true;
          arr.push({ ...otherProps, userId });
        }
      });
    }
  };
  getDataList(memberData, list);
  return list;
};

export const setLocalStorage = function (key: string, data: any) {
  const timestamp = new Date().getTime();
  localStorage.setItem(key, JSON.stringify({ timestamp, data }));
};

export const getLocalStorage = function (key: string) {
  return JSON.parse(localStorage.getItem(key));
};

export const removeLocalStorage = function (key: string) {
  localStorage.removeItem(key);
};
// 修正时间
export const correctionTime = function (date: any) {
  let v = dayjs(date).format('YYYY-MM-DD 00:00:00');
  let time = new Date(v).getTime();
  // eslint-disable-next-line no-self-compare
  if (time !== time) {
    v = v.replace(/-/g, '/');
  }
  return `${v}`;
};

//文件大小
export const getFileSize = (size: string) => {
  function bytesToSize(bytes: number) {
    if (bytes === 0) {
      return '0 B';
    }
    let k = 1024,
      sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
      i = Math.floor(Math.log(bytes) / Math.log(k));
    // 先以 e 来分别计算 bytes 与 k 分别对 e 的指数是多少
    // 再将两个指数相除即可得到bytes相对于k的一个指数倍数
    // 再利用floor向下取整，所得到的即是所应该取的sizes的下标，即sizes[i]
    // eslint-disable-next-line no-restricted-properties
    return (bytes / Math.pow(k, i)).toPrecision(4) + ' ' + sizes[i];
    // 传入参数大小/对应k的i次方即可得相应数，然后用toPercision限定显示为数最多四位
    // 后面拼接sizes[i]找到的单位即可
  }
  return bytesToSize(parseInt(size, 10));
};

export const getFilename = (url: string) => {
  return url?.substring(url?.lastIndexOf('/') + 1) || '';
};
export const getDownloadUrl = ({ url = '' }) => {
  return (
    url +
    (url.indexOf('?') !== -1 ? '&' : '?') +
    `response-content-disposition=attachment;filename=${encodeURIComponent(
      getFilename(url),
    )}`
  );
};

export const handleCopy = (content: string) => {
  const inputTest = document.createElement('textarea');
  inputTest.value = content;
  document.body.appendChild(inputTest);
  inputTest.select();
  document.execCommand('Copy');
  document.body.removeChild(inputTest);
};

export const isWeapp = () => {
  //判断当前入口是PC端还是APP端
  // eslint-disable-next-line no-eq-null
  let flag =
    // eslint-disable-next-line no-eq-null
    navigator.userAgent.match(
      /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i,
    ) != null;
  return flag;
};
//判断pc端是ios/window
export const getPosType = () => {
  let agent = navigator.userAgent.toLowerCase();
  if (/macintosh|mac os x/i.test(navigator.userAgent)) {
    // console.log('这是ios端');
  }
  let flag =
    agent.indexOf('win32' || 'win64') >= 0 ||
    agent.indexOf('wow32' || 'wow64') >= 0;
  return flag;
};
export const dataURLtoFile = (dataurl: string, filename = 'file') => {
  let arr = dataurl.split(',');
  let mime = arr[0].match(/:(.*?);/)[1];
  let suffix = mime.split('/')[1];
  let bstr = atob(arr[1]);
  let n = bstr.length;
  let u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], `${filename}.${suffix}`, {
    type: mime,
  });
};

/**
 * 最多保留N位小数
 * @param {*} decimal
 * @param {*} scale
 */
export const keepDecimal = (
  decimal: unknown,
  scale: number,
  keepBit: undefined,
) => {
  if (decimal === null || decimal === false || Number.isNaN(decimal)) {
    return 'N/A';
  }
  if (decimal === 0) {
    return 0;
  }
  let scaleTmp = scale >= 0 ? scale : -1; // 默认保留1位小数
  // scale = scale >= 0 ? scale : 0;// 默认保留1位小数
  let decimalTmp = parseFloat(decimal, 10);
  let decimalStr = String(decimal);
  let finalDecimal =
    scaleTmp >= 0 && decimalStr.indexOf('.') > -1
      ? (decimalTmp += 0.000000000001).toFixed(scaleTmp)
      : decimal;
  return keepBit ? finalDecimal : parseFloat(finalDecimal, 10);
  // return scale >= 0 ? decimal.toFixed(scale) : decimal;
};

/**
 * 格式化百分比%（四舍五入取整）
 * @param {*需要格式化的百分比小数} decimal
 * @param {*} scale
 */
export const fmtPercent = (decimal: unknown, scale: any) => {
  if (decimal === null || decimal === false || Number.isNaN(decimal)) {
    return 'N/A';
  }
  let convertedDecimal = keepDecimal(decimal * 100, scale);
  let result = scale ? convertedDecimal : Math.round(convertedDecimal);
  return Number.isNaN(result) ? 'N/A' : result;
};

// 获取文件路径
export const getImageUrl = (url: string) => {
  const element = document.createElement('img');
  element.src = url;
  return element.src;
};

/**
 * 根据最早开始时间和最晚结束时间算出中间任务日期
 */
export const getDateList = (startDate: any, endDate: any) => {
  const dayDiff = dayjs(endDate).diff(dayjs(startDate), 'day');
  var stipe = startDate;
  const diffData = [];
  for (let i = 0; i < dayDiff; i++) {
    const stimeTs = new Date(stipe).getTime();
    const nextDate = stimeTs + 24 * 60 * 60 * 1000;
    const nextDatesY = new Date(nextDate).getFullYear() + '-';
    const nextDatesM =
      new Date(nextDate).getMonth() + 1 < 10
        ? '0' + (new Date(nextDate).getMonth() + 1) + '-'
        : new Date(nextDate).getMonth() + 1 + '-';
    const nextDatesD =
      new Date(nextDate).getDate() < 10
        ? '0' + new Date(nextDate).getDate()
        : new Date(nextDate).getDate();
    diffData[i] = nextDatesY + nextDatesM + nextDatesD;
    stipe = dayjs(stipe).add(1, 'day');
  }
  const dayFirst = dayjs(startDate).format('YYYY-MM-DD');
  diffData.push(dayFirst);
  return diffData.sort();
};

/**
 * 两个对象是否相等
 */
export const equals = (x: { [x: string]: any }, y: { [x: string]: any }) => {
  let f1 = x instanceof Object;
  let f2 = y instanceof Object;
  if (!f1 || !f2) {
    return x === y;
  }
  if (Object.keys(x).length !== Object.keys(y).length) {
    return false;
  }
  let newX = Object.keys(x);
  for (let p in newX) {
    p = newX[p];
    let a = x[p] instanceof Object;
    let b = y[p] instanceof Object;
    if (a && b) {
      equals(x[p], y[p]);
    } else if (x[p] !== y[p]) {
      return false;
    }
  }
  return true;
};

// 状态方法
export const statefn = function (fnName: (arg0: (state: any) => any) => void) {
  return function (data: any) {
    if (typeof data === 'object' && typeof fnName === 'function') {
      fnName((state: any) => {
        return { ...state, ...data };
      });
    }
  };
};

// 根据媒体时间转成字符串
export const rangeTimeToStr = (time: number) => {
  // 填充数字
  const fill = (n: number) => String(n).padStart(2, 0);
  const m = time / 60; // 分钟
  const s = time % 60; // 秒
  return `${fill(Math.floor(m))}:${fill(Math.floor(s))}`;
};

export const filterHtmlTag = (content: string) => {
  return content?.replace(/<\/?.+?\/?>/g, '');
};

/**
 * 时间格式化
 * @param {date} date 时间
 * @param {string} fmt 默认: yyyy-MM-dd hh:mm:ss"
 * @return {string}
 */
export const dateFormat = (date: Date, format = 'YYYY-MM-DD HH:mm:ss') => {
  if (!date) {
    return '';
  }
  let fmt = format;
  if (/(Y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      String(date.getFullYear()).substr(4 - RegExp.$1.length),
    );
  }
  let o = {
    'M+': date.getMonth() + 1,
    'D+': date.getDate(),
    'H+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
    W: WEEKDAY['zh'][date.getDay()],
    w: WEEKDAY['en'][date.getDay()],
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = String(o[k]);
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? str : ('00' + str).substr(str.length),
      );
    }
  }
  return fmt;
};

/**
 * 时间戳格式化
 * @param {number} timeStamp 时间戳
 * @param {string} fmt 格式 默认: yyyy-MM-dd hh:mm:ss"
 * @return {string}
 */
export const timeStampFormat = (
  timeStamp: string | number | Date,
  fmt: string | undefined,
) => {
  if (!timeStamp) {
    return '';
  }

  let date = new Date(
    // eslint-disable-next-line no-restricted-globals
    !isNaN(timeStamp)
      ? Number(timeStamp)
      : typeof timeStamp === 'string'
      ? timeStamp.replace(/-/g, '/')
      : timeStamp,
  );
  return dateFormat(date, fmt);
};

export const getSize = (size: string | number) => {
  const sizes = ['TB', 'GB', 'MB', 'KB'];
  for (let i = 0, len = sizes.length; i < len; i++) {
    const total = window.Math.pow(1024, len - i);
    if (size > total) {
      return (size / total).toFixed(2) + sizes[i];
    }
  }
  return size + 'B';
};

/**
 * 四舍五入，保留指定小数位数，当原始数据不满足长度时，不要补 0
 * @param number [Number | String] 原始数据，支持字符串和数值型
 * @param i [Number] 保留的小数个数 >= 0
 * @returns [Number] 转换后的数据
 */
export const transformDecimal = (number: number, i: number | undefined) => {
  let decimalNum = null;
  // 先转换为数值型
  let num = Number(number);
  // 判断是否为数值型
  // eslint-disable-next-line no-restricted-globals
  if (!isNaN(num)) {
    // 切分整数与小数
    let arr = num.toString().split('.');
    // 是小数且小数位大于保留个数
    if (arr.length > 1 && arr[1].length > i) {
      // 小数部分字符串
      let decimal = arr[1].slice(i, i + 1);
      // toFixed 有 bug，四舍六入五随机
      // 当四舍五入的数为 5，给其 + 1
      if (decimal === '5') {
        // 这里可能会存在 0.1 ** 5 = 0.000010000000000000003 但不影响四舍五入
        // eslint-disable-next-line no-restricted-properties
        num += Math.pow(0.1, i + 1);
      }
      decimalNum = num.toFixed(i);
    } else {
      decimalNum = num;
    }
    decimalNum = Number(decimalNum);
  }
  return decimalNum;
};

//人性化时间（duration单位：毫秒）
export const simpleDuration = (duration: number) => {
  let days = '',
    hours = '',
    minutes = '',
    seconds = '';
  let day = 24 * 60 * 60 * 1000,
    hour = 60 * 60 * 1000,
    minute = 60 * 1000,
    second = 1000;
  if (duration >= day) {
    days = Math.floor(duration / day) + '天';
    hours = Math.floor((duration % day) / hour) + '小时';
  } else if (duration >= hour && duration < day) {
    hours = Math.floor(duration / hour) + '小时';
    minutes = Math.floor((duration % hour) / minute) + '分钟';
  } else if (duration > minute && duration < hour) {
    minutes = Math.floor(duration / minute) + '分钟';
    seconds = Math.floor((duration % minute) / second) + '秒';
  } else if (duration <= minute) {
    seconds = Math.floor(duration / second) + '秒';
  }
  return days + hours + minutes + seconds;
};

//人性化时间（duration单位：毫秒）10分钟===》0.1小时
export const simpleDurationPoint = (duration: number) => {
  let days = '',
    hours = '',
    minutes = '',
    seconds = '';
  let day = 24 * 60 * 60 * 1000,
    hour = 60 * 60 * 1000,
    minute = 60 * 1000,
    second = 1000;
  if (duration >= day) {
    days = Math.floor(duration / day);
    hours = Math.floor((duration % day) / hour);
    const time = days + transformDecimal(hours / 24, 1);
    return [time, '天'];
  }
  if (duration >= hour && duration < day) {
    hours = Math.floor(duration / hour);
    minutes = Math.floor((duration % hour) / minute);
    const time = hours + transformDecimal(minutes / 60, 1);
    return [time, '小时'];
  }
  if (duration >= minute && duration < hour) {
    minutes = Math.floor(duration / minute);
    seconds = Math.floor((duration % minute) / second);
    const time = minutes + transformDecimal(seconds / 60, 1);
    return [time, '分钟'];
  }
  if (duration < minute && duration >= 0) {
    seconds = Math.floor(duration / second);
    return [seconds, '秒'];
  }
  return [0, '秒'];
};

//去掉富文本的标签
export const removeLabel = (content: string) => {
  return content?.replace(/<\/?.+?\/?>/g, '');
};

// console.log(521, simpleDurationPoint(276480000));//3.2天
// console.log(522, simpleDurationPoint(12600000));//3.5小时
// console.log(523, simpleDurationPoint(168000));//2.8分钟
// console.log(524, simpleDurationPoint(3600000));

// 数字转字母
export const numToCase = (code: number) => {
  if (code < 0 || code > 25) {
    return '';
  }
  return String.fromCharCode(code + 65);
};

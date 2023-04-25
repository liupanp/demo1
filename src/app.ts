// 运行时配置
import { matchRoutes } from 'umi';

export function onRouteChange({ clientRoutes, location }) {
  const route = matchRoutes(clientRoutes, location.pathname)?.pop()?.route;
  // console.log(route,'routes====',clientRoutes);

  if (route) {
    document.title = route.title || '';
  }
}

let extraRoutes: any[];
export function patchClientRoutes({ routes }) {
  console.log(routes,'routes====');
  
  extraRoutes&&extraRoutes.forEach((route) => {
    routes.unshift({
      path: route.path,
      element: route.element,
      children: route.children,
    });
  });
  // console.log(extraRoutes,'extraRoutes==');
}

/**
 * 企业微信SDK签名授权
 */
const wxConfigBySignature = async () => {
  // 调后端接口获取签名授权
};

/**
 * 微信 SDK 初始化认证
 * @param {微信认证参数信息} data
 */
const wx = window.wx;
// 配置试错次数
let configTryTime = 0;
const wxAgent = (data) => {
  let tryTimerId = null;
  if (typeof wx?.agentConfig === 'function') {
    const { corpid, agentid, timestamp, nonceStr, signature } = data;
    wx.agentConfig({
      corpid: corpid, // 必填，企业微信的corpid，必须与当前登录的企业一致
      agentid: agentid, // 必填，企业微信的应用id （e.g. 1000247）
      timestamp: timestamp, // 必填，生成签名的时间戳
      nonceStr: nonceStr, // 必填，生成签名的随机串
      signature: signature, // 必填，签名，见附录-JS-SDK使用权限签名算法
      jsApiList: [
        'getCurExternalContact',
        'getCurExternalChat',
        'getContext',
        'selectEnterpriseContact',
        'shareAppMessage',
        'openExistedChatWithMsg',
        'sendChatMessage',
        'hideOptionMenu',
        'hideMenuItems',
        'hideAllNonBaseMenuItem',
      ], //必填，传入需要使用的接口名称
      success: function (ress: any) {
        // 清除试错数据
       let configTryTime = 0;
       let tokenTryTime = 0;
        clearTimeout(tryTimerId); // 清除重试定时器
        // window.sessionStorage.removeItem(CACHE_AUTH_TRYTIME);
        wx.hideAllNonBaseMenuItem(); // 隐藏所有非基础按钮接口
        // 以键值对的形式返回，可用的api值true，不可用为false
        // 如：{"checkResult":{"chooseImage":true},"errMsg":"checkJsApi:ok"}
        // 执行初始化
      },
      fail: function (error) {
        clearTimeout(tryTimerId); // 清除重试定时器
        if (++configTryTime < 10) {
          // eslint-disable-next-line no-use-before-define
          wxConfigBySignature();
        } else {
          // 跳转至错误页进行提示
        }
      },
      complete: function () {
        console.log('complete');
      },
    });
    // 超过3s后，agentConfig没响应的话，再次重试
    tryTimerId = setTimeout(() => {
      console.log('tryTimerId', configTryTime);
      if (++configTryTime > 10) {
        return;
      }
      tryTimerId = null;
      wxAgent(data);
    }, 3000);
  } else {
    setTimeout(() => {
      wxAgent(data);
    }, 500);
  }
};
import { IApi } from "umi";

export default (api: IApi) => {
  // 通过插件设置环境变量
  process.env.COMPRESS = "none";

  // 通过插件修改配置
  api.modifyConfig((memo: any) => {
    memo.title = "移动端";
    return memo;
  });
  api.chainWebpack(( memo, { webpack, env}) => {
  // set alias
  console.log(webpack, env,'webpack, env');
  
  memo.resolve.alias.set('a','path/to/a');
  // Delete progess bar plugin
  memo.plugins.delete('progess');
});
  // 修改html
  // api.modifyHTML(($) => {
  //   $('head').append([
  //     `<script src='https://cdn.jsdelivr.net/npm/jquery@3.2.1/dist/jquery.min.js'></script>`,
  //   ])
  //   return $;
  // });
  // 修改webpack配置
  api.modifyWebpackConfig((memo, { webpack, env }) => {
  // do something
  
  return memo;
})

  // 插件的应用
  // api.registerXXXX({name:'唯一值',fn:()=>{ '干些啥事' }});
  // api.addXXXXX(()=>{ return '返回要添加的一些东西'});
  // api.modifyXXXX((memo)=>{ memo.some = '一些想要修改的东西'; return memo;});
  // if(api.属性 === 'xxx') { '当某个条件时，我想做一些事情。'}
  // // 有一个方法类，我需要获取一点数据
  // someUtil(api.属性) 


};
import { defineConfig } from "umi";
import px2vw from 'postcss-px-to-viewport';
import {routes} from '../routes/index';
import path from 'path';
const pxtorem = require('postcss-pxtorem');
const Config = require('webpack-chain');
const config = new Config();

export default defineConfig({
  routes: routes,
  npmClient: 'npm',
  hash:true,
  targets: {
  ie: 9,
  },
  history:{
    type:'hash' 
  },
  title:'h5',
  define: {
    // 自定义环境变量
    NODE_ENV: process.env.NODE_ENV
  },
  alias: {
    '@': path.resolve(__dirname, 'src'),
    // '@PAGES': path.resolve(__dirname, '../src/pages'),
  },
  // plugins:[
  //   ['umi-plugin-react', {
  //     antd: true,
  //     dva: true,
  //     locale: {
  //       enable: true,
  //     },
  //   }],
  // ],
  // antd:{
  //   mobile:false //如果引入 组件报错样式问题，需要配置这个
  // },
  extraPostCSSPlugins:[
    // px2vw({
    //     unitToConvert: 'px',
    //     viewportWidth: 750,
    //     unitPrecision: 5,
    //     propList: ['*'],
    //     viewportUnit: 'vw',
    //     fontViewportUnit: 'vw',
    //     selectorBlackList: [],
    //     minPixelValue: 1,
    //     mediaQuery: false,
    //     replace: true,
    //     exclude: undefined,
    //     include: undefined,
    //     landscape: false,
    //     landscapeUnit: 'vw',
    //     landscapeWidth: 568
    // }),
    pxtorem({
      rootValue: 100, // 指定转换倍率，我现在设置这个表示1rem=10px;
      propList: ['*'], // 属性列表，表示你要把哪些css属性的px转换成rem，这个*表示所有
      selectorBalckList: ['.am-'], // 匹配不被转换为rem的选择器，例如UI框架antd-mobile
      exclude: /node_modules/i,
    })
  ],
  lessLoader:{

  },
  // locale: {
  //   // 默认使用 src/locales/zh-CN.ts 作为多语言文件
  //   default: 'zh-CN',
  //   baseSeparator: '-',
  // },
  postcssLoader:{

  },
  // chainWebpack(config){
  //   console.log(config.toConfig())
  // },
  // chainWebpack(config:any){
  //   config.module.rule('compile').test(/\.js$/).include
  //     .add('src')
  //     .add('test')
  //     .end()
  //   .use('babel')
  //     .loader('babel-loader')
  //     .options({
  //       presets: [
  //         ['@babel/preset-env', { modules: false }]
  //       ]
  //     });
  // }
  // chainWebpack(config:any){
  //   config.module
  //     .rule('jsx-px2rem-loader')
  //     .test(/\.js$/)
  //       .exclude
  //       .add([path.resolve('../src/pages/.umi'), path.resolve('node_modules')])
  //       .end()
  //     .use('../loader/jsx-px2rem-loader')
  //       .loader(path.join(__dirname, '../loader/jsx-px2rem-loader'));
  // }
  
});

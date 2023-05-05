import path from 'path';
import { defineConfig } from 'umi';
import proxy from '../proxy/index';
import { routes } from '../routes/index';
const pxtorem = require('postcss-pxtorem');
const Config = require('webpack-chain');
const config = new Config();

export default defineConfig({
  routes: routes,
  npmClient: 'npm',
  hash: true,
  targets: {
    ie: 9,
  },
  history: {
    type: 'hash',
  },
  title: 'IMS',
  //  layout: {
  //   title: 'IMS',
  // },
  define: {
    // 自定义环境变量
    NODE_ENV: process.env.NODE_ENV,
  },
  proxy: proxy,
  // locale: {
  //   antd: false, // 如果项目依赖中包含 `antd`，则默认为 true
  //   baseNavigator: true, //开启浏览器语言检测
  //   baseSeparator: '-', //语言（Language）与国家（Country） 之间的分割符
  //   default: 'zh-CN', //项目默认语言
  //   title: false, //开启标题国际化
  //   useLocalStorage: true, //自动使用 localStorage 保存当前使用的语言
  // },
  alias: {
    '@': path.resolve(__dirname, 'src'),
    '@MODELS': path.resolve(__dirname, '../src/models'),
    '@SERVICES': path.resolve(__dirname, '../src/services'),
    '@UTILS': path.resolve(__dirname, '../src/utils'),
    // '@PAGES': path.resolve(__dirname, '../src/pages'),
  },
  autoprefixer: {
    cascade: false,
  },
  // plugins: ["./custom.plugin.ts"] 可在根目录新建custom.plugin.ts文件
  plugins: [
    '@umijs/plugins/dist/locale', // 配置umi/max里的，需要另加
    '@umijs/plugins/dist/initial-state',
    '@umijs/plugins/dist/model',
    // '@umijs/plugins/dist/layout',
    '@umijs/plugins/dist/styled-components',
    // "styled-components-px2rem",
    // "styled-components",
    // "@hsuna/babel-plugin-styled-components-px2rem",
    // [
    //   "@hsuna/babel-plugin-styled-components-px2rem",//styled-components里px转rem
    //   {
    //     "rootValue": 100,
    //     "unitPrecision": 5,
    //     "minPixelValue": 0,
    //     "multiplier": 1,
    //     "transformRuntime": true
    //   }
    // ]
    // ['umi-plugin-react', {
    //   antd: true,
    //   // dva: true,
    //   locale: {
    //     enable: true,
    //   },
    // }],
  ],
  initialState: {},
  model: {}, //配置model
  locale: {
    // 默认使用 src/locales/zh-CN.ts 作为多语言文件
    default: 'zh-CN',
    baseSeparator: '-',
  },
  styledComponents: {
    babelPlugin: {
      plugins: [
        // [
        // "@hsuna/babel-plugin-styled-components-px2rem",//styled-components里px转rem
        // {
        //   "rootValue": 100,
        //   "unitPrecision": 5,
        //   "minPixelValue": 0,
        //   "multiplier": 1,
        //   "transformRuntime": true
        // }
        //   ],
        ['styled-components'],
        [
          'styled-components-px2rem',
          {
            rootValue: 100,
            unitPrecision: 5,
            minPixelValue: 0,
            multiplier: 1,
            transformRuntime: true,
          },
        ],
      ],
    },
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
  extraPostCSSPlugins: [
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
    }),
  ],
  lessLoader: {},
  // locale: {
  //   // 默认使用 src/locales/zh-CN.ts 作为多语言文件
  //   default: 'zh-CN',
  //   baseSeparator: '-',
  // },
  postcssLoader: {},
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
  //  babel
});

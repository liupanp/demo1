import { defineConfig } from "umi";
import px2vw from 'postcss-px-to-viewport';
import {routes} from '../routes/index';
import path from 'path';

export default defineConfig({
  routes: routes,
  npmClient: 'npm',
  hash:true,
  targets: {
  ie: 9,
  },
  title:'h5',
  extraPostCSSPlugins:[
    px2vw({
        unitToConvert: 'px',
        viewportWidth: 750,
        unitPrecision: 5,
        propList: ['*'],
        viewportUnit: 'vw',
        fontViewportUnit: 'vw',
        selectorBlackList: [],
        minPixelValue: 1,
        mediaQuery: false,
        replace: true,
        exclude: undefined,
        include: undefined,
        landscape: false,
        landscapeUnit: 'vw',
        landscapeWidth: 568
    })
  ],
  chainWebpack(config){
    console.log(config.toConfig())
  },
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

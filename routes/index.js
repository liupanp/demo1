export default {
  routes: [
    { path: '/login', component: 'login' },
    {
      path: '/',
      component: '@/layouts/index',
      title:'首页',
      routes: [
        // 需要底部tabbar 的放在tabbar目录下
        { path: "/tabbar/my", component: '@/pages/tabbar/my/index.tsx', title:'我的',},
        { path: "/docs", component: '@/pages/docs/index.tsx', title:'文档'},
        { path: "/upload", component: '@/pages/upload/index.tsx', title:'上传'},
      ],
    }, 
 
  ],
}
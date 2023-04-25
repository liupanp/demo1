export default {
  routes: [
    { path: '/login', component: 'login' },
    {
      path: '/',
      component: '@/layouts/index',
      title:'首页',
      routes: [
        { path: "/my", component: '@/pages/my/index.tsx', title:'我的',},
        { path: "/docs", component: '@/pages/docs/index.tsx', title:'文档'},
        { path: "/upload", component: '@/pages/upload/index.tsx', title:'上传'},
      ],
    }, 
 
  ],
}
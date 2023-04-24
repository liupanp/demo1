export default {
  routes: [
    { path: '/login', component: 'login' },
    {
      path: '/',
      component: '@/layouts/index',
      title:'首页',
      routes: [
        // { path: "/docs", component: 'docs', title:'文档',},
      ],
    }, 
    { path: "/myPage", component: '@/pages/my/index.tsx', title:'我的',},
    { path: "/docs", component: '@/pages/docs/index.tsx', title:'文档'},
  ],
}
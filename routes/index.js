// const Docs = () => import('@/pages/docs/index');

export default {
  routes: [
    { path: '/login', component: 'login' },
    {
      path: '/',
      component: '@/layouts/index',
      title:'首页',
      routes: [
        { path: "/docs", component: 'docs', title:'文档',},
        // { path: '/*', component: '@/pages/404.tsx' }
      ],
    }, 
  ],
}
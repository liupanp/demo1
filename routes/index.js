export default {
  routes: [
    { path: '/login', component: 'login' },
    {
      path: '/',
      component: '@/layouts/index',
      routes: [
        { path: "/docs", component: "docs" },
        { path: '/*', component: '@/pages/404.tsx' }
      ],
    }, 
  ],
}
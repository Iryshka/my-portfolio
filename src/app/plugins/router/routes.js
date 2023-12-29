export default [
  {
    path: '/',
    name: 'desktop',
    component: () => import('@/pages/desktop.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/pages/home.vue')
  }
]

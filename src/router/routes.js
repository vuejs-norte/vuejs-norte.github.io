
const routes = [
  {
    path: '/',
    component: () => import('layouts/BaseLayout.vue'),
    children: [
      { path: '/', redirect: '/inicio' },
      { path: 'inicio', component: () => import('pages/Index.vue') },
      { path: 'comunidade', component: () => import('pages/Comunidade.vue') },
      { path: 'links', component: () => import('pages/Links.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes

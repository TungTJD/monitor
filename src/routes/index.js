import * as  VueRouter from 'vue-router'
const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../login/login.vue')
  },
  {
    path: '/interface',
    name: "Interface",
    component: () => import('../view/interface/index.vue')
  }
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes
})

export default router

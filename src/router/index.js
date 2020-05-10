import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export const router = [
  {
    path: '/',
    name: 'index',
    component: () => import('@/views/index'), // 路由懒加载
    meta: {
      title: '首页', // 页面标题
      keepAlive: false // keep-alive 标识
    }
  },
  {
    path: '/content',
    name: 'content',
    component: () => import('@/views/content'),
    meta: {
      title: '员工详情',
      keepAlive: false
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login'),
    meta: {
      title: '登录',
      keepAlive: false
    }
  },
  {
    path: '/share',
    name: 'share',
    component: () => import('@/views/share'),
    meta: {
      title: '海报',
      keepAlive: false
    }
  }
]

const createRouter = () =>
  new Router({
    mode: 'history', // 如果你是 history模式 需要配置vue.config.js publicPath
    // base: '/app/',
    scrollBehavior: () => ({y: 0}),
    routes: router
  })

export default createRouter()

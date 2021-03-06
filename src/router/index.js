import Vue from 'vue'
import Router from 'vue-router'
import VueRouter from 'vue-router'


const Home = () => import('../views/home/home')
const Category = () => import('../views/category/category')
const Cart = () => import('../views/cart/cart')
const Profile = () => import('../views/profile/profile')



// 1.安装插件
Vue.use(Router)

// 2.创建路由对象
const routes = [
  {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/category',
      component: Category
    }, {
      path: '/cart',
      component: Cart
    }, {
      path: '/profile',
      component: Profile,
    },
]

const router = new VueRouter({
  routes
})

// 3.导出router
export default router

import Vue from 'vue'
import App from './App'
import router from './router'

import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})



// axios发送请求
// axios({
//   url: 'http://123.207.32.32:8000/home/multidata',
//   method: 'GET',
//   params: {
//     page: 1,
//     type: 'pop'
//   }
// }).then(res => {
//   console.log(res)
// })



// axios.defaults.baseURL = 'http://123.207.32.32:8000'
// axios.defaults.timeout = 5000

// axios发送并发请求(两个接口全部请求完成后才执行then)
// axios.all([
//   axios({
//     url: '/home/multidata'
//   }),
//   axios({
//     url: '/home/data',
//     params: {
//       page: 1,
//       type: 'sell'
//     }
//   })
// ]).then(
//   results => {
//     console.log(...results)
//   })


// 封装的requset模块
import {requset} from "./assets/network/request.js";

// requset({
//   url:'/home/'
// })

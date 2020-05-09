import Vue from 'vue'
import axios from 'axios'
import store from '@/store'
import qs from 'qs'
import {Toast,Notify} from 'vant'
// import notification from 'ant-design-vue/es/notification'
// import { VueAxios } from './axios'
import {baseApi} from '@/config'

// 创建 axios 实例
const service = axios.create({
  baseURL: baseApi, // api base_url
  timeout: 6000 // 请求超时时间
})

const err = (error) => {
  if (error.response) {
    const data = error.response.data
    // const token = Vue.ls.get(ACCESS_TOKEN)
    if (error.response.status === 403) {
      // notification.error({
      //   message: 'Forbidden',
      //   description: data.message
      // })
      Notify({ type: 'danger', message: data.message });
    }
    if (error.response.status === 401 && !(data.result && data.result.isLogin)) {
      notification.error({
        message: 'Unauthorized',
        description: 'Authorization verification failed'
      })
      Notify({ type: 'danUnauthorizedger', message: 'Authorization verification failed' });
      // if (token) {
        store.dispatch('FedLogOut').then(() => {
          setTimeout(() => {
            window.location.reload()
          }, 1500)
        })
      // }
    }
  }
  return Promise.reject(error)
}

// request interceptor
service.interceptors.request.use(config => {
  // 不传递默认开启loading
  if (!config.hideloading) {
    // loading
    Toast.loading({
      forbidClick: true
    })
  }
  // if (store.getters.token) {
  //   config.headers['X-Token'] = store.getters.token
  // }
  if (store.getters.token) {
    config.data = Object.assign({ key_token: store.getters.token, admin_id: '21212' }, config.data) // 让每个请求携带自定义 token 请根据实际情况自行修改
  }
  config.data = qs.stringify(config.data)
  return config
},
error => {
  Toast.clear()
  // do something with request error
  console.log(error) // for debug
  return Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  response => {
    Toast.clear()
    const res = response.data
    if (res.status && res.status !== 200) {
      // 登录超时,重新登录
      if (res.status === 401) {
        store.dispatch('FedLogOut').then(() => {
          location.reload()
        })
      }
      return Promise.reject(res || 'error')
    } else {
      return Promise.resolve(res)
    }
  },
  error => {
    Toast.clear()
    console.log('err' + error) // for debug
    return Promise.reject(error)
  }
)

// const installer = {
//   vm: {},
//   install (Vue) {
//     Vue.use(VueAxios, service)
//   }
// }

export default service
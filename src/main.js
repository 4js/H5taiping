// 兼容 IE
// https://github.com/zloirock/core-js/blob/master/docs/2019-03-19-core-js-3-babel-and-a-look-into-the-future.md#babelpolyfill
import 'core-js/stable'
import 'regenerator-runtime/runtime'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入全局样式
import '@/assets/css/index.scss'
// 设置 js中可以访问 $cdn
import {$cdn} from '@/config'
Vue.prototype.$cdn = $cdn

// 全局引入按需引入UI库 vant
import '@/plugins/vant'

// 移动端适配
import 'lib-flexible/flexible.js'

// filters
import './filters'
import {redirectToWxForCode} from '@/utils'
import {getCodeToWxUserInfo, getUserInfo} from '@/api/home'
import isObject from 'lodash/isObject'
Vue.config.productionTip = false

const urlIns = new URL(location.href) // 没有code就要重定向到微信服务器换取code
const wxCode = urlIns.searchParams.get('code')
if (!wxCode) {
  redirectToWxForCode()
} else {
  getCodeToWxUserInfo({
    code: wxCode
  }).then(res => {
    if (res.code === 1) {
      store.commit('SET_wxUserInfo', res.data)

      // 判断是否已绑定
      getUserInfo({
        user_id: store.state.app.wxUserInfo.openid
      }).then(res => {
        if (isObject(res.data) && !Array.isArray(res.data)) {
          // 已绑定
        } else if (router.currentRoute.name !== 'login') {
          // 未绑定
          router.replace('/login')
        }
      })
    } else {
      // 异常报错就需要再次去换取code
      location.href = location.origin
    }
  })
}
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

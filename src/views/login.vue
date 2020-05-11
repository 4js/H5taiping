<template>
  <!--pages/login/login.wxml-->
  <div class="container login-container">
    <div class="tips">您还未绑定工号，请填写员工信息</div>
    <div class="login-wrapper">
      <van-field v-model="username" clearable label="工号" placeholder="请输入您的工号" />
      <van-field v-model="phone" clearable label="手机号" placeholder="请输入您的手机号" />
      <van-field
        v-model="area"
        readonly
        right-icon="arrow-down"
        label="区域"
        @click="showArea"
        placeholder="请选择区域"
      />
      <div class="login-top-box"></div>
      <van-button round class="btn-login" type="primary" block @click="toLogin">登录</van-button>
    </div>
    <div class="img-logo">
      <img src="../assets/logo.png" mode="widthFix" />
    </div>
    <van-popup v-model="show" position="bottom" :style="{height: '30%'}">
      <van-picker show-toolbar :columns="columns" @confirm="handleConfirm" @cancel="handleCancel" />
    </van-popup>
  </div>
</template>
<script>
import {redirectToWxForCode} from '@/utils'

function zhuanArea(arr) {
  return arr.map(item => {
    item.text = item.area_name
    if (item.child) item.children = zhuanArea(item.child)
    return item
  })
}
import {getAreaList, login} from '@/api/home'
import {Toast} from 'vant'
import Wx from 'weixin-js-sdk'
export default {
  name: 'login',
  data() {
    return {
      username: '',
      phone: '',
      area: '',
      area_id: '',
      show: false,
      columns: []
    }
  },
  created() {
    getAreaList().then(res => {
      console.log(res)
      this.columns = zhuanArea(res.data)
    })
  },
  methods: {
    showArea() {
      this.show = true
    },
    handleConfirm(picker, value) {
      let city = this.columns[value[0]]
      for (let i = 1; i < value.length; i++) {
        city = city.child[value[i]]
      }
      this.area_id = city.id
      this.area = picker.join('/')
      this.show = false
    },
    handleCancel() {
      this.show = false
    },
    toLogin() {
      const {username, phone, area_id} = this

      const {openid} = this.$store.state.app.wxUserInfo

      if (!openid) {
        Toast.fail('未获取到微信信息，请重新登录')
        setTimeout(redirectToWxForCode, 2000)
        return
      }

      if (!username || !phone || !area_id) {
        // 信息不完整
        Toast.fail('信息不完整，请检查')
        return
      }
      login({
        job_number: username,
        tel: phone,
        area_id,
        openid
      }).then(res => {
        if (res.code === 1) {
          Toast.success('绑定成功')
          this.$router.replace('/')
        } else {
          Toast.fail(res.message)
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
/* pages/login/login.wxss */
.login-container {
  width: 100vw;
  height: 100vh;
  padding: 100px 0;
  background: url('../assets/login-bg.png') top center;
  background-size: 100%;
  background-repeat: no-repeat;
}
.img-login-bg {
  width: 100%;
}
.tips {
  text-align: center;
  color: #fff;
  font-size: 16px;
}
.img-logo {
  width: 100%;
  position: fixed;
  bottom: 60px;
  text-align: center;
  img {
    width: 130px;
  }
}
.login-wrapper {
  width: 240px;
  height: 220px;
  margin: 40px auto 0;
  padding: 30px;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0px 5px 25px 5px rgba(85, 85, 85, 0.1);
}
.login-top-box {
  height: 50px;
}
</style>

<!-- home -->
<template>
  <!--index.wxml-->
  <div class="container main-container">
    <div class="main-top">
      <div class="user-box">
        <img class="avater" src="../assets/avater.png" mode="widthFix"/>
        <span>小杨</span>
      </div>
      <div class="right-nav">
        <router-link to="/share"><van-button round type="primary" size="small">我的海报</van-button></router-link>
      </div>
      <div class="bt-nav">
        <div class="nav-item left">
          <div class="tit">总用户数</div>
          <div class="con">66723</div>
        </div>
        <div class="nav-item right">
          <div class="tit">用户总抽奖数</div>
          <div class="con">2637623</div>
        </div>
      </div>
    </div>
    <van-tabs animated>
      <van-tab title="一级用户（23）">
        <van-search
          v-model="value"
          shape="round"
          background="#ccc"
          placeholder="请输入搜索关键词"
        />
        <router-link to="/content" v-for="(item,index) in 10" :key="index" class="people-item">
          <div class="prize">
            <img class="people-img" src="../assets/avater.png" mode="widthFix"/>
            <span class="prize-text">我是小杨{{index}}</span>
          </div>
          <div class="city">1352268553<span>(23)</span></div>
          <div class="step"><van-icon name="arrow" /></div>
        </router-link>
      </van-tab>
      <van-tab title="二级用户（1272）">
        <van-search
          v-model="value"
          shape="round"
          background="#ccc"
          placeholder="请输入搜索关键词"
        />
        <router-link to="/content" v-for="(item,index) in 10" :key="index" class="people-item">
          <div class="prize">
            <img class="people-img" src="../assets/avater.png" mode="widthFix"/>
            <span class="prize-text">我是小杨{{index}}</span>
          </div>
          <div class="city">1352268553</div>
          <div class="step"><van-icon name="arrow" /></div>
        </router-link>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        'Vue-cli4',
        '配置多环境变量',
        'VantUI 组件按需加载',
        'Sass 全局样式',
        'Webpack 4',
        'Vuex 状态管理',
        'Axios 封装及接口管理',
        'Vue-router',
        'Webpack 4 vue.config.js 基础配置',
        '配置 proxy 跨域',
        '配置 alias 别名',
        '配置 打包分析',
        '配置 externals 引入 cdn 资源',
        '去掉 console.log',
        'splitChunks 单独打包第三方模块',
        '添加 IE 兼容',
        'Eslint+Pettier 统一开发规范'

      ]
    }
  },

  computed: {
  },

  mounted() {
  },

  methods: {}
}
</script>
<style lang="scss" scoped>
.main-container{
  width: 100vw;
  background: url('../assets/my-bg.png') top center;
  background-size: 100%;
  background-repeat: no-repeat;
}
.main-top{
  width: 100%;
  height: 210px;
  position: relative;
  overflow: hidden;
}
.user-box{
  display: flex;
  position: absolute;
  top: 30px;
  left: 30px;
  font-size: 16px;
  line-height: 40px;
  color: #fff;
}

.user-box .avater{
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin-right: 15px;
}

.right-nav{
  position: absolute;
  width: 70px;
  height: 30px;
  top: 40px;
  right: -5px;
}

.bt-nav{
  width: 350px;
  height: 90px;
  position: absolute;
  bottom: 20px;
  left: 13px;
  display: flex;
  justify-content: space-between;
}
.bt-nav .nav-item{
  width: 170px;
  padding: 20px;
  font-size: 16px;
  line-height: 30px;
  &.left{
    background: url('../assets/in-left.png') top center no-repeat;
    background-size: 100%;
    .tit{
      color: pink;
    }
  }
  &.right{
    background: url('../assets/in-right.png') top center no-repeat;
    background-size: 100%;
    .tit{
      color: blueviolet;
    }
  }
}

.people-item{
  display: block;
  line-height: 60px;
  font-size: 14px;
  color: #333;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  border-bottom: 1px solid #ccc;
}

.people-item .prize{
  width: 60%;
  height: 60px;
  display: flex;
  align-items: center;
  padding-left: 30px;
}
.people-item .people-img{
  width: 30px;
  height: 30px;
  border-radius: 15px;
  margin-right: 30px;
}
.people-item .prize-text{
  display: inline-block;
  text-align: center;
  color: #333;
}
.people-item .city{
  width: 30%;
}
.people-item .step{
  width: 10%;
  padding-right: 30px;
  text-align: right;
  font-size: 18px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

</style>

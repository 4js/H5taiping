<!-- home -->
<template>
  <!--index.wxml-->
  <div class="container main-container">
    <div class="main-top">
      <div class="user-box">
        <img class="avater" src="../assets/avater.png" mode="widthFix"/>
        <span>小杨(Fraser)</span>
      </div>
      <div class="right-nav">
        <van-button round type="primary" size="small">2020-03-04 13:09:04 加入</van-button>
      </div>
      <div class="bt-nav">
        <div class="nav-item left">
          <div class="tit">累计打卡天数</div>
          <div class="con">723</div>
        </div>
        <div class="nav-item right">
          <div class="tit">总抽奖数/中奖次数</div>
          <div class="con">2637623/65232</div>
        </div>
      </div>
    </div>
    <div>
        <div style="background-color: #fff;"><div class="nav-title">中奖信息</div></div>
        <div v-for="(item,index) in 9" :key="index" class="people-item">
            <div class="prize">2020-05-0{{index}}</div>
            <div class="city">15:20:20</div>
            <div class="step">西藏藏红花茶一袋100g</div>
        </div>
    </div>
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
  height: 220px;
  overflow: hidden;
  position: relative;
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
  width: 160px;
  height: 30px;
  display: flex;
  flex-wrap: wrap;
  align-items: space-between;
  top: 40px;
  right: -12px;
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
  line-height: 50px;
  font-size: 12px;
  color: #333;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  border-bottom: 1px solid #ccc;
}

.people-item .prize{
  width: 80px;
  height: 50px;
  padding-left: 15px;
}
.people-item .city{
  width: 80px;
}
.people-item .step{
  width: 210px;
  padding-right: 15px;
}

.nav-title{
    width: 100vw;
    height: 50px;
    line-height: 50px;
    font-size: 16px;
    color: #333;
    background: url('../assets/nav-bg.png') center center no-repeat;
    background-size: 180px;
    text-align: center;
    border-bottom: 1px solid #ccc;
}

</style>

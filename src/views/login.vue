<template>
    <!--pages/login/login.wxml-->
    <div class="container login-container">
        <div class="tips">您还未绑定工号，请填写员工信息</div>
        <div class="login-wrapper">
            <van-field
                value="username"
                clearable
                label="工号"
                placeholder="请输入您的工号"
            />
            <van-field
                value="phone"
                clearable
                label="手机号"
                placeholder="请输入您的手机号"
            />
            <van-field
                value="area"
                clearable
                right-icon="arrow-down"
                label="区域"
                placeholder="请选择区域"
            />
            <div class="login-top-box"></div>
            <van-button round class="btn-login" type="primary" block>登录</van-button>
        </div>
        <div class="img-logo">
            <img src="../assets/logo.png" mode="widthFix"/>
        </div>
    </div>
</template>
<script>
import { getAreaList } from '@/api/home'
import Wx from 'weixin-js-sdk';
export default {
    name: 'login',
    created(){
        getAreaList().then(res => {
            console.log(res)
        })
        wx
    }
}
</script>
<style lang="scss" scoped>
/* pages/login/login.wxss */
.login-container{
    width: 100vw;
    height: 100vh;
    padding: 100px 0;
    background: url('../assets/login-bg.png') top center;
    background-size: 100%;
    background-repeat: no-repeat;
}
.img-login-bg{
    width: 100%;
}
.tips{
    text-align: center;
    color: #fff;
    font-size: 16px;
}
.img-logo{
    width: 100%;
    position: fixed;
    bottom: 60px;
    text-align: center;
    img{
        width: 130px;
    }
}
.login-wrapper{
    width: 240px;
    height: 180px;
    margin: 40px auto 0;
    padding: 30px;
    background-color: #fff;
    border-radius: 6px;
    box-shadow: 0px 5px 25px 5px rgba(85, 85, 85, 0.10);
}
.login-top-box{
    height: 50px;
}
</style>
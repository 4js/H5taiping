<!--pages/share/share.wxml-->
<template>
    <div class="container share-container">
        <div class="qr-code">
            <div>
                <img class="qr-img" src="../assets/qrcode.png" />
            </div>
            <div class="qr-text">扫一扫赢取大奖</div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'login'
}
</script>
<style lang="scss" scoped>
/* pages/login/login.wxss */
/* pages/share/share.wxss */
.share-container{
    width: 100vw;
    height: 100vh;
    position: relative;
    overflow: hidden;
    background: url('../assets/share.png') top center no-repeat;
    background-size: 100%;
}
.img-bg{
    width: 100%;
}
.qr-code{
    width: 90px;
    position: absolute;
    bottom: 50px;
    right: 30px;
}
.qr-code .qr-img{
    width: 100%;
}
.qr-code .qr-text{
    font-size: 12px;
    line-height: 20px;
    text-align: center;
    color: #fff;
}
</style>
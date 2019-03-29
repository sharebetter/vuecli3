<template>
    <div class="bottom-bar">
        <div class="online-contact">
            <img class="icon-contact" :src="require('@pic/home/icon-contact.png')" alt="contact">
            <p>在线咨询</p>
        </div>
        <div class="sign-up">立即报名</div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.bottom-bar{
    position: fixed;
    bottom: 0;
    height: 100px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid #dce1e4;
    .online-contact{
        flex: 1;
        height: 100%;
        text-align: center;
        background-color: white;
        .icon-contact{
            margin-top: 5px;
            width: 52px;
            height: 52px;
        }
    }
    .sign-up{
        flex: 3;
        height: 100%;
        background-color: #ff5d50;
        color: white;
        font-size: 34px;
        font-weight: bold;
        text-align: center;
        line-height: 100px;
    }
}
</style>
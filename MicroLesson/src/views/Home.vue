<template>
  <div class="home">
    <MySwiper :swiperList="swiperList"  />
    <TabBar />
    <keep-alive>
      <router-view class="router" v-transition v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view class="router" v-transition v-if="!$route.meta.keepAlive"></router-view>
    <BtmBar />
  </div>
</template>

<script>
// 轮播组件
import MySwiper from '@/components/common/MySwiper.vue'
// tab选项栏
import TabBar from '@/components/home/TabBar.vue'
// 底部栏
import BtmBar from '@/components/home/BtmBar.vue'
export default {
    name: 'home',
    data () {
        return {
            swiperList: [
                {imgUrl: 'https://uploadimg.koolearn.com/upload/2019-03-26/51b0608d2fb9a8270545eeaba75126bf.jpg'},
                {imgUrl: 'https://uploadimg.koolearn.com/upload/2019-03-26/828539bd3d3995abc72c330fe4706344.jpg'},
                {imgUrl: 'https://uploadimg.koolearn.com/upload/2019-03-26/51b0608d2fb9a8270545eeaba75126bf.jpg'}
            ]
        }
    },
    created () {

    },
    mounted () {
        document.title = '微课'
    },
    methods: {

    },
    components: {
        MySwiper,
        TabBar,
        BtmBar
    }
}
</script>
<style lang="scss" scoped>
.home{
    font-family: "Helvetica Neue",Helvetica,STHeiTi,Arial,sans-serif;
    width:750px;
    .router {
        background:white;
    }
}
</style>


<template>
    <div class="container">
        <swiper :options="swiperOption" ref="mySwipers" class="my-swiper" v-if="swiperList.length > 0">
            <swiper-slide class="swiper-slide" v-for="(item, index) in swiperList" :key="index">
                <img class="swiper-img" :src="item.imgUrl" alt="Swiper">
            </swiper-slide>
        </swiper>
        <!-- 分页 -->
        <!-- <div class="swiper-pagination"></div> -->
    </div>

</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
    name: 'MySwiper',
    props: {
        swiperList: {
            type: Array,
            required: true
        }
    },
    data () {
        return {
            // 轮播配置
            swiperOption: {
                notNextTick: true,
                loop: true,
                autoplay: {
                    delay: 3000,
                    // 操作swiper之后，是否停止切换
                    disableOnInteraction: false
                },
                // 显示的页数
                slidesPerView: 1,
                // 分页
                pagination: {
                    el: '.swiper-pagination',
                    type: 'bullets'
                }
            }
        }
    },
    computed: {
        swiper () {
            return this.$refs.mySwipers.swiper
        },
        cardList () {
            return this.myCards
        }

    },
    components: {
        swiper,
        swiperSlide
    }
}
</script>

<style lang="scss">

.container{
    position: relative;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    width: 750px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    .my-swiper{
        height: 450px;
        flex: 1;
        .swiper-img {
            width: 100%;
            height: 100%;
        }
    }
    .swiper-pagination {
        flex: 1;
        position: absolute;
        bottom: 15px;
        .swiper-pagination-bullet {
            width: 10px;
            height: 10px;
            margin: 0 5px;
            background-color: white;
        }
        .swiper-pagination-bullet-active {
            background-color: blue;
        }
    }
}
</style>

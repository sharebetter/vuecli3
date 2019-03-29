<template>
    <ul class="lession-wrap" v-if="lessionArr.length>0">
        <li class="lession-item-wrap" v-for="(item,index) in lessions" :key="index">
            <div class="list-title" :class="{'list-title-selected': item.show}" @click="changeStatus(item,index)">{{item.lessionName}}</div>
            <div class="list-content" :class="{'info-show': item.show}">
                <p class="list-content-info">直播时间：{{item.lessionTime}}</p>
                <p class="list-content-info">主讲老师：{{item.lessionTeacher}}</p>
            </div>
        </li>
    </ul>
</template>

<script>
export default {
    props: {
        lessions: {
            type: Array,
            required: true
        }
    },
    data () {
        return {
            lessionArr: this.lessions
        }
    },
    methods: {
        changeStatus (item) {
            this.$set(item, 'show', !item.show)
        }
    }

}
</script>

<style lang="scss" scoped>
.lession-wrap{
    width: 750px;
    padding: 10px 30px 99px 30px;
    .lession-item-wrap{
        width: 100%;
        text-align: left;
        margin-top: 8px;
        .list-title{
            padding: 18px 0;
            border-bottom: 1px solid #dce1e4;
            font-weight: bold;
            &::before{
                font-family: Georgia,tahoma;
                content:'+';
                width: 30px;
                height: 30px;
                border: 1px solid #575757;
                border-radius: 50%;
                color: #575757;
                vertical-align: middle;
                text-align: center;
                display: inline-block;
                line-height: 28px;
                margin-top: -3px;
            }
        }
        .list-title-selected{
            color:#37b3aa;
            &::before{
                content:'-';
                border: 1px solid #37b3aa;
                color: #37b3aa;
            }
        }
        .list-content{
            text-align: left;
            padding: 20px 0 20px 50px;
            color: #828282;
            border-bottom: 1px solid #dce1e4;
            font-size: 28px;
            display: none;
            .list-content-info{
                line-height: 41px;
            }
        }
        .info-show{
            display: block;
        }
    }
}
</style>
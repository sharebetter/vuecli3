<template>
    <ul class="teacher-wrap" v-if="teachersInfo.length>0">
        <li class="teacher-item-wrap" v-for="(item,index) in teachersInfo" :key="index">
            <div class="teacher-avator">
                <!-- <img class="avator" src="" alt="avator"> -->
                <div class="avator">{{item.avator}}</div>
            </div>
            <div class="teacher-info">
                <p class="teacher-name">{{item.name}}</p>
                <p class="teacher-detail">{{item.detail}}</p>
            </div>
        </li>
    </ul>
</template>

<script>
export default {
    data () {
        return {
            teachersInfo: [
                {
                    avator: '',
                    name: '程黛苑',
                    detail: '北京新东方优秀教师，GRE填空主讲，教龄4年，累计参加GRE考试14场，Verbal多次夺得164及以上成绩。教学具有完整严密的体系，授课内容丰富充实，在教师队伍中以辅导学员短期单科提分著称。'
                },
                {
                    avator: '',
                    name: '程黛苑',
                    detail: '北京新东方优秀教师，GRE填空主讲，教龄4年，累计参加GRE考试14场，Verbal多次夺得164及以上成绩。教学具有完整严密的体系，授课内容丰富充实，在教师队伍中以辅导学员短期单科提分著称。'
                },
                {
                    avator: '',
                    name: '程黛苑',
                    detail: '北京新东方优秀教师，GRE填空主讲，教龄4年，累计参加GRE考试14场，Verbal多次夺得164及以上成绩。教学具有完整严密的体系，授课内容丰富充实，在教师队伍中以辅导学员短期单科提分著称。'
                },
                {
                    avator: '',
                    name: '程黛苑',
                    detail: '北京新东方优秀教师，GRE填空主讲，教龄4年，累计参加GRE考试14场，Verbal多次夺得164及以上成绩。教学具有完整严密的体系，授课内容丰富充实，在教师队伍中以辅导学员短期单科提分著称。'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.teacher-wrap{
    width: 750px;
    padding-bottom: 99px;
    .teacher-item-wrap{
        width: 100%;
        display: flex;
        border-bottom: 1px solid #dce1e4;
        padding: 40px 30px;
        .teacher-avator{
            flex: 1;
            text-align: center;
            vertical-align: middle;
            .avator{
                width: 180px;
                height: 180px;
                border-radius: 50% 50%;
                background-color: yellow;
            }
        }
        .teacher-info{
            flex: 2;
            .teacher-name{
                font-weight: bold;
                font-size: 34px;
            }
            .teacher-detail{
                font-size: 26px;
                color: #828282;
                line-height: 34px;
                margin-top: 16px;
            }
        }
    }

}
</style>
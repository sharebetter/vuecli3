<template>
    <div class="tab-bar">
        <ul class="tab" v-if="tabList.length > 0">
            <li class="tab-list ft-34"
                v-for="(item,index) in tabList" :key="index"
                @click="changeActiveTab(index)"
            >
                {{item.tabName}}
            </li>
        </ul>
        <div class="tab-line"></div>
        <div class="tab-green-line"
            :class="{'tab-mid': activeTab === 1,'tab-right': activeTab === 2 }"
        ></div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            tabList: [
                {tabName: '课程详情'},
                {tabName: '课程大纲'},
                {tabName: '名师简介'}
            ],
            activeTab: 0
        }
    },
    created () {
        let path = location.href
        if (path.includes('Home')) {
            this.activeTab = 0
        } else if (path.includes('Introduction')) {
            this.activeTab = 1
        } else if (path.includes('/Syllabus')) {
            this.activeTab = 2
        }
    },
    methods: {
        changeActiveTab (activeTab) {
            this.activeTab = activeTab
            switch (activeTab) {
            case 0:
                this.$router.replace('/Home')
                break
            case 1:
                this.$router.replace('/Introduction')
                break
            case 2:
                this.$router.replace('/Syllabus')
                break
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.tab-bar{
    position: relative;
    width: 750px;
    height: 100px;
    .tab{
        width: 100%;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        .tab-list{
            flex: 1;
            height: 100%;
            list-style: none;
            text-align: center;
            line-height: 100px;
            border-right: 1px solid #dce1e4;
            color: #585858;
        }
        .tab-list:last-child{
            border-right: none;
        }
    }
    .tab-line{
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 1px;
        background-color: #dce1e4;
    }
    .tab-green-line{
        position: absolute;
        width: 33.33%;
        height: 1px;
        background-color: #37B3A9;
        bottom: 0;
    }
    .tab-mid{
        left: 33.33%;
    }
    .tab-right{
        left: 66.66%;
    }
}
</style>
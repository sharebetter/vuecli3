<template>
    <div>
        <LessionList :lessions="lessions"/>
    </div>
</template>

<script>
import LessionList from './components/LessionList';
export default {
    data () {
        return {
            lessions: [
                {
                    lessionName: '【4月公益课】GRE小白的快速入门-潘晨光',
                    lessionTime: '2019-04-04 20:00-21:00',
                    lessionTeacher: '潘晨光'
                },
                {
                    lessionName: '【4月公益课】GRE小白的快速入门-潘晨光',
                    lessionTime: '2019-04-04 20:00-21:00',
                    lessionTeacher: '潘晨光'
                },
                {
                    lessionName: '【4月公益课】GRE小白的快速入门-潘晨光',
                    lessionTime: '2019-04-04 20:00-21:00',
                    lessionTeacher: '潘晨光'
                },
                {
                    lessionName: '【4月公益课】GRE小白的快速入门-潘晨光',
                    lessionTime: '2019-04-04 20:00-21:00',
                    lessionTeacher: '潘晨光'
                },
                {
                    lessionName: '【4月公益课】GRE小白的快速入门-潘晨光',
                    lessionTime: '2019-04-04 20:00-21:00',
                    lessionTeacher: '潘晨光'
                },
                {
                    lessionName: '【4月公益课】GRE小白的快速入门-潘晨光',
                    lessionTime: '2019-04-04 20:00-21:00',
                    lessionTeacher: '潘晨光'
                }
            ]
        }
    },
    components: {
        LessionList
    }
}
</script>

<style scoped>

</style>
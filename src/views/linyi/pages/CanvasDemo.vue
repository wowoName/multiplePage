<template>
    <div class='canvas-main'>
        <template v-for="item in apps">
            <component :is="item.tem" :key="item.key"></component>
        </template>
        <div class="line"></div>
        <div class="charts">
            <template v-for="item in names">
                <loader :templateName="item.name" :key="item.name" :ref="item.refName"></loader>
            </template>
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
import Loader from '@/components/Template'
import Person from '@/utils/PersonClass'
// 动态引入组件
export default {
    components: { Loader },
    data() {
        return {
            animail: {},
            apps: {},
            show: "target",//控制组件显示
            names: [{
                name: "Major",
                refName: "target"
            }, {
                name: 'PieEcharts',
                refName: "event"
            }],
            data: [{
                name: "第一个",
                id: "1",
                refName: "event"
            }, {
                name: "第一个",
                id: "2",
                refName: "target"
            }, {
                name: "第一个",
                id: "3",
                refName: "event"
            }],
            child: "Activated"
        };
    },
    computed: {},
    watch: {},
    methods: {
        getData(data) {
            this.show = data.refName
        }
    },
    created() { },
    beforeMount() {
        for (let i = 0, l = this.names.length; i < l; i++) {
            this.apps[this.names[i].name] = {
                tem: () => import('@/components/' + this.names[i].name + '.vue'),
                key: i
            }
        }
    },
    mounted() {
        let xm = new Person('小明')
        xm.sayHello()
    },
}
</script>
<style lang='scss' scoped>
.canvas-main {
    height: 100%;
    .charts {
        width: 500px;
        height: 300px;
        border: 1px dashed #000000;
        margin: 0 auto;
    }
    .line {
        height: 30px;
        width: 100%;
        background-color: #ececec;
    }
}
</style>
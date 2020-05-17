<template>
    <div class=''>
        <splitpanes style="height: 400px" class="default-class">
            <pane min-size="20">
                <span>1</span>
            </pane>
            <pane>
                <splitpanes horizontal>
                    <pane>
                        <span>2</span>
                    </pane>
                    <pane>
                        <span>3</span>
                    </pane>
                    <pane>
                        <span>4</span>
                    </pane>
                </splitpanes>
            </pane>
            <pane>
                <span>5</span>
            </pane>
        </splitpanes>

        <div class="charts">
            <pie-echarts />
        </div>

        <div>临沂~~~</div>
        <div class="shopList">
            <ul>
                <li v-for="item in shopList" :key="item.id">
                    {{item.name}}
                </li>
            </ul>
            <input type="button" value="说句话" @click="setName(+ new Date)">
            <input type="button" value="信息" @click="setMsg()">
            <div>
                信息：{{msg}}
            </div>
            <div> type:{{type}}</div>
            <span>{{$store.state.name}}</span>
        </div>

        <hello-world :type="type" :arrtMsg="msg" @myClick='setChildMsg' @myType="setType">
            <template slot="footer" slot-scope="scoped">
                这里的东西呢： {{ scoped.type }}--{{scoped.myName}}
            </template>
        </hello-world>

    </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld'
import getUserInfos from '@/api/linyi'

import say from '@/utils/common'
import { Splitpanes, Pane } from 'splitpanes'
import 'splitpanes/dist/splitpanes.css'

import PieEcharts from '@/components/PieEcharts'
import {
    mapMutations
} from 'vuex'
export default {
    components: { HelloWorld, Splitpanes, Pane, PieEcharts },
    provide() {
        return {
            setType: this.setType
        }
    },
    data() {
        return {

            shopList: [],
            msg: "默认信息",
            type: "type"
        };
    },
    computed: {

    },
    watch: {},
    methods: {
        ...mapMutations(['setName']),
        sayHello({ msg = "dddddd", name = 'mm', ...arg }) {
            console.log(msg)
        },
        setMsg() {
            this.msg = + new Date() + ""
        },
        setType(data) {
            this.type = data
        },
        setChildMsg(data) {
            console.log(data)
            this.msg = data
        }
    },
    created() {

    },
    async mounted() {
        let data = await getUserInfos()
        this.shopList = data.data
        this.sayHello({ msg: "ddd", name: "GG", age: 10 })

    }
}
</script>
<style lang='scss' scoped>
/deep/ .splitpanes--vertical > .splitpanes__splitter {
    width: 6px;
    background-color: #ececec;
}
/deep/ .splitpanes--horizontal > .splitpanes__splitter {
    height: 6px;
    background-color: #ececec;
}
.splitpanes__pane {
    justify-content: center;
    align-items: center;
    display: flex;
}

.splitpanes__pane span {
    font-family: Helvetica, Arial, sans-serif;
    color: #ececec;
    font-size: 5em;
    opacity: 0.6;
}
.charts {
    height: 300px;
    width: 100%;
}
.shopList {
    margin: 20px 0;
    padding: 10px 20px;
    box-sizing: border-box;
    background-color: #00bcd4;
    li {
        margin-bottom: 10px;
        border-radius: 5px;
        padding: 6px 10px;
        box-sizing: border-box;
        list-style: none;
        background-color: #ffffff;
    }
}
</style>
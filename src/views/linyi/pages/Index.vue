<template>
    <div class=''>
        <div>临沂~~~</div>
        <div class="shopList">
            <ul>
                <li v-for="item in shopList" :key="item.id">
                    {{item.name}}
                </li>
            </ul>
            <input type="button" value="说句话" @click="setName(+ new Date)">
            <span>{{$store.state.name}}</span>
        </div>
        <hello-world></hello-world>
    </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld'
import getUserInfos from '@/api/linyi'

import say from '@/utils/common'
import {
    mapMutations
} from 'vuex'
export default {
    components: { HelloWorld },
    data() {
        return {
            shopList: []
        };
    },
    computed: {},
    watch: {},
    methods: {
        ...mapMutations(['setName']),
        sayHello({ msg = "dddddd", name = 'mm', ...arg }) {
            console.log(msg)
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
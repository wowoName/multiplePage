<template>
    <div class=''>
        <div>临沂~~~</div>
        <div class="shopList">
            <ul>
                <li v-for="item in shopList" :key="item.id">
                    {{item.name}}
                </li>
            </ul>
        </div>
        <hello-world></hello-world>
    </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld'
import getUserInfos from '@/api/linyi'
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

    },
    created() {

    },
    async mounted() {
        let data = await getUserInfos()
        console.log(data)
        this.shopList = data.data

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
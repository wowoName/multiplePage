<template>
    <div class=''>
        <div>grandChild</div>
        type:{{type}}
        {{$attrs.type}}
        <input type="button" value="修改" @click="setType()">
        <GrandChildC v-bind="$attrs" v-on="$listeners" />
    </div>
</template>

<script>
import GrandChildC from '@/components/GrandChildC'
export default {
    components: { GrandChildC },
    data() {
        return {

        };
    },
    computed: {
        type() {
            return this.$attrs.type
        }
    },
    watch: {},
    methods: {
        setType() {
            this.$emit('myType', +new Date())
        }
    },
    created() {

    },
    mounted() {

    },
    beforeCreate() { }, //生命周期 - 创建之前
    beforeMount() { }, //生命周期 - 挂载之前
    beforeUpdate() { }, //生命周期 - 更新之前
    updated() { }, //生命周期 - 更新之后
    beforeDestroy() { }, //生命周期 - 销毁之前
    destroyed() { }, //生命周期 - 销毁完成
    activated() { }, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang='scss' scoped>
</style>
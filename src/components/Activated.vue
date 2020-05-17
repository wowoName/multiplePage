<template>
    <div class=''>
        <div v-for="item in data" :key="item.id" @click="emitData(item)">{{item.name}}</div>
    </div>
</template>

<script>


export default {
    components: {},
    props: {
        data: {
            type: Array,
            default: () => {
                return []
            }
        }
    },
    data() {
        return {

        };
    },
    computed: {},
    watch: {},
    methods: {
        emitData(data) {
            this.$emit('click', data)
        }
    },
    created() {

    },
    mounted() {

    },
}
</script>
<style lang='scss' scoped>
</style>
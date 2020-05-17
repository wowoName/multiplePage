<template>
    <component :is="component"></component>
</template>

<script>

export default {
    components: {},
    props: {
        templateName: String
    },
    data() {
        return {
            component: {}
        };
    },
    computed: {},
    watch: {},
    methods: {

    },
    created() {
        this.component = () => import('@/components/' + this.templateName + '.vue')
    },
    mounted() {

    },
}
</script>
<style lang='scss' scoped>
</style>
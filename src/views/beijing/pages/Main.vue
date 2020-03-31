<template>
    <div class=''>
        main
        <HelloWorld />
    </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld'
import getUserInfos from '@/api/index'
export default {
    components: { HelloWorld },
    data() {
        return {

        };
    },
    computed: {},
    watch: {},
    methods: {

    },
    created() {

    },
    async mounted() {
        let a = await getUserInfos()
        console.log(a)
    }
}
</script>
<style lang='scss' scoped>
</style>
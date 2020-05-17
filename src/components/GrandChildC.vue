<template>
    <div class='grand-main'>
        <div>grandChildC</div>
        {{$attrs.type}}-- {{$attrs.arrtMsg}}
        <input type="button" value="type" @click="setType()" />
    </div>
</template>

<script>

export default {
    components: {},
    data() {
        return {

        };
    },
    computed: {},
    watch: {},
    methods: {
        setType() {
            this.$emit('myType', 'ddddd')
        }
    },
    created() {

    },
    mounted() {

    },
}
</script>
<style lang='scss' scoped>
.grand-main {
    padding: 30px 20px;
    box-sizing: border-box;
    background-color: #ececec;
}
</style>
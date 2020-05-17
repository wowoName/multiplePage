<template>
    <div class="hello">
        hello world！
        <span>{{type}}</span>
        <div>{{arrtMsg}}</div>
        <input type="button" value="修改" @click="setMsg()">
        <hr>
        <GrandChild v-bind="$attrs" v-on="$listeners" />
        <div>这是header</div>
        <slot name='header'></slot>
        <div>这是footer</div>
        <slot name='footer' :type="type" myName='我的名字'></slot>
    </div>
</template>

<script>
import GrandChild from '@/components/GrandChild'
export default {
    name: 'HelloWorld',
    inject: ['setType'],
    props: {
        msg: String
    },
    data() {
        return {
            slotObj: {
                name: "哈哈哈"
            },
        }
    },
    components: { GrandChild },
    computed: {
        type() {
            return this.$attrs.type + "--slot-scoped"
        },
        arrtMsg() {
            return this.$attrs.arrtMsg
        }
    },
    mounted() {
        console.log('~~~~~~~~~~~~~~~~~')
        console.log(this.$attrs)
    },
    methods: {
        setMsg() {
            this.setType(+new Date())
            //this.$emit('myClick', +new Date())
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello {
    padding: 30px 20px;
    box-sizing: border-box;
    background-color: rgba(0, 0, 0, 0.5);
}
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>

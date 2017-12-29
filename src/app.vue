<template>
    <div id="app">
        this is vue page
        <button @click="go('/pageA', 'index')">page1</button>
        <button @click="go('/pageA', 'num1')">page1-num1</button>
        <button @click="go('/pageA', 'num2')">page1-num2</button>
        <button @click="go('/pageA', 'num3')">page1-num3</button>
        <button @click="go('/pageA', 'num4')">page1-num4</button>
        <button @click="go('/pageB')">page2</button>
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        data() {
            return {

            }
        },
        methods: {
            go(path, id) {
                console.log(id)
                if (id) {
                    this.$router.push({
                        path: `${path}/${id}`
                    })
                } else {
                    this.$router.push({
                        path:path
                    })
                }

            }
        }
    }
</script>
<style scoped lang="stylus">

</style>
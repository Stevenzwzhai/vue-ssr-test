<template>
    <div class="page2">
        this page's name is page2
        say:{{talk}}
    </div>
</template>
<script>
    export default {
        name: 'page2',
        data() {
            return {
                talk: 'hello vue-ssr'
            }
        }
    }
</script>
<style lang="stylus" scoped>
    .page2 {
        background-color red
        font-size 18px
    }
</style>
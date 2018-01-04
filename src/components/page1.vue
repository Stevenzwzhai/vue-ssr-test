<template>
    <div class="page1">
        this page's name is {{name}}
        <div>
            async data is {{item}}
        </div>
    </div>
</template>
<script>
    export default{
        name: 'page1',
        data() {
            return {
                name: 'page1'
            }
        },
        asyncData({store, route}) {
            return store.dispatch('get_items', route.params.id);
        },
        computed: {
            item() {
                return this.$store.state.items[this.$route.params.id]
            }
        }
    }
</script>
<style lang="stylus" scoped>
    .page1
        background-color #fffefd
        font-size 16px

</style>
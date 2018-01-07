<template>
    <div class="page1">
        this page's name is {{name}}
        <div>
            async data is {{item}}
        </div>
        <div class="bg">asdfadfa</div>
        <mt-button>tesd</mt-button>
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
<style lang="scss" scoped>
    @import '../style/theam';
    .bg{
        background-color: $primary;
    }
</style>
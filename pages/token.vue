<template>
    <div>
        <h1>tOKEN</h1>
        <button @click="saveToken">
            save mock token
        </button>
    </div>
</template>
<script>
    export default {
        asyncData({store}) {
            store.dispatch("auth/initAuth")
        },
        methods: {
            saveToken() {
                this.$store.dispatch('auth/saveToken', { access_token: '4d4d4d4d', refresh_token: '329239', expires_in: 121212 })
            }
        }
    }
</script>
<style scoped>

</style>
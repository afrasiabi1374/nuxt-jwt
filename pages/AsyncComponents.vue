<template>
    <div>
        <h1>
            async component and window problem
        </h1>
        <client-only>
            <views-async-components-scroll></views-async-components-scroll>
        </client-only>
        <HomeCounter :defaulltInitval="34"></HomeCounter>
        <div style="margin: 110vh">
            footer
        </div>
    </div>
</template>
<script>
    import Loading from '@/components/common/Loading.vue';
    import Error from '@/components/common/Error.vue';
    const HomeCounter = () => ({
        component: import('@/components/HomeCounter.vue'),
        loading: Loading,
        error: Error,
        delay: 3000,
        timeout: 9000
    })
    export default {
        name: 'AsyncComponents',
        components: {
            HomeCounter,
            Loading,
            Error
        }
    }
</script>
<style>

</style>
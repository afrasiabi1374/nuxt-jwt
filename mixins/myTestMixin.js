export default {
    data() {
        return {
            a: 5
        }
    },
    methods: {
        test(){
            console.log('test at mixins');
        }
    },
    mounted() {
        console.log('mounted from mixin');
    },
}
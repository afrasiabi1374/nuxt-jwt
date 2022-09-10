export const state  = () => {
    return {
        data:[],
        loading: true
    }
}

export const getters = {
    getData(state){
        return state.data
    },
    getLoading(state){
        console.log(state.loading)
        return state.loading
    },
    getItemById: (state) => (id) => {
        return state.data.find(item => item.id === id)?.title
    }
}

export const mutations = {
     SET_DATA(state, payload) {
        state.data =  payload
    },
    SET_LOADING(state, payload) {
        state.loading = payload
    }
}

export const actions = {
    async fetchData({ commit }){
        commit("SET_LOADING", true)
        await this.$axios.$get("https://jsonplaceholder.typicode.com/albums")
        .then((response)=>{
            console.log('aaaaaaaaaaaaaaa=>',response);
            commit("SET_DATA", response)
        })
        .catch((e)=>{
            console.log('error', e);
        }).finally(() =>{
            commit("SET_LOADING", false)
        })
    }
}
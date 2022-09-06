export const state  = () => {
    return {
        counter: 0,
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
    }
}

export const mutations = {
    INCREMENT_COUNTER(state, step) {
        state.counter+= step
    },
     SET_DATA(state, payload) {
        state.data =  payload
    },
    SET_LOADING(state, payload) {
        state.loading = payload
    }
}

export const actions = {
    incrementCounter({commit}, payLoad){
        commit("INCREMENT_COUNTER", payLoad)
    },

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
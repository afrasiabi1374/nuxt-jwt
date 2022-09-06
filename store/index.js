export const state  = () => {
    return {
        counter: 0,
        data:[]
    }
}

export const getters = {
    getData(state){
        return state.data
    }
}

export const mutations = {
    INCREMENT_COUNTER(state, step){
        state.counter+= step
    },

     SET_DATA(state, payload){
        state.data =  payload
    }
}

export const actions = {
    incrementCounter({commit}, payLoad){
        commit("INCREMENT_COUNTER", payLoad)
    },

    async fetchData({ commit }){
        await this.$axios.$get("https://jsonplaceholder.typicode.com/albums")
        .then((response)=>{
            console.log('aaaaaaaaaaaaaaa=>',response);
             commit("SET_DATA", response)
        })
        .catch((e)=>{
            console.log('error', e);
        })
    }
}
export const state  = () => {
    return {
        counter: 0,
    }
}

export const getters = {

}

export const mutations = {
    INCREMENT_COUNTER(state, step) {
        state.counter+= step
    }
}

export const actions = {
    incrementCounter({commit}, payLoad){
        commit("INCREMENT_COUNTER", payLoad)
    },
}
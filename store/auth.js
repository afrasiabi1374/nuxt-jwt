import Vue from "vue"
const TOKEN_LOCAL_KEY = 'key_for_cookie'
const getDefaultState = () => {
    return {
        data:{
            token: null,
            expire: null,
            refresh: null
        }
    }
}
export const state = getDefaultState
export const getters = {
    isAuthenticated(state){
        return state.data.token !== null
    },
    getToken(state){
        return state.data.token
    },
    getRefreshToken(state){
        return state.data.refresh
    }
}
export const mutations = {
    SET_TOKEN(state, payload) {
        Vue.set(state, 'data', payload)
    },
    CLEAR_TOKEN(state) {
        Object.assign(state, getDefaultState)
    }
}
export const actions = {
    saveToken ({ commit }, { access_token, refresh_token, expires_in }) {
        const expire = new Date().getTime() + Number.parseInt(expires_in) * 1000
        const tokenData = {
            token: access_token,
            refresh: refresh_token,
            expire
        }
        commit('SET_TOKEN', tokenData)
        this.$cookies.set(TOKEN_LOCAL_KEY, tokenData, {
            path: '/',
            maxAge: 60 * 60 * 24 * 180
        })
    },
    initAuth ({ commit }) {
        const tokenData = this.$cookies.get(TOKEN_LOCAL_KEY)
        if (tokenData?.token) {
            commit('SET_TOKEN', tokenData)
        }
    },
    clearToken ({ commit, dispatch }) {
        commit('CLEAR_TOKEN')
        this.$cookies.remove(TOKEN_LOCAL_KEY, { path: '/' })
    },
    logout({ dispatch }) {
        dispatch('clearToken')
        window.location.replace('/')
    }
}
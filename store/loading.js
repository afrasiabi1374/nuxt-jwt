import { CLIENT_ID, CLIENT_SECRET } from '~/constants/auth'
const getDefaultState = () => {
    return {
        login: {
            username: '',
            password: ''
        },
        isLoading: false,
        errorMessage: ''
    }
}
export const state = getDefaultState
export const mutations = {
    SET_USERNAME(state, payload) {
        state.login.username = payload
    },
    SET_PASSWORD(state, payload) {
        state.login.password = payload
    },
    SET_IS_LOADING(state, payload) {
        state.isLoading = payload
    },
    SET_ERROR_MESSAGE(state, payload) {
        state.errorMessage = payload
    }
}

export const actions = {
    submitLogin({ commit, state, dispatch },  { ref }) {
        commit('SET_IS_LOADING', true)
        const onError = (response) => {

        }
    }
}
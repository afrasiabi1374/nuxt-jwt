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
            if (response.status === 401) {
                const message = 'نام کابری یا کلمه عبور نادرست است'
                commit('SET_ERROR_MESSAGE', message)
            }
        }
        const cc = {
            ref,
            onError
        }
        const body = {
            grant_type: 'password',
            client_id: CLIENT_ID,
            client_secret: CLIENT_SECRET,
            ...state.login
        }
        return this.$api
        ._post('/oauth2/rest/token', body, { cc })
        .then((response) => {
          if (response) {
            const { access_token, refresh_token, expires_in } = response
            dispatch(
              'auth/saveToken',
              { access_token, refresh_token, expires_in },
              { root: true }
            )
            commit('SET_ERROR_MESSAGE', '')
            return true
          }
          commit('SET_IS_LOADING', false)
        })
    }

}
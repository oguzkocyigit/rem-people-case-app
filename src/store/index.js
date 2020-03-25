import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginMeIn: false,
    loginMeError: null,
    loginMeSuccess: false
  },
  mutations: {
    loginStart: state => state.loginMeIn = true,
    loginStop: (state, errorMessage) => {
      state.loginMeIn = false;
      state.loginMeError = errorMessage;
      state.loginMeSuccess = !errorMessage;
    }
  },
  actions: {
    login({ commit }, loginData) {
      commit('loginStart');
      Axios.post('https://reqres.in/api/login', {
        ...loginData
      })
        .then(() => {
          commit('loginStop', null)
        })
        .catch(error => {
          commit('loginStop', error.response.data.error)
        })
    }
  }
})
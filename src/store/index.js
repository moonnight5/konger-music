import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    play: false,
    id: 347230
  },
  mutations: {
    resetPlay(state) {
      state.play = false
    },
    changePlay(state) {
      state.play = !state.play
    },
    newId(state,id) {
      state.id = id
    }
  },
  actions: {
  },
  modules: {
  }
})

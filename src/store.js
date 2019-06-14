import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    navshow: true,
    navcshow: true
  },
  mutations: {
    navisshow (store, xpp) {
      store.navshow = !store.navshow
    },
    navcisshow (store, xpp) {
      store.navcshow = !store.navcshow
    }
  },
  actions: {

  }
})

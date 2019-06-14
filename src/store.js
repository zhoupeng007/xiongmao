import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    navshow: true,
    navcshow: true,
    xiding: true
  },
  mutations: {
    navisshow (store, xpp) {
      store.navshow = !store.navshow
    },
    navcisshow (store, xpp) {
      store.navcshow = !store.navcshow
    },
    xiding (store, xpp) {
      store.xiding = false
    },
    xiding1 (store, xpp) {
      store.xiding = true
    }
  },
  actions: {

  }
})

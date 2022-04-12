import { createStore } from 'vuex'
import { marketService } from '../services/marketService.js'

const store = createStore({
  strict: true,
  state: {
    marketers,
  },
  getters: {
    marketers({ state }) {
      return state.marketers
    },
  },
  mutations: {
    setMarketers({ marketers }, { marketersToSet }) {
      marketers = marketersToSet
    },
    addMarketer(state, {marketer}) {
        state.marketers.push(marketer)
    }
  },
  actions: {
    async loadMarketers({ commit }) {
      try {
        const marketers = await marketService.query()
        commit({ type: 'setMarketers', marketersToSet: marketers })
      } catch (err) {
        console.log(err)
        throw err
      }
    },
    async addMarketer({ commit }, { marketer }) {
      try {
        var marketer = await marketService.add(marketer)
        commit({ type: 'addMarketer', marketer })
      } catch (err) {
        console.log(err)
        throw err
      }
    },
  },
})

export default store

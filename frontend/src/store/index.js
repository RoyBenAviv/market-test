import { createStore } from 'vuex'
import { marketService } from '../services/market.service.js'
import { utilService } from '../services/util.service.js'
const store = createStore({
  strict: true,
  state: {
    marketers: [],
  },
  getters: {
    marketers: (state) => ({ type, isAsc }) => {
      console.log(state.marketers)
      // return state.marketers
      if (!type) return state.marketers
      return Array.from(state.marketers).autoSortObj(type, isAsc)
    },
  },
  mutations: {
    setMarketers(state, { marketersToSet }) {
      state.marketers = marketersToSet
    },
    addMarketer(state, { marketer }) {
      state.marketers.push(marketer)
    },
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
        var marketer = await marketService.updateMarketer(marketer)
        commit({ type: 'addMarketer', marketer })
      } catch (err) {
        console.log(err)
        throw err
      }
    },
  },
})

export default store

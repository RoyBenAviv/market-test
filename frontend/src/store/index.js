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
      return Array.from(state.marketers).autoSortObj(type, isAsc)
    },
  },
  mutations: {
    setMarketers({ marketers }, { marketersToSet }) {
      marketers = marketersToSet
    },
    addMarketer(state, { marketer }) {
      state.marketers.push(marketer)
    },
  },
  actions: {
    async loadMarketers({ commit }) {
      try {
        const marketers = await marketService.query()
        console.log(marketers)
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

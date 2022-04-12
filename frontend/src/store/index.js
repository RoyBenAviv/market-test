import { createStore } from 'vuex'
import { marketerService } from '../services/marketerService.js'

const store = createStore({
    strict: true,
    state: {
        marketers
    },
    getters: {
        marketers({ state }) {
            return state.marketers
        }
    },
    mutations: {
        setMarketers({ marketers }, { marketersToSet }) {
            marketers = marketersToSet
        }
    },
    actions: {
        async loadMarketers({ commit }) {
            try {
                const marketers = await marketerService.query()
                commit({
                    type: 'setMarketers',
                    marketersToSet: marketers
                })
            } catch (err) {
                console.log(err)
                throw err
            }
        }
    },
})

export default store

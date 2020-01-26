import stocks from "@/data/stocks"
export default {
    state: {
        stocks: [] // esse array reflete o qu esta dentro de data/stocks.js
    },
    mutations: {
        setStocks(state, stocks) {
            state.stocks = stocks
        }
    },
    actions: {
        buyStock({ commit }, order) { // o commit é responsável por chamar alguma mutation
            commit()
        },
        initStock({ commit }) {
        //    console.log('initStocks')
            commit('setStocks', stocks)
        }
    },
    getters: {
        stocks(state) {
            return state.stocks
        }
    }
}
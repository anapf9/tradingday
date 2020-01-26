import stocks from "@/data/stocks"
export default {
    state: {
        stocks: [] // esse array reflete o qu esta dentro de data/stocks.js
    },
    mutations: {
        setStocks(state, stocks) {
            state.stocks = stocks
        },
        randomizeStocks(state) {
            state.stocks.forEach(stock => {
                stock.price = Math.round(stock.price * (1 + Math.random() - 0.45))
            });
        }
    },
    actions: {
        buyStock({ commit }, order) { // o commit é responsável por chamar alguma mutation
            commit('buyStock', order)
        },
        initStock({ commit }) {
        //    console.log('initStocks')
            commit('setStocks', stocks)
        },
        randomizeStocks({ commit }) {
            commit('randomizeStocks')
        }
    },
    getters: {
        stocks(state) {
            return state.stocks
        }
    }
}
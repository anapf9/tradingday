export default {
    state: {
        funds: 10000,
        stocks: []
    },
    mutations: {
        buyStock(state, { stockId, quantity, stockPrice }) // o segundo parametro é o objeto que representa uma compra (order, que esta dentro co componente Stock.vue)
        // pelo destructure ({}) expoem-se cada um dos atributos diretamente na definição do metodo
        // uma  compra gera efeito no array de stocks mas a actiocn foi disparada em outro modulo mais apropriado
        {
            const record = state.stocks.find(element => element.id == stockId) //função callback dentro da função state procura se já existe um registro dentro de stock
            if (record) {
                record.quantity += quantity
            } else {
                state.stocks.push({
                    id: stockId,
                    quantity: quantity
                })
            }
            state.funds -= stockPrice * quantity
        },
        sellStock(state, { stockId, quantity, stockPrice}) {
            const record = state.stocks.find(element => element.id == stockId) //função callback dentro da função state procura se já existe um registro dentro de stock
            if (record.quantity > quantity) {
                record.quantity -= quantity
            } else {
                state.stocks.splice(state.stocks.indexOf(record), 1)
            }
            state.funds += stockPrice * quantity
        },
        setPortfolio(state, portfolio) {
            state.funds = portfolio.funds
            state.stocks = portfolio.stockPortfolio ? portfolio.stockPortfolio : []
        }
    },
    actions: {
        sellStock({ commit }, order) {
            commit('sellStock', order)
        }
    },
    getters: {
        stockPortfolio(state, getters) // retorna todas as ações que tem dentro do portifolio
        // essa função irá mostrar não apenas so os 2 atributos do stocks mas também nome, preço
        // o segundo parametro getters recebe todos os getters de todos os modulos que tenham invocado
        // neste caso iremos usar para receber o getters do stocks.js que contem o state do stocks das ações (que contem todas as ações)
        {
            return state.stocks.map( stock => {
                const record = getters.stocks.find(element => element.id == stock.id)
                return {
                    id: stock.id,
                    quantity: stock.quantity,
                    name: record.name,
                    price: record.price
                }
            })
        },
        funds(state) {
            return state.funds
        }
    }
}
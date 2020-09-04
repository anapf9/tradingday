import Vue from 'vue'
import Router from 'vue-router'

import Home from './components/Home'
import Portfolio from './components/portfolio/Portfolio'
import Wallet from './components/wallet/Wallets'
import Stocks from './components/stocks/Stocks'
import Calculator from './components/calculator/Calculator'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        { path: '/', component: Home },
        { path: '/portfolio', component: Portfolio },
        { path: '/wallets', component: Wallet },
        { path: '/stocks', component: Stocks },
        { path: '/calculator', component: Calculator }
    ]
})
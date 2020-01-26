<template>
    <v-flex class="pr-3 pb-3" xs12 md6 lg4>
        <v-card class="green darken-3 white--text">
            <v-card-title class="headline">
                <strong>
                    {{stock.name}} <small> (Preço: {{stock.price | currency}} )</small>
                </strong>
            </v-card-title>
        </v-card>
        <v-container fill-height>
            <v-text-field label="Quantidade" type="number" v-model.number="quantity" />
            <v-btn class="green darken-3 white--text" 
            :error="!Number.isInteger(quantity) || insufficientFunds"
            @click="buyStock" 
            :disabled="quantity<=0 || !Number.isInteger(quantity) || insufficientFunds">
            {{insufficientFunds ? 'Insuficiente' : 'Comprar'}}
            </v-btn>
        </v-container>
    </v-flex>
</template>

<script>
export default {
    props: ['stock'],
    data() {
        return {
            quantity: 0
        }
    },
    computed: {
        funds() {
            return this.$store.getters.funds
        },
        insufficientFunds() {
            return this.quantity * this.stock.price > this.funds
        }
    },
    methods: {
        buyStock() {
            const order = {
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                quantity: this.quantity
            }
            this.$store.dispatch('buyStock', order) //dispatch usa-se para invocar uma action e a action realiza o commit para uma mutation buyStock que esta no modulo de porfolio
            this.quantity = 0
            
        }
    }
}
</script>

<style>

</style>

<template>
    <v-flex class="pr-3 pb-3" xs12 md6 lg4>
        <v-card class="blue darken-3 white--text">
            <v-card-title class="headline">
                <strong>
                    {{stock.name}}
                    <small> 
                        (Preço: {{stock.price}} ) | Qtde: {{stock.quantity}}
                        </small>
                </strong>
            </v-card-title>
        </v-card>
        <v-container fill-height>
            <v-text-field label="Quantidade" type="number" v-model.number="quantity" />
            <v-btn class="blue darken-3 white--text" 
            @click="sellStock" 
            :disabled="insufficientQuantity || quantity<=0 || !Number.isInteger(quantity) ">
                {{insufficientQuantity ? 'Insuficiente' : 'Vender'}}
            </v-btn>
        </v-container>
    </v-flex>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    props: ['stock'],
    data() {
        return {
            quantity: 0
        }
    },
    computed: {
        insufficientQuantity() {
            return this.quantity > this.stock.quantity
        }
    },
    methods: {
    //    ...mapActions(['sellStocks']), // desta forma não dara certo por conta do nome da ação ser igual ao nome da função então mudamos o nome por meio do mapeameto
        ...mapActions({sellStockAction: 'sellStock'}),
        sellStock() {
            const order = {
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                quantity: this.quantity
            }
            this.sellStockAction(order)
        //    this.$store.dispatch('selltock', order) //dispatch usa-se para invocar uma action e a action realiza o commit para uma mutation buyStock que esta no modulo de porfolio
            this.quantity = 0
            
        }
    }
}
</script>

<style>

</style>

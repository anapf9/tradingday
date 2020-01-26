<template>
  <v-toolbar app>
    <v-toolbar-title class="headline text-uppercase mr-4">
    <span>Stock</span>
    <span class="font-weight-light">Trader</span>
    </v-toolbar-title>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat to="/">Inicio</v-btn>
      <v-btn flat to="/portfolio">Portifólio</v-btn>
      <v-btn flat to="/stocks">Ações</v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items>
        <v-btn flat> FInalizar o dia</v-btn>
        <v-menu offset-y>
            <v-btn flat slot="activator"> Salvar & Carregar</v-btn>
            <v-list>
                <v-list-tile>
                    <v-list-tile-title> Salvar Dados</v-list-tile-title>
                </v-list-tile>
                <v-list-tile>
                    <v-list-tile-title> Carregar Dados</v-list-tile-title>
                </v-list-tile>
            </v-list>
        </v-menu>
        <v-layout aling-center>
          <span class="text-uppercase grey--text text-darken2">
            Saldo: {{ funds | currency }}
          </span>
        </v-layout>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>

export default {
    computed: {
        funds() {
            return this.$store.getters.funds
        }
    }
}
</script>

<style>

</style>

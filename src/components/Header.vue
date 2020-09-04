<template>
  <v-app-bar app clipped-right color="blue-grey" dark>
    <v-app-bar-nav-icon @click="openSideMenu">...</v-app-bar-nav-icon>
    <v-toolbar-title>Hey Trader</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn @click="endDay">FInalizar o dia</v-btn>
    <v-menu offset-y>
      <v-btn slot="activator">Salvar & Carregar</v-btn>
      <v-list>
        <v-list-tile @click="saveData">
          <v-list-tile-title>Salvar Dados</v-list-tile-title>
        </v-list-tile>
        <v-list-tile @click="loadDataLocal">
          <v-list-tile-title>Carregar Dados</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
    <v-layout aling-center>
      <span class="text-uppercase grey--text text-darken2">Saldo: {{ funds | currency }}</span>
    </v-layout>
  </v-app-bar>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
    ...mapState(["drawer"])
  },
  methods: {
    ...mapActions(["randomizeStocks", "loadData"]),
    endDay() {
      this.randomizeStocks();
    },
    saveData() {
      const { funds, stockPortfolio, stocks } = this.$store.getters; // o destruture ({}) obtem de dentro da função invocada as variaves requeridas
      this.$http.put("data.json", { funds, stockPortfolio, stocks }); // neste caso, o que esta dentro do {}, significa que será criado um novo objeto com os 3 parametros
    },
    loadDataLocal() {
      this.loadData();
    },
    openSideMenu() {
      this.$store.state.drawer = !this.$store.state.drawer;
    }
  }
};
</script>

<style>
</style>

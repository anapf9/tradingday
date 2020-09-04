<template>
  <v-app-bar app clipped-right color="blue-grey" dark>
    <v-app-bar-nav-icon @click="openSideMenu">...</v-app-bar-nav-icon>
    <v-toolbar-title>Hey Trader</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn @click="endDay">FInalizar o dia</v-btn>
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on">Salvar & Carregar</v-btn>
      </template>
      <v-list>
        <v-list-item v-for="option in options" :key="option.id" @click="optionSelect(option.id)">
          <v-list-item-title>{{ option.text}}</v-list-item-title>
        </v-list-item>
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
  data() {
    return {
      options: [
        { id: 1, text: "Salvar Dados" },
        { id: 2, text: "Carregar Dados" }
      ]
    };
  },
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
    },
    optionSelect(option) {
      if (option === 1) {
        this.saveData;
        return;
      }
      this.endDay;
    }
  }
};
</script>

<style>
</style>

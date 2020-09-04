<template>
  <v-navigation-drawer :value="this.$store.state.drawer" app>
    <v-list dense>
      <v-list-item @click="openSideMenu">
        <v-list-item-action>
          <v-icon>mdi-exit-to-app</v-icon>
        </v-list-item-action>
      </v-list-item>
      <v-list-item-content>
        <v-btn to="/">Inicio</v-btn>
        <v-btn to="/portfolio">Portifólio</v-btn>
        <v-btn to="/wallets">Carteiras</v-btn>
        <v-btn to="/calculator">Calculadora</v-btn>
        <v-btn to="/stocks">Ações</v-btn>
      </v-list-item-content>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: "Dashboard", icon: "dashboard" },
        { title: "Account", icon: "account_box" },
        { title: "Admin", icon: "gavel" }
      ]
    };
  },
  methods: {
    openSideMenu() {
      this.$store.state.drawer = !this.$store.state.drawer;
    }
  }
};
</script>
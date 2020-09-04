<template>
  <v-app>
    <Header />
    <v-content>
      <v-container>
        <transition name="slide" mode="out-in">
          <router-view></router-view>
        </transition>
      </v-container>
    </v-content>
    <SideMenu />
  </v-app>
</template>

<script>
import Header from "./components/Header";
import SideMenu from "./components/SideMenu";
export default {
  props: {
    source: String
  },
  data: () => ({
    drawer: null,
    drawerRight: null,
    right: false,
    left: false
  }),
  components: { Header, SideMenu },
  created() {
    this.$store.dispatch("initStock"); //chama uma action
    // eslint-disable-next-line
    console.log(this.$store.state.drawer);
  }
};
</script>

<style>
@keyframes slide-in {
  from {
    transform: translateY(-30px);
    opacity: 0;
  }
  to {
    transform: translateY(0px);
    opacity: 1;
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0px);
    opacity: 1;
  }
  to {
    transform: translateY(-30px);
    opacity: 0;
  }
}

.slide-enter-active {
  animation: slide-in 0.3s ease;
}

.slide-leave-active {
  animation: slide-out 0.3s ease;
}
</style>
<template>
  <v-container id="bankConfig" fluid>
    <h1>Escolha a sua carteira ou crie uma</h1>
    <div class="mt-5">
      <v-row class="pa-4" justify="start" align="center" d-flex flex-row flat tile>
        <wallet transition="slide-x-transition" @edit="selectAccountToEdit" />
        <div>
          <v-btn rounded class="ma-2" color="kiclous">
            <v-icon class="pr-2">mdi-plus</v-icon>
            <span class="buttonText">Nova Conta</span>
          </v-btn>
        </div>
      </v-row>
    </div>
    <modal-wallet v-if="showModal" />
    <!-- <v-alert
      v-if="message"
      color="#2A3B4D"
      dark
      icon="mdi-firework"
      dense
    >
      {{message}}
    </v-alert>-->
  </v-container>
</template>

<script>
import Wallet from "./Wallet";
import ModalWallet from "./ModalWallet";
export default {
  name: "Wallets",
  components: {
    Wallet,
    ModalWallet
  },
  data() {
    return {
      showModal: false
    };
  }
};
</script>

<style>
</style>
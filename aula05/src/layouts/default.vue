<template>
  <v-app id="inspire">
    <v-system-bar>
      <v-spacer></v-spacer>
      {{ appStore.getUser.name }}
    </v-system-bar>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>Pessoas Aleatórias</v-app-bar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" temporary>
      <v-list-item-title class="text-h6 ma-4 text-yellow">Menu</v-list-item-title>
      <template v-if="appStore.isLogged">
        <v-list-item link title="Início" prepend-icon="mdi-home" to="/"></v-list-item>
        <v-list-item link title="Pessoas" prepend-icon="mdi-account" to="/pessoas"></v-list-item>
      </template>
      <v-list-item link title="Login" prepend-icon="mdi-login" to="/login"></v-list-item>
    </v-navigation-drawer>

    <v-main class="bg-grey-darken-2">
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'
// import app state from pinia
import { useAppStore } from "@/stores/app.js"
const drawer = ref(null)
const appStore = useAppStore()  
</script>
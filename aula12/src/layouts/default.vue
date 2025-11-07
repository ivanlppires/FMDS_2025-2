<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
     <MenuList />
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>Sistema de Controle de Estoque</v-app-bar-title>
    </v-app-bar>

    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'
import MenuList from '@/components/MenuList.vue'

const drawer = ref(null)
</script>

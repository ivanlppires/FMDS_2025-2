<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <MenuList />
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>Sistema de Gestão</v-app-bar-title>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import MenuList from '@/components/MenuList.vue';
import { ref } from 'vue'

const drawer = ref(null)
</script>

<script>
export default {
  data: () => ({ drawer: null }),
}
</script>
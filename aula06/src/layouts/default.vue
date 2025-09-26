<template>
  <v-app id="inspire">
    <v-app-bar class="pr-4">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-app-bar-title>FMDS - Aula 06</v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn text to="/login">
        Login
      </v-btn>
      <v-btn class="mx-2" text to="/dashboard" v-if="authStore.isAuthenticated">
        Dashboard
      </v-btn>
      <v-divider inset vertical></v-divider>
      <v-tooltip bottom v-if="authStore.isAuthenticated">
        <template v-slot:activator="{ props }">
          <v-btn icon v-bind="props" to="/profile">
            <v-avatar size="32">
              <v-img v-if="authStore.user?.photoURL" :src="authStore.user.photoURL" />
              <span v-else>{{ (authStore.user?.name || authStore.user?.email || 'U').charAt(0) }}</span>
            </v-avatar>
          </v-btn>
        </template>
        <span>{{ authStore.user?.displayName || authStore.user?.email }}</span>
      </v-tooltip>
      <v-btn color="error" text @click="authStore.signOut()" v-if="authStore.isAuthenticated">
        Sair
        <v-icon class="ml-2">mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>
<script setup>
import { useAuthStore } from '@/stores/auth'
const authStore = useAuthStore()
</script>
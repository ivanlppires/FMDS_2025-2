<template>
    <div>
        <v-card v-if="!appStore.isLoggedIn" class="mx-auto pa-12 pb-8" elevation="8" max-width="448" rounded="lg">
            <v-card-title>Login</v-card-title>

            <v-text-field v-model="email" density="compact" placeholder="Email address" prepend-inner-icon="mdi-email-outline"
                variant="outlined"></v-text-field>

            <v-text-field v-model="password" :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'" :type="visible ? 'text' : 'password'"
                density="compact" placeholder="Enter your password" prepend-inner-icon="mdi-lock-outline"
                variant="outlined" @click:append-inner="visible = !visible"></v-text-field>

            <v-btn @click="appStore.login(email, password)" class="mb-8" color="blue" size="large" variant="tonal" block>
                Log In
            </v-btn>

        </v-card>
        <v-card v-else>
            <v-card-title>{{ appStore.user.name }}</v-card-title>
            <v-card-subtitle>{{ appStore.user.email }}</v-card-subtitle>
            <v-card-actions>
                <v-btn block color="red" size="large" variant="tonal" @click="appStore.logout()">
                    Log Out
                </v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import { useAppStore } from '@/stores/app.js'
const appStore = useAppStore()
const visible = ref(false)
const email = ref('');
const password = ref('');
</script>
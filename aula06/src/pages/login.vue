<template>
    <v-sheet class="pa-12" rounded>
        <v-card class="mx-auto px-6 py-8" max-width="344">
            <v-form v-model="form" @submit.prevent="onSubmit">
                <v-text-field v-model="email" :readonly="loading" :rules="[required]" class="mb-2" label="Email"
                    clearable></v-text-field>

                <v-text-field v-model="password" :readonly="loading" :rules="[required]" label="Password"
                    placeholder="Enter your password" clearable></v-text-field>

                <br>

                <v-btn :disabled="!isOk" :loading="loading" color="primary" size="large" type="submit"
                    variant="elevated" block>
                    Entrar
                </v-btn>
            </v-form>
            <v-divider class="my-4"></v-divider>

            <v-btn :loading="loading" :disabled="loading" color="primary" variant="outlined" block class="mt-2"
                @click="authStore.signIn()">
                <v-icon class="mr-3" size="20">mdi-google</v-icon>
                Entrar com Google
            </v-btn>
        </v-card>
    </v-sheet>
</template>
<script setup>
import { ref, computed } from 'vue'
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()
const form = ref(false)
const email = ref(null)
const password = ref(null)
const loading = ref(false)

function onSubmit() {
    if (!form.value) return
    loading.value = true
    setTimeout(() => (loading.value = false), 2000)
}
function required(v) {
    return !!v || 'Field is required'
}

const isOk = computed(() => {
    return !!email.value && !!password.value
});

</script>
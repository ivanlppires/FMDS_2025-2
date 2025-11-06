<template>
    <v-alert class="mb-2">Usuário logado: {{ !!accessToken }}</v-alert>
    <v-card class="mx-auto">
        <v-card-title>Login com Google</v-card-title>
        <v-card-text>Faça o login usando sua conta do google</v-card-text>
        <v-card-actions>
            <v-btn @click="logar"  color="primary" variant="tonal">Login com Google</v-btn>
            <v-btn @click="deslogar"  color="error" variant="tonal">deslogar</v-btn>
        </v-card-actions>
    </v-card>
    <v-row class="mt-2">
        <v-col><v-btn block @click="getCidades()">Dados públicos</v-btn></v-col>
        <v-col><v-btn block @click="getClientes()">Dados protegidos</v-btn></v-col>
    </v-row>
    <v-alert class="mt-4">
        <pre>{{ resultado }}</pre>
    </v-alert>
</template>
<script setup>
import { ref } from 'vue';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';

const auth = getAuth()
const provider = new GoogleAuthProvider()

const accessToken = ref(null);

const resultado = ref('Resultando...')

const logar = async () => {
    const result = await signInWithPopup(auth, provider)
    console.log(result)
    accessToken.value = result.user.accessToken || null;
}

const deslogar = async () => {
    const result = await signOut(auth)
    accessToken.value = null;
}

const getCidades = async () => {
    const result = await fetch('http://localhost:5000/publica')
    resultado.value = await result.json()
}

const getClientes = async () => {
    const result = await fetch('http://localhost:5000/protegida', {
        headers: {
            'Authorization': `Bearer ${accessToken.value}`
        }
    })
    resultado.value = await result.json()
}

</script>
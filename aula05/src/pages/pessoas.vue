<template>
    <v-text-field 
     @input="searchFilter"
     v-model="search" variant="underlined" label="Buscar"
     prepend-icon="mdi-magnify" class="mb-4"></v-text-field>
    <v-row>
        <v-col loading="true" cols="12" sm="6" md="4" xl="3" v-for="p in pessoasFiltrado" :key="p.id">
            <v-card>
                <v-img cover :src="p.avatar" height="200px"></v-img>
                <v-card-title> {{ p.name }}</v-card-title>
                <v-card-subtitle> {{ p.email }} </v-card-subtitle>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn text color="primary">Detalhes</v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const pessoas = ref([])
const pessoasFiltrado = ref();
const search = ref();

onMounted(async () => {
    const response = await fetch('https://randomuser.me/api/?results=40')
    pessoas.value = await response.json()
    pessoas.value = pessoas.value.results.map((p, index) => ({
        id: index,
        name: `${p.name.first} ${p.name.last}`,
        email: p.email,
        avatar: p.picture.large,
    }))
    pessoasFiltrado.value = pessoas.value;
})

const searchFilter = () => {
    pessoasFiltrado.value = pessoas.value.filter(
         p => p.name.toLowerCase().startsWith(search.value.toLowerCase()));
}

</script>
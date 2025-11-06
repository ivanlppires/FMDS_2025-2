<script setup>
import { supabase } from '../utils/supabase'
import { ref, onMounted } from 'vue'

const clients = ref([])
const client = ref({ id: null, name: '', email: '' })

const save = async () => {  
  console.log('ID DO CLENTE', client.id)
  const { data, error } = await supabase.from('clients').insert(client.value)
  if(!error) {
    getClients();
    client.value = ''
  }
}
const getClients = async () => {
  const { data } = await supabase.from('clients').select()
  clients.value = data
}

const remove = async (id) => {
  const { data, error } = await supabase.from('clients').delete().eq('id', id)
  if (!error) getClients();
}
onMounted(() => {
  getClients()
})
</script>
<template>
  <v-form>
    <v-text-field v-model="client.name" placeholder="Nome do client" variant="underlined" />
    <v-text-field v-model="client.email" placeholder="Email do cliente" variant="underlined" />
    <v-btn @click="save">Salvar</v-btn>
  </v-form>
  <v-divider class="my-5" />
  <v-list>
    <v-list-item v-for="c in clients" :key="c.id">
      <v-list-item-content>
        <v-btn density="compact" @click="remove(c.id)" variant="plain" color="red"><v-icon>mdi-delete</v-icon></v-btn>
        <v-btn density="compact" @click="client = {...c}" variant="plain" color="yellow"><v-icon>mdi-pencil</v-icon></v-btn>
        #{{ c.id }} - {{ c.name }} ({{ c.email }})
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

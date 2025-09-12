<template>
    <div>
        <h2>Relação de Clientes</h2>
    </div>
    <div>
        <card v-for="cliente in clientes" :key="cliente.id" :titulo="cliente.nome" :subtitulo="cliente.email"
            :conteudo="cliente.shortbio" />
    </div>
</template>
<script setup>
import { ref } from 'vue';
import Card from '../components/Card.vue';
const clientes = ref(
  [
    { id: 1, nome: 'João', email: 'joao@unema.br', shortbio: 'Desenvolvedor' },
    { id: 2, nome: 'Maria', email: 'maryjane@unemat.br', shortbio: 'Diretora' },
    { id: 3, nome: 'Pedro', email: 'peterpark@unmat.br', shortbio: 'Estagiário' },
  ]
)
</script>
<template>
    <div>
        <h2>Relação de Produtos</h2>
    </div>
    <div>
        <card v-for="produto in produtos" :key="produto.id" :titulo="produto.nome" :subtitulo="produto.descricao"
            :conteudo="'Preço: R$ ' + produto.preco.toFixed(2)" />
    </div>
</template>
<script setup>
import { ref } from 'vue';
import Card from '../components/Card.vue';
const produtos = ref([
    { id: 1, nome: 'Notebook', descricao: 'Notebook Gamer', preco: 4500.00 },
    { id: 2, nome: 'Smartphone', descricao: 'Smartphone Android', preco: 2500.00 },
    { id: 3, nome: 'Tablet', descricao: 'Tablet para estudos', preco: 1500.00 },
]);
</script>
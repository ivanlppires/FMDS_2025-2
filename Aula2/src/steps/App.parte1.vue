<!--  Parte 1 — adicionar tarefas -->
<template>
  <div class="container">
    <h1>Todo List</h1>

    <div class="input-row">
      <input
        type="text"
        v-model="newTask"
        placeholder="Digite uma tarefa e pressione Enter"
        @keyup.enter="addTask"
        aria-label="Nova tarefa"
      />
      <button @click="addTask">Adicionar</button>
    </div>

    <pre>{{ tasks }}</pre>
  </div>
</template>

<script setup>
// Parte 1 — estado + v-model + adicionar

import { ref } from 'vue'

const newTask = ref('')
const tasks   = ref([]) // { id:number, text:string, done:boolean }

// gerador simples de ids estáveis (já antecipamos para as próximas partes)
let nextId = 1
const newId = () => nextId++

const addTask = () => {
  const v = newTask.value.trim()
  if (!v) return
  tasks.value.push({ id: newId(), text: v, done: false })
  newTask.value = ''
}
</script>

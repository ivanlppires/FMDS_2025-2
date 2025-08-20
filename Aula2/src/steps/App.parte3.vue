<!--  Parte 3 — alternar concluída e remover -->
<template>
  <div class="container">
    <h1>Todo List</h1>

    <div class="input-row">
      <input v-model="newTask" @keyup.enter="addTask" placeholder="Digite..." />
      <button @click="addTask">Adicionar</button>
    </div>

    <p v-if="tasks.length === 0">Nenhuma tarefa adicionada.</p>
    <ul v-else class="list">
      <li v-for="(t, i) in tasks" :key="t.id" class="item">
        <span class="text" @click="toggle(i)">
          {{ t.done ? '✅' : '⬜' }} {{ t.text }}
        </span>
        <button class="small" @click="toggle(i)">
          {{ t.done ? 'Desfazer' : 'Concluir' }}
        </button>
        <button class="small danger" @click="removeTask(i)">Remover</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
//  Parte 3 — eventos @click: alternar concluída e remover
import { ref } from 'vue'
const newTask = ref('')
const tasks   = ref([])
let nextId = 1
const newId = () => nextId++

const addTask = () => {
  const v = newTask.value.trim()
  if (!v) return
  tasks.value.push({ id: newId(), text: v, done: false })
  newTask.value = ''
}
const toggle = (i) => { tasks.value[i].done = !tasks.value[i].done }
const removeTask = (i) => { tasks.value.splice(i, 1) }
</script>

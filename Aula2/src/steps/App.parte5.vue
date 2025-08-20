<!-- Parte 5 — polimento do input (@keyup.enter, aria-label) -->
<template>
  <div class="container">
    <h1>Todo List</h1>

    <div class="input-row">
      <input
        v-model="newTask"
        placeholder="Digite uma tarefa e pressione Enter"
        @keyup.enter="addTask"
        aria-label="Nova tarefa"
      />
      <button @click="addTask" aria-label="Adicionar tarefa">Adicionar</button>
    </div>

    <p v-if="tasks.length === 0">Nenhuma tarefa adicionada.</p>
    <ul v-else class="list">
      <li v-for="(t, i) in tasks" :key="t.id" class="item">
        <span
          class="text"
          :style="{ textDecoration: t.done ? 'line-through' : 'none', opacity: t.done ? 0.6 : 1 }"
          @click="toggle(i)"
          role="button"
        >
          {{ t.done ? '✅' : '⬜' }} {{ t.text }}
        </span>
        <button class="small" @click="toggle(i)">{{ t.done ? 'Desfazer' : 'Concluir' }}</button>
        <button class="small danger" @click="removeTask(i)">Remover</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
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

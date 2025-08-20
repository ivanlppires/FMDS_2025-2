<!--  Parte 2 — exibir tarefas -->
  <template>
  <div class="container">
    <h1>Todo List</h1>

    <div class="input-row">
      <input v-model="newTask" @keyup.enter="addTask" placeholder="Digite..." />
      <button @click="addTask">Adicionar</button>
    </div>

    <p v-if="tasks.length === 0">Nenhuma tarefa adicionada.</p>
    <ul v-else class="list">
      <li v-for="t in tasks" :key="t.id" class="item">{{ t.text }}</li>
    </ul>
  </div>
</template>

<script setup>
// Parte 2 — v-if / v-else + v-for (+ :key)
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
</script>

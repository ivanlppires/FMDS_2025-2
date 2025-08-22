<template>
    <div class="container">
        <h1>{{ title }}</h1> <!-- interpolação -->
        <div class="input-row">
            <input
                type="text"
                placeholder="Digite uma tarefa e pressione Enter"
                v-model="newTask"
            />
            <!-- v-bind: ou ":" liga o script com o template sem interpolação -->
            <!-- v-on ou "@" liga o template com script -->
            <!-- v-model two-way data bind, liga o template com script e script com template -->
            <button @click="addTask">Adicionar</button>
        </div>
        <div>
            <p>Estou escrevendo isso aqui ó: {{  newTask }}</p>
            <pre>{{ tasks }}</pre>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'
const title = "Meu ToDo List" // variável não reativa
const tasks = ref([]); // variável reativa
const newTask = ref("")
const addTask = () => {
    console.log('Adicionando tarefa:', newTask.value)
    tasks.value.push(newTask.value)
    newTask.value = ""
}
</script>

<style>
:root {
    --bg: #0b1220;
    --card: #0f1724;
    --surface: #0f1724;
    --input-bg: #16171b;
    --text: #e6eef8;
    --muted: #8b98a8;
    --accent: #3b82f6;
    --accent-hover: #2563eb;
    --danger: #ff6b6b;
    --border: rgba(255, 255, 255, 0.06);
}

/* Base */
body {
    background: var(--bg);
    color: var(--text);
    margin: 0;
    font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

h1 {
    margin: 0 0 1rem 0;
    font-size: 1.5rem;
    color: var(--text);
}

/* Container */
.container {
    max-width: 720px;
    margin: 2rem auto;
    padding: 1rem;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.02), rgba(255, 255, 255, 0.01));
    color: var(--text);
    border: 1px solid var(--border);
    border-radius: 10px;
    box-shadow: 0 6px 20px rgba(2, 6, 23, 0.6);
}

/* Inputs */
.input-row {
    display: flex;
    gap: .5rem;
    margin-bottom: 1rem;
}

input {
    flex: 1;
    padding: .6rem .75rem;
    background: var(--input-bg);
    color: var(--text);
    border: 1px solid var(--border);
    border-radius: 6px;
    outline: none;
    transition: box-shadow .12s ease, border-color .12s ease;
}

input::placeholder {
    color: var(--muted);
}

input:focus {
    box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.12);
    border-color: rgba(59, 130, 246, 0.6);
}

/* Buttons */
button {
    padding: .5rem .75rem;
    background: var(--accent);
    color: #fff;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color .12s ease, transform .06s ease, filter .12s ease;
}

button:hover {
    background: var(--accent-hover);
    filter: brightness(.97);
}

button:active {
    transform: translateY(1px);
}

/* Lists */
.list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.item {
    display: flex;
    align-items: center;
    gap: .5rem;
    padding: .5rem 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.03);
}

.item:hover {
    background: rgba(255, 255, 255, 0.01);
    border-radius: 6px;
}

.item:last-child {
    border-bottom: none;
}

.text {
    cursor: pointer;
    flex: 1;
    color: inherit;
}

.text.done {
    color: var(--muted);
    text-decoration: line-through;
}

/* Small buttons/tags */
.small {
    font-size: .85rem;
    padding: .35rem .6rem;
    background: transparent;
    color: var(--text);
    border: 1px solid rgba(255, 255, 255, 0.04);
    border-radius: 6px;
}

.small:hover {
    background: rgba(255, 255, 255, 0.02);
}

.small+.small {
    margin-left: .25rem;
}

/* Danger actions */
.danger {
    color: var(--danger);
    border-color: rgba(255, 107, 107, 0.16);
    background: transparent;
}

/* Summary & subtle text */
p,
.summary {
    color: var(--muted);
    margin: .25rem 0;
}

/* Accessibility */
[role="button"]:focus {
    outline: 2px solid rgba(59, 130, 246, 0.18);
    outline-offset: 2px;
}
</style>
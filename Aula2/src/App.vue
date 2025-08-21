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
</script>
<style>
</style>
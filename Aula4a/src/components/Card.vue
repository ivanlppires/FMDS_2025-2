<template>
    <div class="card" role="region" aria-label="Exemplo de card">
        <header class="card__header">
            <span name="header">
                <h3 class="card__title">
                    {{ titulo }}
                </h3>
                <p class="card__subtitle">
                    {{ subtitulo }}
                </p>
            </span>
        </header>

        <main class="card__body">
            <span>
               {{ conteudo }}
            </span>
        </main>

        <footer class="card__footer">
            <span name="footer">
                <button type="button" class="btn btn--primary" aria-label="Editar" title="Editar">✏️</button>
                <button type="button" class="btn" aria-label="Excluir" title="Excluir">🗑️</button>
            </span>
        </footer>
    </div>
</template>
<script setup>
// Aqui você pode definir props para passar dados ao componente, se necessário

import { defineProps } from 'vue';
const props = defineProps({
    titulo: {
        type: String,
        default: 'Título do Card'
    },
    subtitulo: {
        type: String,
        default: 'Subtítulo do Card'
    },
    conteudo: {
        type: String,
        default: 'Conteúdo do Card'
    }
})

</script>
<style scoped>
/* Footer: um botão à esquerda e outro à direita */
.card__footer {
    display: flex;
    align-items: center;
    padding: 0;
}
.card__footer > span[name="footer"] {
    display: flex;
    width: 100%;
    justify-content: space-between;
    gap: 8px;
}
.card__footer .btn {
    margin: 0;
}
/* Layout responsivo: cards lado a lado, até 4 colunas */
.card {
    box-sizing: border-box;
    display: inline-block;
    vertical-align: top;
    margin: 8px;
    /* garantir que as larguras responsivas tenham precedência sobre regras posteriores */
    max-width: none !important;
    width: 100% !important;
}

/* 2 colunas em telas >= 480px */
@media (min-width: 480px) {
    .card { width: calc(50% - 16px) !important; }
}

/* 3 colunas em telas >= 768px */
@media (min-width: 768px) {
    .card { width: calc(33.333% - 16px) !important; }
}

/* 4 colunas em telas >= 1200px */
@media (min-width: 1200px) {
    .card { width: calc(25% - 16px) !important; }
}
:root{
    --card-bg: #121212;
    --card-border: #2b2b2b;
    --text: #e6e6e6;
    --muted: #9aa0a6;
    --btn-bg: #1f1f1f;
    --btn-hover: rgba(255,255,255,0.06);
    --primary: #0d6efd;
    --primary-hover: #0a58ca;
}

.card {
    background-color: var(--card-bg) !important;
    border: 1px solid var(--card-border) !important;
    box-shadow: 0 2px 6px rgba(0,0,0,0.6) !important;
    color: var(--text) !important;
}
.card__title { color: #fff !important; }
.card__subtitle { color: var(--muted) !important; }
.card__header, .card__footer, .card__body, p, li, span { color: inherit !important; }

.btn {
    background-color: var(--btn-bg) !important;
    color: var(--text) !important;
    border: none !important;
}
.btn--primary {
    background-color: var(--primary) !important;
    color: #fff !important;
}
.btn--primary:hover { background-color: var(--primary-hover) !important; }
.btn:hover { background-color: var(--btn-hover) !important; }
.card {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 16px;
    max-width: 400px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background-color: #fff;
}
.card__header, .card__footer {
    margin-bottom: 16px;
}
.card__title {
    margin: 0;
    font-size: 1.5em;
}
.card__subtitle {
    margin: 0;
    color: #666;
}
.card__body {
    margin-bottom: 16px;
}
.btn {
    padding: 8px 16px;
    border: none;
    border-radius: 4px; 
    cursor: pointer;
    margin-right: 8px;
}
.btn--primary {
    background-color: #007bff;
    color: #fff;
}
.btn--primary:hover {
    background-color: #0056b3;
}
.btn:hover {
    background-color: #e0e0e0;
}
</style>
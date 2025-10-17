<template>
    <v-card class="mx-auto" max-width="300">
        <v-list>
            <v-list-subheader>Menu Principal</v-list-subheader>

            <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" link>
                <template v-slot:prepend>
                    <v-icon :icon="item.icon"></v-icon>
                </template>

                <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item>
        </v-list>
    </v-card>
</template>
<script setup>
const items = [
    { text: 'Início', icon: 'mdi-home', to: "/" },
    { text: 'Clientes', icon: 'mdi-account', to: "/clientes" },
    { text: 'Produtos', icon: 'mdi-box', to: "/produtos" }
]
</script>
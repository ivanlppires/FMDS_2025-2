<template>
    <v-sheet border rounded>
        <v-data-table :headers="headers" :items="clientes">
            <template v-slot:top>
                <v-toolbar flat>
                    <v-toolbar-title>
                        <v-icon color="medium-emphasis" icon="mdi-account" size="x-small" start></v-icon>
                        Clientes </v-toolbar-title>

                    <v-btn class="me-2" prepend-icon="mdi-plus" rounded="lg" text="Novo" border @click="add"></v-btn>
                </v-toolbar>
            </template>

            <template v-slot:item.actions="{ item }">
                <div class="d-flex ga-2 justify-end">
                    <v-icon color="medium-emphasis" icon="mdi-pencil" size="small" @click="edit(item.id)"></v-icon>

                    <v-icon color="medium-emphasis" icon="mdi-delete" size="small" @click="remove(item.id)"></v-icon>
                </div>
            </template>
        </v-data-table>
    </v-sheet>

    <v-dialog v-model="dialog" max-width="500">
        <v-card>
            <v-card-title>Cliente</v-card-title>
            <v-card-text>
                <v-form>
                    <v-text-field label="Nome" required v-model="editCliente.name"></v-text-field>
                    <v-text-field label="Email" required v-model="editCliente.email"></v-text-field>
                </v-form>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text="Cancel" variant="plain" @click="dialog = false"></v-btn>
                <v-btn text="Salvar" @click="save"></v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>
<script setup>
import { ref, onMounted } from 'vue'
const headers = [
    { title: "Id", key: "id" },
    { title: "Nome", key: "name" },
    { title: "Email", key: "email" }
]
const clientes = ref([]);
const dialog = ref(false);

const editCliente = ref({id: null, name: '', email: ''});

const add = () => {
    dialog.value = true;
}

const save = async () => {
    const {name, email} = editCliente.value

    console.log(name, email);

    const response = await fetch('http://localhost:3000/clients', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name, email})
    });
    const newClient = await response.json();
    clientes.value.push(newClient);
    dialog.value = false;
    editCliente.value = {id: null, name: '', email: ''};
}

onMounted( async () =>  {
    const result = await fetch('http://localhost:3000/clients');
    const data = await result.json();
    console.log(data);
    clientes.value = data;
});
</script>
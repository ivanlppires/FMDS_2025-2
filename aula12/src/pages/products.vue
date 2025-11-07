<template>
    <v-row>
        <v-col cols="12" class="text-right mr-4">
            <v-btn color="primary" variant="outlined" @click="dialog = true">Adicionar Produto</v-btn>
        </v-col>
        <v-col md="4" sm="6" v-for="p in products" :key="p.id">
            <v-card>
                <v-img height="200px" :src="p.image" cover />
                <v-card-title>
                    {{ p.name }}
                </v-card-title>

                <v-card-actions>
                    <v-btn color="orange-lighten-2" text="Detalhes" @click="show[p.id] = !show[p.id]"></v-btn>
                    <v-spacer></v-spacer>
                    <v-btn :icon="show[p.id] ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                        @click="show[p.id] = !show[p.id]"></v-btn>
                    <v-btn icon="mdi-pencil" @click="loadEdit(p)" />
                    <v-btn icon="mdi-delete" @click="remove(p.id)" />
                </v-card-actions>
                <v-expand-transition>
                    <div v-show="show[p.id]">
                        <v-divider></v-divider>
                        <v-card-text>
                            {{ p.description }}
                        </v-card-text>
                    </div>
                </v-expand-transition>
            </v-card>
        </v-col>
    </v-row>
    <v-dialog v-model="dialog" max-width="600px">
        <v-card>
            <v-card-title>Adicionar Produto</v-card-title>
            <v-card-text>
                <v-text-field label="Nome" v-model="productEdit.name"></v-text-field>
                <v-textarea label="Descrição" v-model="productEdit.description"></v-textarea>
                <v-text-field label="Imagem (URL)" v-model="productEdit.image"></v-text-field>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text="Cancelar" @click="cancel"></v-btn>
                <v-btn color="primary" text="Salvar" @click="save"></v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>
<script setup>
import { supabase } from '../utils/supabase'
import { ref, onMounted } from 'vue';
const products = ref([]);
const productEdit = ref({});
const show = ref([])
const dialog = ref(false);
const load = async () => {
    const { data, error } = await supabase.from('products').select().order("name", {ascending: false})
    if (!error) products.value = data;
    console.log(products.value)
}
const remove = async (id) => {
    const { data, error } = await supabase.from('products').delete().eq("id", id);
    if (!error) load();
}
const save = async () => {
    let success = false;
    if (!!productEdit.value.id) {
        /* UPDATE */
        const { data, error } = await supabase.from('products').update(productEdit.value).eq('id', productEdit.value.id)
        success = !!!error;
    } else {
        /* CREATE */
        const { data, error } = await supabase.from('products').insert(productEdit.value);
        success = !!!error;
    }
    if (success) {
        dialog.value = false;
        productEdit.value = {};
        load();
    }
}
const loadEdit = (p) => {
    dialog.value = true;
    productEdit.value = {...p};
}
const cancel = () => {
    dialog.value = false;
    productEdit.value = {};
}
onMounted(() => {
    load()
});

</script>
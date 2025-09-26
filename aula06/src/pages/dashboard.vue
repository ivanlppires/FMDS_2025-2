<template>


    <v-container fluid class="pa-6">
        <!-- Stat cards -->
        <v-row class="mb-6" align="stretch">
            <v-col cols="12" sm="6" md="3" v-for="card in statCards" :key="card.title">
                <v-card class="stat-card" elevation="3">
                    <div class="stat-left">
                        <v-icon size="36" :class="card.iconColor">{{ card.icon }}</v-icon>
                        <div class="stat-value">{{ card.value }}</div>
                        <div class="stat-label">{{ card.title }}</div>
                    </div>
                    <div class="stat-right">
                        <v-progress-linear :value="card.progress" height="8" rounded color="primary" />
                        <div class="stat-change" :class="{ up: card.delta >= 0, down: card.delta < 0 }">
                            <v-icon small>{{ card.delta >= 0 ? 'mdi-trending-up' : 'mdi-trending-down' }}</v-icon>
                            {{ Math.abs(card.delta) }}%
                        </div>
                    </div>
                </v-card>
            </v-col>
        </v-row>

        <!-- Charts and tasks -->
        <v-row dense>
            <v-col cols="12" md="8">
                <v-card height="340" class="pa-4" elevation="3">
                    <div class="d-flex justify-space-between mb-4">
                        <div>
                            <div class="headline">Visitas e Conversões</div>
                            <div class="caption">Últimos 30 dias</div>
                        </div>
                        <div class="d-flex align-center">
                            <v-btn text small @click="range = '30d'">30d</v-btn>
                            <v-btn text small @click="range = '7d'">7d</v-btn>
                            <v-btn text small @click="range = '1d'">1d</v-btn>
                        </div>
                    </div>

                    <div class="chart-area">
                        <svg viewBox="0 0 600 200" preserveAspectRatio="none">
                            <polyline :points="visitsPath" fill="none" stroke="#3f51b5" stroke-width="3"
                                stroke-linecap="round" stroke-linejoin="round" opacity="0.18" />
                            <polyline :points="visitsPath" fill="none" stroke="#1e88e5" stroke-width="3"
                                stroke-linecap="round" stroke-linejoin="round" />
                            <polyline :points="convPath" fill="none" stroke="#ff7043" stroke-width="3"
                                stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>

                    <div class="mt-3 d-flex justify-space-between">
                        <div class="d-flex align-center">
                            <div class="legend dot blue"></div> Visitas
                            <div class="ml-4 legend dot orange"></div> Conversões
                        </div>
                        <div class="caption">Total visitas: {{ totalVisits }} • Conversões: {{ totalConv }}</div>
                    </div>
                </v-card>
            </v-col>

            <v-col cols="12" md="4">
                <v-card height="340" class="pa-4" elevation="3">
                    <div class="headline mb-2">Status de Conversão</div>
                    <div class="caption mb-4">Taxa atual por canal</div>

                    <div class="d-flex align-center justify-center" style="height:170px">
                        <svg viewBox="0 0 40 40" width="160" height="160">
                            <circle r="16" cx="20" cy="20" fill="transparent" stroke="#eee" stroke-width="8" />
                            <circle r="16" cx="20" cy="20" fill="transparent" stroke="#1e88e5" stroke-width="8"
                                stroke-dasharray="100" :stroke-dashoffset="100 - conversionRate" stroke-linecap="round"
                                transform="rotate(-90 20 20)" />
                            <text x="20" y="22" text-anchor="middle" font-size="6" fill="#333">{{ conversionRate
                                }}%</text>
                        </svg>
                    </div>

                    <v-list dense class="mt-2">
                        <v-list-item v-for="(c, i) in channels" :key="c.name">
                            <v-list-item-avatar tile size="36" :color="c.color">
                                <v-icon small dark>{{ c.icon }}</v-icon>
                            </v-list-item-avatar>
                            <v-list-item-content>
                                <v-list-item-title>{{ c.name }}</v-list-item-title>
                                <v-list-item-subtitle>{{ c.rate }}% • {{ c.count }} conversões</v-list-item-subtitle>
                            </v-list-item-content>
                            <v-list-item-action-text class="caption">{{ c.share }}%</v-list-item-action-text>
                        </v-list-item>
                    </v-list>
                </v-card>
            </v-col>
        </v-row>

        <!-- Table & activity -->
        <v-row class="mt-6" dense>
            <v-col cols="12" md="7">
                <v-card elevation="3">
                    <v-card-title>
                        Principais Usuários
                        <v-spacer />
                        <v-btn small text @click="refresh">Atualizar</v-btn>
                    </v-card-title>

                    <v-data-table :items="users" :headers="userHeaders" class="elevation-0" dense>
                        <template #item.name="{ item }">
                            <div class="d-flex align-center">
                                <v-avatar size="36" class="mr-3"><img :src="item.avatar" /></v-avatar>
                                <div>
                                    <div class="subtitle-2">{{ item.name }}</div>
                                    <div class="caption">{{ item.email }}</div>
                                </div>
                            </div>
                        </template>

                        <template #item.actions>
                            <v-btn icon small><v-icon>mdi-eye</v-icon></v-btn>
                            <v-btn icon small color="primary"><v-icon>mdi-message</v-icon></v-btn>
                        </template>
                    </v-data-table>
                </v-card>
            </v-col>

            <v-col cols="12" md="5">
                <v-card elevation="3" class="pa-4">
                    <div class="headline mb-3">Atividade Recente</div>
                    <v-timeline dense>
                        <v-timeline-item v-for="(a, i) in activity" :key="i" :color="a.color">
                            <div class="subtitle-2">{{ a.title }}</div>
                            <div class="caption">{{ a.time }}</div>
                        </v-timeline-item>
                    </v-timeline>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import { ref, computed } from 'vue'

const drawer = ref(true)
const search = ref('')
const range = ref('30d')

const statCards = [
    { title: 'Usuários Ativos', value: '8.2k', progress: 72, delta: 12, icon: 'mdi-account', iconColor: 'blue--text' },
    { title: 'Novos Leads', value: '1.1k', progress: 44, delta: -4, icon: 'mdi-account-plus', iconColor: 'green--text' },
    { title: 'Receita', value: 'R$ 24.6k', progress: 61, delta: 6, icon: 'mdi-cash-multiple', iconColor: 'orange--text' },
    { title: 'Conversão', value: '4.8%', progress: 48, delta: 2, icon: 'mdi-arrow-up-bold', iconColor: 'purple--text' },
]

const visits = [30, 40, 36, 50, 60, 55, 70, 62, 75, 80, 78, 85]
const conv = visits.map(v => Math.round(v * 0.06 + Math.random() * 3))

const svgPoints = (arr) => {
    const w = 600
    const h = 200
    const len = arr.length
    const max = Math.max(...arr) || 1
    return arr.map((v, i) => `${(i / (len - 1)) * w},${h - (v / max) * (h - 30)}`).join(' ')
}

const visitsPath = computed(() => svgPoints(visits))
const convPath = computed(() => svgPoints(conv))

const totalVisits = visits.reduce((a, b) => a + b, 0)
const totalConv = conv.reduce((a, b) => a + b, 0)

const conversionRate = Math.round((totalConv / totalVisits) * 100) || 0

const channels = [
    { name: 'Organic', rate: 3.6, count: 420, share: 55, icon: 'mdi-earth', color: 'blue lighten-2' },
    { name: 'Paid', rate: 1.8, count: 120, share: 25, icon: 'mdi-currency-usd', color: 'orange lighten-1' },
    { name: 'Referral', rate: 0.9, count: 45, share: 20, icon: 'mdi-link', color: 'green lighten-1' },
]

const users = [
    { name: 'Ana Silva', email: 'ana@example.com', avatar: 'https://i.pravatar.cc/100?img=32', role: 'Admin' },
    { name: 'Bruno Costa', email: 'bruno@example.com', avatar: 'https://i.pravatar.cc/100?img=12', role: 'Editor' },
    { name: 'Carla Souza', email: 'carla@example.com', avatar: 'https://i.pravatar.cc/100?img=44', role: 'Viewer' },
    { name: 'Daniel Reis', email: 'daniel@example.com', avatar: 'https://i.pravatar.cc/100?img=22', role: 'Viewer' },
]

const userHeaders = [
    { title: 'Usuário', key: 'name' },
    { title: 'Função', key: 'role' },
    { title: 'Ações', key: 'actions', sortable: false },
]

const activity = [
    { title: 'Ana criou um novo relatório', time: '2h atrás', color: 'blue' },
    { title: 'Bruno importou dados', time: '4h atrás', color: 'green' },
    { title: 'Carla comentou um ticket', time: 'ontem', color: 'orange' },
]

function refresh() {
    // Simula atualização simples: roda dados
    visits.push(Math.max(20, Math.round(50 + Math.random() * 40)))
    conv.push(Math.round(visits[visits.length - 1] * 0.06 + Math.random() * 3))
}
</script>

<style scoped>
.drawer {
    background: linear-gradient(180deg, #ffffff, #fafafa);
}

.drawer-header {
    display: flex;
    align-items: center;
    padding: 16px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.04);
}

.stat-card {
    display: flex;
    justify-content: space-between;
    padding: 18px;
    border-radius: 12px;
    height: 120px;
}

.stat-left {
    display: flex;
    flex-direction: column;
    gap: 6px;
}

.stat-right {
    width: 45%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    align-items: flex-end;
}

.stat-value {
    font-weight: 700;
    font-size: 1.15rem;
}

.stat-label {
    color: rgba(0, 0, 0, 0.6);
    font-size: 0.85rem;
}

.stat-change.up {
    color: #2e7d32;
    display: flex;
    align-items: center;
    gap: 6px
}

.stat-change.down {
    color: #c62828;
    display: flex;
    align-items: center;
    gap: 6px
}

.search {
    max-width: 320px
}

.chart-area {
    height: 200px;
    width: 100%;
}

svg {
    width: 100%;
    height: 100%;
}

.legend.dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    display: inline-block;
    margin-right: 8px;
}

.legend.dot.blue {
    background: #1e88e5
}

.legend.dot.orange {
    background: #ff7043
}

.v-data-table .v-data-table__wrapper tr td {
    vertical-align: middle;
}

.timeline {
    max-height: 260px;
    overflow: auto;
}

.headline {
    font-weight: 600
}

.subtitle-2 {
    font-weight: 600
}

.v-card {
    border-radius: 12px
}
</style>
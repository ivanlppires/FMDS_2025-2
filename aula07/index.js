import express from 'express'
import clientRoutes from './routes/ClientRoutes.js'
import productRoutes from './routes/ProductRoutes.js'
import cors from 'cors'

const app = express()
app.use(cors()) // habilita CORS para todos

app.use(express.json()) // Middleware para interpretar JSON no corpo das requisições
app.use('/clients', clientRoutes) // Usando as rotas de clientes
app.use('/products', productRoutes) // Usando as rotas de produtos

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
})
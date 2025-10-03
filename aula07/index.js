import express from 'express'
const app = express()

app.use(express.json()) // Middleware para interpretar JSON no corpo das requisições


// Rota para a página inicial
app.get('/', (req, res) => {
    res.send('seja bem vindo a página inicial')
})

// Rotas para CRUD de clientes
// Criar um novo cliente (CREATE => POST)
app.post('/clientes', (req, res) => {
    const cliente = req.body
    // Aqui você adicionaria o cliente ao banco de dados
    res.status(201).send(`Cliente ${cliente.nome} criado com sucesso!`)
  })

// Rota para obter dados dos cliente (READ => GET)
app.get('/clientes', (req, res) => {
    // Buscaria do banco de dados todos os clientes e entregaria na resposta 
    res.status(200).send('Lista de clientes')
})
// Rota para obter dados de um cliente específico (READ => GET)
app.get('/clientes/:id', (req, res) => {
    const id = req.params.id
    // Buscaria do banco de dados o cliente com o ID fornecido
    res.status(200).send(`Detalhes do cliente com ID ${id}`)
})
// Rota para atualizar dados de um cliente (UPDATE => PUT)
app.put('/clientes/:id', (req, res) => {
    const id = req.params.id
    const clienteAtualizado = req.body
    // Aqui você atualizaria o cliente no banco de dados
    res.status(200).send(`Cliente com ID ${id} atualizado com sucesso!`)
})
// Rota para deletar um cliente (DELETE => DELETE)
app.delete('/clientes/:id', (req, res) => {
    const id = req.params.id
    // Aqui você deletaria o cliente do banco de dados
    res.status(200).send(`Cliente com ID ${id} deletado com sucesso!`)
})

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
})
import express from 'express'
import connection from './db'
const app = express()

app.use(express.json()) // Middleware para interpretar JSON no corpo das requisições


// Rota para a página inicial
app.get('/', (req, res) => {
    res.send('seja bem vindo a página inicial')
})

// ####### Rotas para CRUD de clientes ######

// Criar um novo cliente (CREATE => POST)
app.post('/clientes', (req, res) => {
    const cliente = req.body

    connection.query('INSERT INTO clientes SET ?', cliente, (err, results) => {
        if (err) {
            console.error('Erro ao criar cliente:', err)
            res.status(500).send('Erro ao criar cliente')
            return
        }
        res.status(201).send(`Cliente ${cliente.nome} criado com sucesso!`)
    })
})

// Rota para obter dados dos cliente (READ => GET)
app.get('/clientes', (req, res) => {
    connection.query('SELECT * FROM clientes', (err, results) => {
        if (err) {
            console.error('Erro ao obter clientes:', err)
            res.status(500).send('Erro ao obter clientes')
            return
        }
        res.status(200).json(results)
    })
})
// Rota para obter dados de um cliente específico (READ => GET)
app.get('/clientes/:id', (req, res) => {
    const id = req.params.id
    connection.query('SELECT * from clientes WHERE id = ?', [id], (err, results) => {
        if (err) {
            console.error('Erro ao obter cliente:', err)
            res.status(500).send('Erro ao obter cliente')
            return
        }
        if (results.length === 0) {
            res.status(404).send('Cliente não encontrado')
            return
        }
        res.status(200).json(results[0])
    })
})

// Rota para atualizar dados de um cliente (UPDATE => PUT)
app.put('/clientes/:id', (req, res) => {
    const id = req.params.id
    const clienteAtualizado = req.body
    connection.query('UPDATE clientes SET ? WHERE id = ?', [clienteAtualizado, id], (err, results) => {
        if (err) {
            console.error('Erro ao atualizar cliente:', err)
            res.status(500).send('Erro ao atualizar cliente')
            return
        }
        res.status(200).send(`Cliente com ID ${id} atualizado com sucesso!`)
    })
})

// Rota para deletar um cliente (DELETE => DELETE)
app.delete('/clientes/:id', (req, res) => {
    const id = req.params.id
    connection.query('DELETE FROM clientes WHERE id = ?', [id], (err, results) => {
        if (err) {
            console.error('Erro ao deletar cliente:', err)
            res.status(500).send('Erro ao deletar cliente')
            return
        }
        res.status(200).send(`Cliente com ID ${id} deletado com sucesso!`)
    })
})

// ##### CRUD DE PRODUTOS ####

app.post('/produtos', (req, res) => {
    const produto = req.body;
    connection.query('INSERT INTO produtos SET ?', produto, (err, results)=>{
        if(err){
            res.status(500).send('Erro ao cadastrar o produto');
            return;
        }
        res.status(201).send(`Produto ${produto.nome} cadastrado com sucesso!`)
    });
})
/* CRIE AS DEMAIS ROTAS PARA PRODUTOS E FAÇA OUTRA PARA USUÁRIOS */

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
})
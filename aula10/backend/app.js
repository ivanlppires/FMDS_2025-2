import express from "express";
import cors from 'cors'
import checkToken from './verificatoken'

const app = express();
app.use(cors())
app.use(express.json())

const cidades = ["sinop", "colider", "sorriso", "vera", "st carmen", "claudia"];
const clientes = ['ivan', 'joao', 'lucas', 'gabriel', 'elaine']

app.get("/publica", (req, res) => {
  res.status(200).json(cidades);
});
app.get("/protegida", checkToken, (req, res) => {
    res.status(200).json(clientes)
})
app.listen(5000, () => console.log("Servidor rodando na porta 5000"));

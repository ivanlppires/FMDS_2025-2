import express from "express";
import {createClient, getClients, getClientById, updateClient, deleteClient} from "../controller/ClientController.js";
const router = express.Router();

/* CRUD para clientes */

router.post("/", createClient); // Create - Criar um novo cliente

router.get("/", getClients); // Read - Obter todos os clientes

router.get("/:id", getClientById); // Read - Obter um cliente por ID

router.put("/:id", updateClient);// Update - Atualizar um cliente por ID

router.delete("/:id", deleteClient);// Delete - Deletar um cliente por ID


export default router;

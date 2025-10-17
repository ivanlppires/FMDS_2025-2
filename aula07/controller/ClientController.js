import db from '../config/db.js';
const mysql = db.promise();

// Create a new client
const createClient = async (req, res) => {
  const { name, email } = req.body;
  const query = "INSERT INTO clients (name, email) VALUES (?, ?)";

  try {
    const [result] = await mysql.query(query, [name, email]);
    const clientId = result.insertId;
    console.log('NOVO ID:', clientId);
    res.status(201).json({ id: clientId, name, email });
  } catch (error) {
    res.status(500).json({ error: "Error creating client" });
  }
};

// Read all clients
const getClients = async (req, res) => {
  const query = "SELECT * FROM clients";

  try {
    const clients = await mysql.query(query);
    res.status(200).json(clients[0]);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error fetching clients" });
  }
};

// Get a client by ID
const getClientById = async (req, res) => {
  const { id } = req.params;
  const query = "SELECT * FROM clients WHERE id = ?";

  try {
    const [rows] = await mysql.query(query, [id]);
    if (rows.length > 0) {
      res.status(200).json(rows[0]);
    } else {
      res.status(404).json({ error: "Client not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error fetching client" });
  }
};

// Update a client
const updateClient = async (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  const query = "UPDATE clients SET name = ?, email = ? WHERE id = ?";

  try {
    await mysql.query(query, [name, email, id]);
    res.status(200).json({ message: "Client updated successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error updating client" });
  }
};

// Delete a client
const deleteClient = async (req, res) => {
  const { id } = req.params;
  const query = "DELETE FROM clients WHERE id = ?";

  try {
    await mysql.query(query, [id]);
    res.status(200).json({ message: "Client deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting client" });
  }
};

export {
  createClient,
  getClients,
  getClientById,
  updateClient,
  deleteClient,
};
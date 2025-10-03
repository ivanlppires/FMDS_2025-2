import mysql from 'mysql2'

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'ivanpires',
    password: '123456',
    database: 'clientes'
});

connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
    }
    console.log('Conexão ao banco de dados estabelecida com sucesso!');
});

export default connection;
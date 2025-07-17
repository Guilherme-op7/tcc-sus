const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'tcc'
});

db.connect (
  console.log('Conectado ao mysql')
)
module.exports = db;
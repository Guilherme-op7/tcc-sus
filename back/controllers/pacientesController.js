const express = require('express')
const app = express();
const db = require('../database/connection');


app.use(express.json());

app.get('/', (req, res) => {
    db.query('SELECT * FROM pacientes', (err, results) => {
        res.json(results)
    });
});

app.get('/:id', (req, res) => {
    const { id } = req.params;
    db.query('SELECT * FROM pacientes WHERE  id = ?', [id], (err, results) => {
        res.json(results[0])
    })
})

app.delete('/:id', (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM pacientes WHERE id = ?', [id], () => {
        res.send(`Paciente ${id}, deletado com sucesso!`)
    })
})

module.exports = app;
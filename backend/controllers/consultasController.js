const express = require('express')
const app = express();
const db = require('../database/connection')

app.use(express.json())

app.get('/', (req, res) => {
    db.query('SELECT * FROM consultas', (err, results) => {
        res.json(results);
    });
});

app.get('/:id', (req, res) => {
    const { id } = req.params;
    const dadosAtualizados = req.body;

    db.query('SELECT * FROM consultas WHERE  id = ?', [id], (err, results) => {
        res.json(results[0])
    })
});

app.post('/', (req, res) => {
    const dados = req.body;

    const sql = 'INSERT INTO consultas SET ?'
    db.query(sql, dados, (err, result) => {
        if (err) {
            console.error('Erro ao inserir consulta:', err);
            return res.status(500).json({ erro: 'Erro ao criar consulta' });
        }

    res.status(201).json({ mensagem: 'Consulta criada com sucesso', id: result.insertId });
    })  
})

app.put('/:id', (req, res) => {
  const { id } = req.params;
  const dadosAtualizados = req.body;

  const sql = 'UPDATE consultas SET ? WHERE id = ?';

  db.query(sql, [dadosAtualizados, id], (err, result) => {
    if (err) {
      console.error('Erro ao atualizar consulta:', err);
      return res.status(500).json({ erro: 'Erro ao atualizar consulta' });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ mensagem: 'Consulta não encontrada' });
    }

    res.json({ mensagem: 'Consulta atualizada com sucesso' });
  });
});


app.delete('/:id', (req, res) => {
    const { id } = req.params;

    db.query('DELETE FROM consultas WHERE id = ?', [id], () => {
        res.send(`Paciente de ${id}, deletado com sucesso!`)
    })
})

module.exports = app;
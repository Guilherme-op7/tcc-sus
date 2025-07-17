const express = require('express');
const app = express();
const PacientesRoutes = require('../backend/controllers/pacientesController')

app.use('/pacientes', PacientesRoutes);

app.get('/', (req, res) => {
  res.send('Api de Pacientes Funcionando!')
})

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});

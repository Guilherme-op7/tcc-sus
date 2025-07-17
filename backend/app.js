const express = require('express');
const app = express();

const PacientesRoutes = require('../backend/controllers/pacientesController')
const ConsultasRoutes = require('../backend/controllers/consultasController')

app.use('/pacientes', PacientesRoutes);
app.use('/consultas', ConsultasRoutes);

app.get('/', (req, res) => {

  res.send('Api de Pacientes e Consultas, Funcionando!')

})


app.listen(3000, () => {

  console.log('Servidor rodando na porta 3000');

});

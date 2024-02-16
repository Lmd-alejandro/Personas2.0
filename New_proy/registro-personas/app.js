const express = require('express');
const bodyParser = require('body-parser');
const { Persona, Sitio, Visita } = require('./models');
const { sequelize } = require('./models');
sequelize.sync()
    .then(() => console.log("modelos sincronizados"))
sequelize.authenticate()
    .then(() => console.log("conectado"))

const app = express();
app.use(bodyParser.json());

// Endpoints aquí...

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});

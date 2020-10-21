const express = require('express');
const routeSaludos = require('./routes/saludos.routes');

//Obtenemos el servidor
const app = express();
app.use("/saludos", routeSaludos);

module.exports = app;
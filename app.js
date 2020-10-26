const bodyParser = require('body-parser');
const express = require('express');
const routeSaludos = require('./routes/saludos.routes');
const routeArray = require('./routes/arrayHandler.routes');


//Obtenemos el servidor
const app = express();
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());
app.use("/saludos", routeSaludos);
app.use("/array", routeArray);

module.exports = app;
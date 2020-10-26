const express = require('express');
const {recorriendoArreglo, modificandoArreglo, todos} = require('../controllers/arrayHandler.controller');
const api = express.Router();

api.post("/for-each", recorriendoArreglo);

api.post("/map", modificandoArreglo);
api.post("/every", todos);

module.exports = api;
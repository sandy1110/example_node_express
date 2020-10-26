const express = require('express');
const {recorriendoArreglo, modificandoArreglo} = require('../controllers/arrayHandler.controller');
const api = express.Router();

api.post("/for-each", recorriendoArreglo);

api.post("/map", modificandoArreglo);

module.exports = api;
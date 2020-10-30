const express = require('express');
const {recorriendoArreglo, modificandoArreglo, todos, algunos, ordenar, reducir, indice} = require('../controllers/arrayHandler.controller');
const api = express.Router();

api.post("/for-each", recorriendoArreglo);
api.post("/map", modificandoArreglo);
api.post("/every", todos);
api.post("/some", algunos);
api.post("/sort", ordenar);
api.post("/reduce", reducir);
api.post("/indexOf", indice);

module.exports = api;
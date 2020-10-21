const express = require('express');
const saludosController = require('../controllers/saludos.controller');
const api = express.Router();

api.get("/hola", saludosController.saludoES)

api.get('/hello', saludosController.saludoEN)

module.exports = api;
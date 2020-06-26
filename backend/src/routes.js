const express = require('express');
const routes = express.Router();
const CartaController = require('./controllers/CartaController')

routes.post('/carta', CartaController.getChart)

module.exports = routes;
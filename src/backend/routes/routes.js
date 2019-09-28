const express = require('express');
const routes = new express.Router();

const Controller = require('../controllers/controller');

routes.get('/', Controller.index);

module.exports = routes;
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const routes = require('./routes/index');

const server = express();

server.name = 'API';

server.use(morgan('dev'));
server.use(bodyParser.json());

server.use('/', routes);

module.exports = server;
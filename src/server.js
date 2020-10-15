//  import depedencia 
const express = require('express');
const path = require('path');
const pages = require('./pages.js');

// iniciando express
const server = express();
// utilizando os arquivos estaticos
server
.use(express.static("public"))

// configurar templete engine
.set('views', path.join(__dirname, 'views'))
.set('view engine', 'hbs')

// Rotas da aplicacao
.get('/', pages.index)
.get('/orphanage', pages.orphanage)
.get('/orphanages', pages.orphanages)
.get('/create-orphanage', pages.createOrphanage)


// ligar o servidor 
server.listen(5500)
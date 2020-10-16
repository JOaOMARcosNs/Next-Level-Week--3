//  import depedencia 
const express = require('express');
const path = require('path');
const pages = require('./pages.js');

// iniciando express
const server = express();
server
// utilizar body do req
.use(express.urlencoded({ expected: true }))
// utilizando os arquivos estaticos

.use(express.static("public"))

// configurar templete engine
.set('views', path.join(__dirname, 'views'))
.set('view engine', 'hbs')

// Rotas da aplicacao
.get('/', pages.index)
.get('/orphanage', pages.orphanage)
.get('/orphanages', pages.orphanages)
.get('/create-orphanage', pages.createOrphanage)
.post('/save-orphanage', pages.saveOrphanage)

// ligar o servidor 
server.listen(5500)
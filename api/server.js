const express = require('express')
const helmet = require('helmet')
const carsRouter = require('../cars/cars-router.js')
const server = express()

server.use(helmet())
server.use(express.json())
server.use('/cars', carsRouter)

server.get('/', (req, res) => res.send('WEBDB2'))

module.exports = server

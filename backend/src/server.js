require('dotenv').config()
const express = require('express')
const routes = require('./routes')

const http = require('http')

const app = express()
const server = http.Server(app)

app.use(express.json())
app.use(routes)

console.log('Server running on port 3334')
server.listen(3334)
require('dotenv').config()
const express = require('express'),
        massive = require('massive'),
        ctrl = require('./controller')

const app = express()
const {CONNECTION_STRING, SESSION_SECRET, SERVER_PORT} = process.env

app.use(express.json())

massive(CONNECTION_STRING).then((database) => {
        app.set('db', database)
        console.log('database set!', database.listTables())
        app.listen(SERVER_PORT, () => console.log(`Port ${SERVER_PORT} is alive and well`))
})

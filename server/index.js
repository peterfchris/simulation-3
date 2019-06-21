require('dotenv').config()
const express = require('express'),
        massive = require('massive'),
        session = require('express-session'),
        ctrl = require('./controller')

const app = express()
const {CONNECTION_STRING, SESSION_SECRET, SERVER_PORT} = process.env

app.use(express.json())
app.use(
        session({
                secret: SESSION_SECRET,
                saveUninitialized: false,
                resave: false,
                cookie: {
                        maxAge: 1000 * 60 * 60
                }
        })
)

massive(CONNECTION_STRING).then((database) => {
        app.set('db', database)
        console.log('database set!', database.listTables())
        app.listen(SERVER_PORT, () => console.log(`Port ${SERVER_PORT} is alive and well`))
})

app.post('/auth/register', ctrl.register)
app.post('/auth/login', ctrl.login)
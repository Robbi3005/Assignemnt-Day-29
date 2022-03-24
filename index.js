require("dotenv").config()

//activating database
const activeDataBaseFunction = require('./config/setup')

//------------------------------------------------------------------

const express = require('express');
const app = express()
app.use(express.json());

const port = process.env.PORT || 3000

//------------------------------------------------------------------

var bodyParser = require('body-parser')
app.use(bodyParser.json())

//------------------------------------------------------------------

const router = require('./router/router')
app.use('/', router)

//------------------------------------------------------------------

//connecting database mysql and running server 
app.listen(port, () => {
    console.log(`app is running on localhost ${port}`)
})
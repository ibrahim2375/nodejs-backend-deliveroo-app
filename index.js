const express = require('express');
require('dotenv').config();


//router
const router = require('./src/router');
//db
// const connection = require('./config/database');
// Variables
const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST

const app = express();

// Middlewares
app.use(express.static(__dirname + '/public'));
app.use(express.json());


//router
app.use('/', router);
//server running
app.listen(PORT, () => {
    // connection();
    console.log(`server running successfully on: http://${HOST}:${PORT}`)
})
const express = require('express');
const cors = require('cors');
require("dotenv").config() // Load ENV Variables
const bodyParser = require('body-parser');

const app =express();



// Init Middleware
app.use(express.json({ extended: false }));

//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true }));

app.get('/js/mon_script.js', (req, res) => {
    res.type('application/javascript');
    res.sendFile(__dirname + '/js/mon_script.js');
  });

app.use(cors({
    origin: '*'
  }));
  
  app.get('/', (req, res) => {
    res.sendFile(__dirname + '/drag.html');
  });
  app.get('/show', (req, res) => {
    res.sendFile(__dirname + '/read.html');
  });

app.use('/list', require('./routes/listRoutes'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Now Listening on port ${PORT}`))
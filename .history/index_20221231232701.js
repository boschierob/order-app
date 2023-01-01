const express = require('express');
const cors = require('cors');
require("dotenv").config() // Load ENV Variables
const app =express();



// Init Middleware
app.use(express.json({ extended: false }));

app.use(cors({
    origin: '*'
  }));
  

app.use('/list', require('./routes/listRoutes'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Now Listening on port ${PORT}`))
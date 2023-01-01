const express = require('express');
require("dotenv").config() // Load ENV Variables
const app =express();

app.use('/list', require('./routes/listRoutes'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Now Listening on port ${PORT}`))
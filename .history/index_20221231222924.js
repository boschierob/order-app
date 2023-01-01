const express = require('express');

require("dotenv").config() // Load ENV Variables

console.log(process.env) // remove this after you've confirmed it is working

const app =express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Now Listening on port ${PORT}`))
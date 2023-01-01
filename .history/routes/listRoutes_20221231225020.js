const express = require('express');
const router = express.Router();
const fs = require('fs');


router.post("/", async (req, res) => {
    const data = req.body;
    //create the new stock of amenities
    fs.createFile('./data/list', data, ()=>{
        console.log(data);
        res.end(data);
    })
    // redirect to main page
    res.redirect("/")
})
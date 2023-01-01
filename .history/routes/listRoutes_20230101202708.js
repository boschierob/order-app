const express = require('express');
const router = express.Router();
const fs = require('fs');

//list route : "/list/"
router.post("/", async (req, res) => {
    const data = JSON.stringify(req.body);
    //create the new stock of amenities
    fs.writeFile('./data/list.json', data, ()=>{
        response.json({ message: "Le traitement est terminé" });
    })
   
})

router.get('/', (req, res) => {
    fs.readFile('./data/list.json','utf8', (err, data) => {
        if (err) {
          console.error(err);
          return;
        }
        res.send(data);
    })
   // res.send({ message: 'Hello, World!' });
  });
  
module.exports = router;
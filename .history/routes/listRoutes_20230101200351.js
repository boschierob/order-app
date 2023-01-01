const express = require('express');
const router = express.Router();
const fs = require('fs');

//list route : "/list/"
router.post("/", async (req, res) => {
    const data = JSON.stringify(req.body);
    //create the new stock of amenities
    fs.writeFile('./data/list.json', data, ()=>{
        res.send(data);
        response.redirect('/resultats');
        res.end();
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
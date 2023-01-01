const express = require('express');
const router = express.Router();
const fs = require('fs');

//list route : "/list/"
router.post("/", async (req, res) => {
    const data = JSON.stringify(req.body);
    //create the new stock of amenities
    fs.writeFile('./data/list.json', data, ()=>{
        console.log(data);
        res.end(data);
    })
})

router.get("/show",() => {
    // Traitement de la requête et envoi de la réponse    
    fs.readFile('./data/list.json', (error, data) => {
        if (error) {
          console.error(error)
          return
        }
        console.log(data.toJSON())
      })
  })

module.exports = router;
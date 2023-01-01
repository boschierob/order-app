const express = require('express');
const router = express.Router();
const fs = require('fs');
const mailer = require('./mailer');

//list route : "/list/"
router.post("/", async (req, res) => {
    const data = JSON.stringify(req.body);
    //create the new stock of amenities
    fs.writeFile('./data/list.json', data, () => {

        // Envoyer un email
        try {
            await mailer.sendMail(
                'bosc8088@gmail.com.com, boschierob@gmail.com',
                'Nouvelle commande reçue',
                'Voici la nouvelle commande : ' + data
            );
            res.json({ message: "Le traitement et l'envoi d'email sont terminés" })
        } catch (error) {
            console.log(error)
        }
    })

})

router.get('/', (req, res) => {
    fs.readFile('./data/list.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        res.send(data);
    })
    // res.send({ message: 'Hello, World!' });
});

module.exports = router;
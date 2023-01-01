const express = require('express');
const router = express.Router();
const fs = require('fs');
const mailer = require('./mailer');

//list route : "/list/"
router.post("/", async (req, res) => {
    const data = JSON.stringify(req.body);
    //create the new stock of amenities
    fs.writeFile('./data/list.json', data, () => {
        res.json({ message: "Le traitement est terminé" });
    })

})

router.get('/', (req, res) => {
    fs.readFile('./data/list.json', 'utf8', async (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        res.send(data);
        // Envoyer un email
        try {
            await mailer.sendMail(
                'boschierob@gmail.com',
                'Nouvel inventaire de commodités',
                'Voici le nouvel inventaire de commodités : ' + data
            );
            console.log("Message sent: %s", info.messageId);

  // Preview only available when sending through an Ethereal account
            console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
            res.json({ message: "Le traitement et l'envoi d'email sont terminés" });
        } catch (error) {
            console.log(error);
        }
    })
    // res.send({ message: 'Hello, World!' });
});

module.exports = router;
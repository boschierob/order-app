const nodemailer = require('nodemailer');

let testAccount = await nodemailer.createTestAccount();

// Créer un transporteur de courriel en utilisant une adresse Gmail
const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
});

// Exporter la fonction sendMail
module.exports = {
  sendMail: async function(to, subject, text) {
    // Préparer l'email
    const mailOptions = {
      from: 'contact.nickelnet@gmail.com', // Adresse de l'expéditeur
      to: to, // Liste des destinataires (séparés par une virgule)
      subject: subject, // Objet de l'email
      text: text // Corps de l'email (en texte brut)
    };

    // Envoyer l'email
    return transporter.sendMail(mailOptions);
  }
};

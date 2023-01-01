const nodemailer = require('nodemailer');

// Créer un transporteur de courriel en utilisant une adresse Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '_mainaccount@bobr5923.odns.fr',
    pass: 'opspeBB78!'
  }
});

// Exporter la fonction sendMail
module.exports = {
  sendMail: function(to, subject, text) {
    // Préparer l'email
    const mailOptions = {
      from: 'bosc8088@gmail.com', // Adresse de l'expéditeur
      to: to, // Liste des destinataires (séparés par une virgule)
      subject: subject, // Objet de l'email
      text: text // Corps de l'email (en texte brut)
    };

    // Envoyer l'email
    return transporter.sendMail(mailOptions);
  }
};

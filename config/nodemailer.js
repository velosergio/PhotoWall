const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'Hostinger', // O usa otro servicio de correo electrónico
    auth: {
        user: 'no-reply@hostinger.com', // tu correo electrónico
        pass: '#DontbeEvilPl1s' // tu contraseña
    }
});

module.exports = transporter;

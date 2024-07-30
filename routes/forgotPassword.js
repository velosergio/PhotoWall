const express = require('express');
const router = express.Router();
const crypto = require('crypto');
const path = require('path');
const db = require('../models/user');
const transporter = require('../config/nodemailer');

// Ruta para la página de "Forgot Password"
router.get('/forgot-password', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/forgot-password.html'));
});

// Ruta para manejar el envío del formulario de "Forgot Password"
router.post('/forgot-password', (req, res) => {
    const { email } = req.body;
    db.get(`SELECT * FROM users WHERE email = ?`, [email], (err, user) => {
        if (err) return res.status(500).send('Error del servidor');
        if (!user) return res.status(400).send('No existe una cuenta con ese correo electrónico');

        // Generar un token de restablecimiento
        const token = crypto.randomBytes(20).toString('hex');
        const resetPasswordExpires = Date.now() + 3600000; // 1 hora

        db.run(`UPDATE users SET resetPasswordToken = ?, resetPasswordExpires = ? WHERE email = ?`, 
            [token, resetPasswordExpires, email], (err) => {
                if (err) return res.status(500).send('Error del servidor');

                const mailOptions = {
                    to: email,
                    from: 'no-reply@photowall.com',
                    subject: 'Restablecer contraseña',
                    text: `Recibió esto porque usted (u otra persona) ha solicitado el restablecimiento de la contraseña de su cuenta.\n\n` +
                          `Haga clic en el siguiente enlace o péguelo en su navegador para completar el proceso dentro de una hora a partir de ahora:\n\n` +
                          `http://${req.headers.host}/reset/${token}\n\n` +
                          `Si no solicitó esto, ignore este correo electrónico y su contraseña permanecerá sin cambios.\n`
                };

                transporter.sendMail(mailOptions, (err) => {
                    if (err) return res.status(500).send('Error al enviar el correo electrónico');
                    res.send('Se ha enviado un correo electrónico a ' + email + ' con más instrucciones.');
                });
            }
        );
    });
});

module.exports = router;

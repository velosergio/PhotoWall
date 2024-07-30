const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const db = require('../models/user');
const path = require('path');

// Ruta para mostrar el formulario de restablecimiento de contraseña
router.get('/reset/:token', (req, res) => {
    db.get(`SELECT * FROM users WHERE resetPasswordToken = ? AND resetPasswordExpires > ?`, 
        [req.params.token, Date.now()], (err, user) => {
            if (!user) return res.status(400).send('El token de restablecimiento de contraseña no es válido o ha expirado.');
            res.sendFile(path.join(__dirname, '../public/reset-password.html'));
        }
    );
});

// Ruta para manejar el envío del formulario de restablecimiento de contraseña
router.post('/reset/:token', async (req, res) => {
    const { password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        db.run(`UPDATE users SET password = ?, resetPasswordToken = NULL, resetPasswordExpires = NULL WHERE resetPasswordToken = ?`,
            [hashedPassword, req.params.token], (err) => {
                if (err) return res.status(500).send('Error del servidor');
                res.send('Su contraseña ha sido restablecida con éxito.');
            }
        );
    } catch (err) {
        res.status(500).send('Error al restablecer la contraseña');
    }
});

module.exports = router;

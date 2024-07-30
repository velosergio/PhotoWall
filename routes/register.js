const express = require('express');
const bcrypt = require('bcryptjs');
const db = require('../models/user');
const router = express.Router();

router.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/register.html'));
});

router.post('/register', async (req, res) => {
    const { username, email, password, confirm_password } = req.body;

    if (password !== confirm_password) {
        return res.status(400).send('Las contraseñas no coinciden');
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        db.run(`INSERT INTO users (username, email, password) VALUES (?, ?, ?)`, 
            [username, email, hashedPassword], function(err) {
                if (err) {
                    return res.status(500).send('Error al registrar el usuario');
                }
                res.redirect('/login');
            }
        );
    } catch (err) {
        res.status(500).send('Error al registrar el usuario');
    }
});

module.exports = router;

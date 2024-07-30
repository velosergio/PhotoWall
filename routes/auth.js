const express = require('express');
const passport = require('passport');
const bcrypt = require('bcryptjs');
const db = require('../models/user');
const path = require('path');
const router = express.Router();

router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'login.html'));
});

router.post('/login',
    passport.authenticate('local', { successRedirect: '/', failureRedirect: '/login' })
);

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/login');
});

router.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'register.html'));
});

router.post('/register', async (req, res) => {
    const { username, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        db.run(`INSERT INTO users (username, password) VALUES (?, ?)`, [username, hashedPassword], function(err) {
            if (err) {
                return res.status(500).send('Error al registrar el usuario');
            }
            res.redirect('/login');
        });
    } catch (err) {
        res.status(500).send('Error al registrar el usuario');
    }
});

module.exports = router;
